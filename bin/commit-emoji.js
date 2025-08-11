#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const emojiMap = require("../lib/emojiMap");

const args = process.argv.slice(2);

if (args[0] === "init") {
  const hookPath = path.join(process.cwd(), ".git", "hooks", "prepare-commit-msg");
  const hookContent = `#!/bin/sh
node ${path.join(__dirname, "../lib/hookHandler.js")} "$1" "$2" "$3"
`;
  fs.writeFileSync(hookPath, hookContent, { mode: 0o755 });
  console.log("✅ Commit-Emoji hook installed!");
  process.exit(0);
}

console.log("Usage: commit-emoji init");
