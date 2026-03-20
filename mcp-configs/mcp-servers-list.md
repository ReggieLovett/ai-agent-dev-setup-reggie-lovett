# MCP Servers List

**Developer:** Reggie Lovett  
**Date:** March 17, 2026  
**Purpose:** Documentation of all MCP servers connected to Claude Desktop

---

## Overview

This document lists all four MCP (Model Context Protocol) servers integrated into the AI Agent development environment. Each server extends Claude's capabilities with specialized tools for different workflows.

---

## 1. Rolldice MCP Server

**Status:** ✅ Connected and Functional

**Purpose:**  
A testing and demonstration tool that shows how MCP servers enable Claude to interact with external tools. It generates random dice rolls to verify MCP connectivity.

**Type:** Custom Implementation  
**Location:** `/mcp-servers/rolldice/`  
**Command:** `node /Users/reggielovett/Desktop/ai-agent-dev-setup-reggie-lovett/mcp-servers/rolldice/index.js`

**Available Tools:**
- **roll_dice** - Generate random dice rolls
  - Parameters:
    - `sides` (number, optional): Number of sides on each die (default: 6)
    - `count` (number, optional): Number of dice to roll (default: 1)
  - Returns: List of rolls and total sum
  - Example: `roll_dice(sides=20, count=2)` returns two d20 rolls

**Technical Details:**
- Built with Node.js and MCP SDK
- Implements `ListToolsRequestSchema` to advertise available tools
- Implements `CallToolRequestSchema` to execute tool requests
- Uses stdio transport for Claude Desktop communication

---

## 2. Bootcamp AI Agent MCP Server

**Status:** ✅ Connected and Functional

**Purpose:**  
Provides filesystem access, allowing Claude to read and interact with files in the project directory. Essential for bootcamp development tasks.

**Type:** Official MCP Package  
**Package:** `@modelcontextprotocol/server-filesystem`  
**Command:** `npx @modelcontextprotocol/server-filesystem ./`

**Available Tools:**
- File reading and exploration
- Directory navigation
- File metadata retrieval

**Technical Details:**
- Official SDK from Anthropic
- Filesystem operations scoped to project directory
- Provides sandboxed access to prevent unauthorized system access

---

## 3. Calendar MCP Server

**Status:** ✅ Connected and Functional

**Purpose:**  
Event management and scheduling tool that demonstrates how AI can interact with calendar systems. Useful for personal organization and demonstrating agent capabilities.

**Type:** Custom Implementation  
**Location:** `/mcp-servers/calendar/`  
**Command:** `node /Users/reggielovett/Desktop/ai-agent-dev-setup-reggie-lovett/mcp-servers/calendar/index.js`

**Available Tools:**

- **get_current_time**
  - Returns: Current date and time in ISO format
  - Parameters: None required

- **add_event**
  - Creates a new calendar event
  - Parameters: title, date (required), time and description (optional)

- **list_events**
  - Retrieves all scheduled events
  - Parameters: None required

**Technical Details:**
- Custom MCP server using Node.js
- In-memory event storage
- ISO 8601 datetime format for compatibility
- Proper MCP capabilities declaration

---

## 4. GitHub MCP Server

**Status:** ✅ Connected and Functional

**Purpose:**  
Direct integration with GitHub repositories, enabling Claude to interact with version control, retrieve code, and assist with development workflows without leaving Claude Desktop.

**Type:** Official MCP Package  
**Package:** `@modelcontextprotocol/server-github`  
**Authentication:** GitHub Personal Access Token (configured)

**Available Tools:**
- Repository listing and navigation
- File retrieval from repositories
- Issue and pull request interaction
- Version control operations
- Git history exploration

**Technical Details:**
- Official implementation from Anthropic
- Uses GitHub REST API
- Requires valid GitHub Personal Access Token
- Supports public and private repositories

---

## Summary

These MCP servers extend Claude Desktop by enabling testing tools, scheduling, and GitHub integration for AI-assisted development.