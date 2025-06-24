#!/bin/bash

# Cursor Kingly Setup Script
# Copies the Kingly AI configuration to any project

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR"
TARGET_DIR="${1:-.}"

echo "🧙🏽‍♂️ Setting up Cursor Kingly AI..."

# Create .cursor directory if it doesn't exist
mkdir -p "$TARGET_DIR/.cursor"

# Copy configuration files
echo "📋 Copying configuration..."
cp -r "$SOURCE_DIR/project-types" "$TARGET_DIR/.cursor/"
cp -r "$SOURCE_DIR/command-mappings" "$TARGET_DIR/.cursor/"
cp "$SOURCE_DIR/index.mdc" "$TARGET_DIR/.cursor/"

# Create .cursorrules if it doesn't exist
if [ ! -f "$TARGET_DIR/.cursorrules" ]; then
  echo "📝 Creating .cursorrules..."
  cat >"$TARGET_DIR/.cursorrules" <<'EOF'
# Kingly AI - Project Rules

Load the configuration from .cursor/index.mdc for intelligent assistance.

When user says "prime", analyze the project and apply appropriate rules.

Natural language triggers are defined in .cursor/command-mappings/.
Project-specific rules are in .cursor/project-types/.

Always check for these configurations and apply them contextually.
EOF
fi

echo "✅ Cursor Kingly AI setup complete!"
echo ""
echo "📚 Available commands:"
echo "  - Say 'prime' to analyze and configure the project"
echo "  - Say 'checkpoint' to save session state"
echo "  - Say 'handoff' to create session timeline"
echo "  - Say 'research' for deep dive mode"
echo ""
echo "🔧 Configuration location: $TARGET_DIR/.cursor/"
