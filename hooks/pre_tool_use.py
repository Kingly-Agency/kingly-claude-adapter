#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.8"
# ///

import json
import sys
import re
from pathlib import Path


def is_dangerous_rm_command(command):
    """
    Comprehensive detection of dangerous rm commands.
    Matches various forms of rm -rf and similar destructive patterns.
    """
    # Normalize command by removing extra spaces and converting to lowercase
    normalized = " ".join(command.lower().split())

    # Pattern 1: Standard rm -rf variations - ALWAYS DANGEROUS
    patterns = [
        r"\brm\s+.*-[a-z]*r[a-z]*f",  # rm -rf, rm -fr, rm -Rf, etc.
        r"\brm\s+.*-[a-z]*f[a-z]*r",  # rm -fr variations
        r"\brm\s+--recursive\s+--force",  # rm --recursive --force
        r"\brm\s+--force\s+--recursive",  # rm --force --recursive
        r"\brm\s+-r\s+.*-f",  # rm -r ... -f
        r"\brm\s+-f\s+.*-r",  # rm -f ... -r
    ]

    # Check for dangerous patterns
    for pattern in patterns:
        if re.search(pattern, normalized):
            return True

    # Pattern 2: CRITICAL - Block rm of home directory items (~/something)
    # This catches rm ~/.dotnet, rm ~/Documents, etc.
    # Pattern matches ~ followed by / and then anything WITHOUT another /
    home_dir_pattern = r"\brm\s+(?:.*\s+)?~/[^/\s]+(?:\s|$)"
    if re.search(home_dir_pattern, command):  # Use original command to preserve case
        return True

    # Also block $HOME/something pattern
    home_var_pattern = r"\brm\s+(?:.*\s+)?\$home/[^/\s]+(?:\s|$)"
    if re.search(home_var_pattern, normalized):
        return True

    # Pattern 3: CRITICAL SYSTEM DIRECTORIES - Block ANY rm in these paths
    system_dirs = [
        r"\brm\s+(?:.*\s+)?/bin/",  # System binaries
        r"\brm\s+(?:.*\s+)?/usr/",  # System programs
        r"\brm\s+(?:.*\s+)?/etc/",  # System configs
        r"\brm\s+(?:.*\s+)?/system/",  # macOS System
        r"\brm\s+(?:.*\s+)?/library/",  # macOS Library
        r"\brm\s+(?:.*\s+)?/applications/",  # macOS Applications
        r"\brm\s+(?:.*\s+)?/sbin/",  # System admin binaries
        r"\brm\s+(?:.*\s+)?/var/",  # Variable data
        r"\brm\s+(?:.*\s+)?/opt/",  # Optional software
        r"\brm\s+(?:.*\s+)?/private/",  # macOS private
    ]

    for pattern in system_dirs:
        if re.search(pattern, normalized):
            return True

    # Pattern 4: CRITICAL SINGLE FILES - Never delete these
    critical_files = [
        r"/etc/passwd\b",  # User accounts
        r"/etc/sudoers\b",  # Sudo permissions
        r"/etc/hosts\b",  # Network resolution
        r"/etc/shells\b",  # Valid shells
        r"/etc/fstab\b",  # File systems
        r"\.bash_profile\b",  # Bash profile
        r"\.bashrc\b",  # Bash config
        r"\.zshrc\b",  # Zsh config
        r"\.zprofile\b",  # Zsh profile
    ]

    for pattern in critical_files:
        if re.search(pattern, normalized):
            return True

    # Pattern 5: WILDCARD FOOTGUNS - Block dangerous wildcards
    wildcard_patterns = [
        r"\brm\s+(?:-[a-z]*\s+)*\*(?:\s|$)",  # rm * or rm -f *
        r"\brm\s+(?:-[a-z]*\s+)*\.\*(?:\s|$)",  # rm .* (all hidden)
        r"\brm\s+(?:-[a-z]*\s+)*\*/\*",  # rm */* (everything nested)
        r"\brm\s+(?:.*\s+)?~/\*(?:\s|$)",  # rm ~/* (everything in home)
        r"\brm\s+(?:.*\s+)?/\*(?:\s|$)",  # rm /* (everything in root)
    ]

    for pattern in wildcard_patterns:
        if re.search(pattern, normalized):
            return True

    # Pattern 6: SPACE TYPOS - Detect catastrophic space errors
    space_typos = [
        r"\brm\s+-rf\s+/\s+",  # rm -rf / [anything] - space after /
        r"\brm\s+-rf\s+~\s+",  # rm -rf ~ [anything] - space after ~
        r"\brm\s+.*-[a-z]*r[a-z]*.*\s+/\s+\w",  # rm -r[f] / something
    ]

    for pattern in space_typos:
        if re.search(pattern, normalized):
            return True

    # Pattern 7: CRITICAL DEV DIRECTORIES - Protect credentials and configs
    dev_critical = [
        r"~/\.ssh/",  # SSH keys
        r"~/\.aws/",  # AWS credentials
        r"~/\.config/",  # Application configs
        r"~/\.gnupg/",  # GPG keys
        r"~/\.docker/",  # Docker configs
        r"~/\.kube/",  # Kubernetes configs
        r"~/\.npm/",  # NPM configs
        r"~/\.gem/",  # Ruby gems
        r"\$home/\.ssh/",  # SSH with $HOME
        r"\$home/\.aws/",  # AWS with $HOME
    ]

    for pattern in dev_critical:
        if re.search(pattern, normalized):
            return True

    # Pattern 8: Check for rm with recursive flag targeting dangerous paths
    dangerous_paths = [
        r"/",  # Root directory
        r"/\*",  # Root with wildcard
        r"~",  # Home directory
        r"~/",  # Home directory path
        r"\$home",  # Home environment variable
        r"\.\.",  # Parent directory references
        r"\*",  # Wildcards in general rm -rf context
        r"\.",  # Current directory
        r"\.\s*$",  # Current directory at end of command
    ]

    # FIXED: More precise recursive flag detection - only match actual flags, not file paths
    # Look for -r or --recursive as actual command flags (after rm and before file paths)
    recursive_patterns = [
        r"\brm\s+.*-[a-z]*r[a-z]*\s",  # rm -r, rm -rf followed by space
        r"\brm\s+.*-[a-z]*r[a-z]*$",  # rm -r, rm -rf at end
        r"\brm\s+.*--recursive",  # rm --recursive
    ]

    has_recursive_flag = any(
        re.search(pattern, normalized) for pattern in recursive_patterns
    )

    if has_recursive_flag:
        for path in dangerous_paths:
            if re.search(path, normalized):
                return True

    return False


def is_env_file_access(tool_name, tool_input):
    """
    Check if any tool is trying to access .env files containing sensitive data.
    """
    if tool_name in ["Read", "Edit", "MultiEdit", "Write", "Bash"]:
        # Check file paths for file-based tools
        if tool_name in ["Read", "Edit", "MultiEdit", "Write"]:
            file_path = tool_input.get("file_path", "")
            if ".env" in file_path and not file_path.endswith(".env.sample"):
                return True

        # Check bash commands for .env file access
        elif tool_name == "Bash":
            command = tool_input.get("command", "")
            # Pattern to detect .env file access (but allow .env.sample)
            env_patterns = [
                r"\b\.env\b(?!\.sample)",  # .env but not .env.sample
                r"cat\s+.*\.env\b(?!\.sample)",  # cat .env
                r"echo\s+.*>\s*\.env\b(?!\.sample)",  # echo > .env
                r"touch\s+.*\.env\b(?!\.sample)",  # touch .env
                r"cp\s+.*\.env\b(?!\.sample)",  # cp .env
                r"mv\s+.*\.env\b(?!\.sample)",  # mv .env
            ]

            for pattern in env_patterns:
                if re.search(pattern, command):
                    return True

    return False


def main():
    try:
        # Read JSON input from stdin
        input_data = json.load(sys.stdin)

        tool_name = input_data.get("tool_name", "")
        tool_input = input_data.get("tool_input", {})

        # Check for .env file access (blocks access to sensitive environment files)
        if is_env_file_access(tool_name, tool_input):
            print(
                "BLOCKED: Access to .env files containing sensitive data is prohibited",
                file=sys.stderr,
            )
            print("Use .env.sample for template files instead", file=sys.stderr)
            sys.exit(2)  # Exit code 2 blocks tool call and shows error to Claude

        # Check for dangerous rm -rf commands
        if tool_name == "Bash":
            command = tool_input.get("command", "")

            # Block rm -rf commands with comprehensive pattern matching
            if is_dangerous_rm_command(command):
                print(
                    "BLOCKED: Dangerous rm command detected and prevented",
                    file=sys.stderr,
                )
                sys.exit(2)  # Exit code 2 blocks tool call and shows error to Claude

        # # Ensure log directory exists
        # log_dir = Path.cwd() / 'logs'
        # log_dir.mkdir(parents=True, exist_ok=True)
        # log_path = log_dir / 'pre_tool_use.json'

        # # Read existing log data or initialize empty list
        # if log_path.exists():
        #     with open(log_path, 'r') as f:
        #         try:
        #             log_data = json.load(f)
        #         except (json.JSONDecodeError, ValueError):
        #             log_data = []
        # else:
        #     log_data = []

        # # Append new data
        # log_data.append(input_data)

        # # Write back to file with formatting
        # with open(log_path, 'w') as f:
        #     json.dump(log_data, f, indent=2)

        sys.exit(0)

    except json.JSONDecodeError:
        # Gracefully handle JSON decode errors
        sys.exit(0)
    except Exception:
        # Handle any other errors gracefully
        sys.exit(0)


if __name__ == "__main__":
    main()
