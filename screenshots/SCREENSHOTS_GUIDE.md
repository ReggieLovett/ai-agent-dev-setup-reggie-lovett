# Screenshots Guide for Bootcamp Submission

This directory contains proof of a fully configured AI Agent development environment with all MCP servers connected and working.

## Screenshots Required

Follow the instructions below to capture and save each screenshot in this directory.

---

## 1. Node.js Installation Verification
**Filename:** `node-version.png`

**Steps:**
1. Open Terminal
2. Run: `node --version`
3. Screenshot the output showing v25.8.1
4. Save as `node-version.png` in this directory

**Why:** Proves Node.js is installed and available for running MCP servers

---

## 2. Git Installation Verification
**Filename:** `git-version.png`

**Steps:**
1. Open Terminal
2. Run: `git --version`
3. Screenshot the output showing git 2.39.5
4. Save as `git-version.png` in this directory

**Why:** Proves Git is installed for version control

---

## 3. VS Code Insiders with Copilot
**Filename:** `vscode-insiders.png`

**Steps:**
1. Open VS Code Insiders
2. Click on Extensions icon (left sidebar)
3. Show the GitHub Copilot extension as installed/enabled
4. Screenshot showing VS Code Insiders title bar and Copilot extension
5. Save as `vscode-insiders.png` in this directory

**Why:** Proves VS Code Insiders and GitHub Copilot are installed and enabled

---

## 4. Claude Desktop with All MCP Servers
**Filename:** `claude-desktop-all-servers.png`

**Steps:**
1. Open Claude Desktop
2. Click the Tools icon (looks like a wrench or tool icon in the interface)
3. You should see 4 servers listed:
   - Rolldice
   - Bootcamp AI Agent (or bootcamp-ai-agent)
   - Calendar
   - GitHub
4. Screenshot showing all 4 servers in the tools/agents list
5. Save as `claude-desktop-all-servers.png` in this directory

**Why:** Proves all 4 MCP servers are connected to Claude Desktop

---

## 5. Rolldice Server Working
**Filename:** `rolldice-test.png`

**Steps:**
1. Open Claude Desktop
2. Ask Claude: "Roll a d20 dice for me"
3. Claude should respond with a random number between 1-20
4. Screenshot showing the conversation with the successful dice roll result
5. Save as `rolldice-test.png` in this directory

**Why:** Proves Rolldice MCP server is connected and functional

---

## 6. Bootcamp AI Agent Server Working
**Filename:** `bootcamp-filesystem-test.png`

**Steps:**
1. Open Claude Desktop
2. Ask Claude: "List the files in the current project directory" or "What files are in the mcp-configs directory?"
3. Claude should respond with file listings from your project
4. Screenshot showing Claude listing project files
5. Save as `bootcamp-filesystem-test.png` in this directory

**Why:** Proves filesystem/bootcamp MCP server is connected and functional

---

## 7. Calendar Server Working
**Filename:** `calendar-test.png`

**Steps:**
1. Open Claude Desktop
2. Ask Claude: "What is the current date and time?"
3. Claude should respond with the current date and time
4. Optionally: "Add an event called 'Bootcamp Week 1' on March 17, 2026"
5. Claude should confirm the event was added
6. Screenshot showing both interactions
7. Save as `calendar-test.png` in this directory

**Why:** Proves Calendar MCP server is connected and functional with time/event tools

---

## 8. GitHub Server Working
**Filename:** `github-test.png`

**Steps:**
1. Open Claude Desktop
2. Ask Claude: "Can you help me with GitHub?" or "List my repositories"
3. Claude should attempt to interact with GitHub via the MCP server
4. Even if you don't have many repos, the connection should work
5. Screenshot showing Claude accessing GitHub functionality
6. Save as `github-test.png` in this directory

**Why:** Proves GitHub MCP server is connected and functional

---

## 9. Git Commit History
**Filename:** `git-history.png`

**Steps:**
1. Open Terminal
2. Navigate to your project: `cd /Users/reggielovett/Desktop/ai-agent-dev-setup-reggie-lovett`
3. Run: `git log --oneline`
4. You should see 7 meaningful commits
5. Screenshot the output showing all commits with their messages
6. Save as `git-history.png` in this directory

**Why:** Proves proper version control workflow with meaningful commits

---

## 10. Project Structure
**Filename:** `project-structure.png`

**Steps:**
1. Open Terminal
2. Navigate to your project directory
3. Run: `find . -type f -name "*.md" -o -name "*.json" -o -name "*.js" | grep -v node_modules | sort`
4. Screenshot showing the file structure
5. Save as `project-structure.png` in this directory

**Why:** Proves all required files are present in the repository

---

## Summary of Screenshots

| Screenshot | Purpose | Proves |
|-----------|---------|--------|
| node-version.png | Node.js installed | Development environment ready |
| git-version.png | Git installed | Version control available |
| vscode-insiders.png | VS Code + Copilot | Advanced editor configured |
| claude-desktop-all-servers.png | All 4 MCP servers | Complete MCP integration |
| rolldice-test.png | Rolldice works | Custom server functional |
| bootcamp-filesystem-test.png | Filesystem access | Bootcamp agent working |
| calendar-test.png | Calendar works | Calendar server functional |
| github-test.png | GitHub integration | GitHub server functional |
| git-history.png | 7+ commits | Proper version control |
| project-structure.png | All files present | Complete documentation |

---

## How to Add Screenshots to Git

After taking all screenshots and saving them to this `screenshots/` directory:

```bash
cd /Users/reggielovett/Desktop/ai-agent-dev-setup-reggie-lovett
git add screenshots/
git commit -m "docs: Add screenshot evidence of MCP servers and environment setup"
git push -u origin main
```

---

## Verification Checklist

- [ ] node-version.png - No
- [ ] git-version.png saved
- [ ] vscode-insiders.png saved
- [ ] claude-desktop-all-servers.png saved
- [ ] rolldice-test.png saved
- [ ] bootcamp-filesystem-test.png saved
- [ ] calendar-test.png saved
- [ ] github-test.png saved
- [ ] git-history.png saved
- [ ] project-structure.png saved
- [ ] All screenshots added to git
- [ ] Final commit pushed to GitHub

---

**Note:** Screenshots are the final proof needed for submission. Take them before pushing to GitHub to complete your bootcamp submission.
