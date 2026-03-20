# Quick Screenshot Capture Guide

Follow these steps to complete your bootcamp submission with visual proof.

## Quick Reference - Screenshots Needed

| # | Name | Command/Action | Where to Save |
|---|------|----------------|---------------|
| 1 | Node version | Terminal: `node --version` | `screenshots/node-version.png` |
| 2 | Git version | Terminal: `git --version` | `screenshots/git-version.png` |
| 3 | VS Code Insiders | Show VS Code Insiders with Copilot enabled | `screenshots/vscode-insiders.png` |
| 4 | All MCP servers | Claude Desktop: Tools menu showing 4 servers | `screenshots/claude-desktop-all-servers.png` |
| 5 | Rolldice test | Claude: "Roll a d20" → shows random number | `screenshots/rolldice-test.png` |
| 6 | Filesystem test | Claude: "List mcp-configs files" → shows files | `screenshots/bootcamp-filesystem-test.png` |
| 7 | Calendar test | Claude: "What's today's date?" → shows date/time | `screenshots/calendar-test.png` |
| 8 | GitHub test | Claude: "Access GitHub" or list repos | `screenshots/github-test.png` |
| 9 | Git history | Terminal: `git log --oneline` | `screenshots/git-history.png` |
| 10 | Project files | Terminal: `find . -type f ...` | `screenshots/project-structure.png` |

---

## Step-by-Step Instructions

### Taking Screenshots on macOS

**Method 1: Built-in Screenshot Tool (Recommended)**
- Press `Cmd + Shift + 4` - Select area to capture
- Press `Cmd + Shift + 3` - Capture entire screen
- Press `Cmd + Shift + 5` - Open screenshot menu with options
- Screenshots automatically save to Desktop

**Method 2: Via Screenshot App**
- Open Spotlight: `Cmd + Space`
- Type "Screenshot" and press Enter
- Use the Screenshot app interface

### Save Screenshots to Repository

After taking each screenshot:
```bash
# Move each screenshot to the project
mv ~/Desktop/screenshot.png /Users/reggielovett/Desktop/ai-agent-dev-setup-reggie-lovett/screenshots/

# Or rename while moving
mv ~/Desktop/screenshot.png /Users/reggielovett/Desktop/ai-agent-dev-setup-reggie-lovett/screenshots/node-version.png
```

---

## Detailed Capture Instructions

### 1. **node-version.png**
```bash
# In Terminal
node --version
# Should show: v25.8.1
# Capture the entire Terminal window showing this output
```

### 2. **git-version.png**
```bash
# In Terminal
git --version
# Should show: git version 2.39.5 (Apple Git-154)
# Capture the Terminal output
```

### 3. **vscode-insiders.png**
1. Open VS Code Insiders (should have "Insiders" in the title)
2. Click Extensions icon on left sidebar (or Cmd + Shift + X)
3. Search for "GitHub Copilot"
4. Show it's installed and enabled
5. Capture the window showing VS Code Insiders title and Copilot

### 4. **claude-desktop-all-servers.png**
1. Open Claude Desktop
2. Look for the "Tools" icon or menu (usually wrench/gear icon)
3. You should see these 4 servers:
   - rolldice
   - bootcamp-ai-agent
   - calendar
   - github
4. Capture showing all 4 servers listed

### 5. **rolldice-test.png**
1. In Claude Desktop chat, type: "Roll a d20 dice for me"
2. Claude responds with: "Rolled 1d20: [number] (Total: [number])"
3. Capture the full conversation showing the dice roll result

### 6. **bootcamp-filesystem-test.png**
1. In Claude Desktop, type: "Can you list the files in the mcp-configs directory?"
2. Claude responds with file listings from that directory
3. Capture the conversation showing Claude accessed your files

### 7. **calendar-test.png**
1. In Claude Desktop, type: "What is the current date and time?"
2. Claude responds with something like: "Current date and time: 2026-03-17T..."
3. Optionally: "Add an event called 'Week 1' on March 17, 2026"
4. Claude: "Event added: Week 1 on 2026-03-17"
5. Capture both interactions

### 8. **github-test.png**
1. In Claude Desktop, type: "Can you help me with my GitHub repositories?"
2. Claude should respond showing it can access GitHub MCP
3. Capture the interaction showing GitHub server is accessible

### 9. **git-history.png**
```bash
# In Terminal, in your project directory
cd /Users/reggielovett/Desktop/ai-agent-dev-setup-reggie-lovett
git log --oneline
# Shows all 8 commits with messages
# Capture the Terminal output
```

### 10. **project-structure.png**
```bash
# In Terminal
ls -la
# Or for more detail:
find . -type f -name "*.md" -o -name "*.json" -o -name "*.js" | grep -v node_modules | sort
# Capture showing the repository structure
```

---

## Organizing Screenshots

1. **Take all screenshots** following the guide above
2. **Save them** to `~/Desktop/ai-agent-dev-setup-reggie-lovett/screenshots/`
3. **Name them exactly** as specified (node-version.png, git-version.png, etc.)
4. **Verify filenames** match the guide

---

## Adding Screenshots to Git

Once all screenshots are captured and saved:

```bash
# Navigate to project
cd /Users/reggielovett/Desktop/ai-agent-dev-setup-reggie-lovett

# Check status
git status
# Should show screenshots/ folder with 10 .png files

# Add all screenshots
git add screenshots/

# Commit
git commit -m "docs: Add screenshot evidence of MCP server setup and functionality"

# Push to GitHub
git push -u origin main
```

---

## Final Submission Checklist

- [ ] All 10 screenshots captured
- [ ] Screenshots saved in `screenshots/` directory
- [ ] Filenames match exactly (no spaces, correct case)
- [ ] Screenshots added to git
- [ ] Commit made with 8+ total commits
- [ ] Pushed to GitHub
- [ ] Repository URL ready to submit

---

## Example Final Repository on GitHub

Your GitHub repository will have:
- ✅ README.md (100 lines)
- ✅ reflection.md (500+ words)
- ✅ VERIFICATION.md (complete evidence)
- ✅ mcp-configs/ (all configuration files)
- ✅ mcp-servers/ (custom server implementations)
- ✅ screenshots/ (10 proof images)
- ✅ .gitignore (proper git configuration)
- ✅ 8+ meaningful commits

---

## Need Help?

If a screenshot doesn't turn out:
- **Too small?** Use Cmd+Shift+5 to select a specific area
- **Terminal text unclear?** Make terminal window larger before screenshot
- **Claude not responding?** Make sure Claude Desktop is running and has focus
- **Missing a server?** Restart Claude Desktop and check MCP configuration

Good luck with your submission! 🚀
