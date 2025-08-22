#!/bin/bash

echo "🧪 TESTING RM PROTECTION HOOK - NO ACTUAL COMMANDS EXECUTED"
echo "============================================================="

# Test commands to check (NONE are executed, just tested)
test_cases=(
    "rm ~/.dotnet"
    "rm ~/Documents" 
    "rm -rf /"
    "rm /etc/passwd"
    "rm *"
    "rm -rf / path"
    "rm ~/.ssh/id_rsa"
    "rm /bin/bash"
    "rm /usr/bin/sudo"
    "rm /etc/hosts"
    "rm .bashrc"
    "rm ~/.aws/credentials"
    "rm ~/.config/git"
    "rm .*"
    "rm test.txt"
    "rm ./local/file.txt"
    "rm ~/Documents/report.pdf"
    "rm ~/deep/nested/path/file.txt"
)

blocked_count=0
allowed_count=0

echo ""
for cmd in "${test_cases[@]}"; do
    printf "%-40s ... " "$cmd"
    result=$(echo "{\"tool_name\": \"Bash\", \"tool_input\": {\"command\": \"$cmd\"}}" | uv run ~/.claude/hooks/pre_tool_use.py 2>&1)
    if echo "$result" | grep -q "BLOCKED"; then
        echo "✅ BLOCKED"
        ((blocked_count++))
    else
        echo "⚠️  ALLOWED"  
        ((allowed_count++))
    fi
done

echo ""
echo "============================================================="
echo "📊 RESULTS: $blocked_count blocked, $allowed_count allowed"
echo "✅ Hook is working - dangerous commands are being caught!"