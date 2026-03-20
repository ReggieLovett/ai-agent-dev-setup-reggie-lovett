# AI Agent Developer Environment Setup

Name: Reggie Lovett  
Workshop Cohort: “AI Agent Developer Program – Week 1 Cohort” march 2026
Project: AI Agent Developer Environment Setup

## Project Overview
This repository documents the setup of my AI Agent development environment. The goal of this project is to demonstrate that my system is fully prepared for AI agent development using Claude Desktop and MCP (Model Context Protocol) servers.

The environment includes essential development tools such as Node.js, Git, and VS Code Insiders, along with MCP server connections that allow AI tools to interact with external services.

---

# Development Environment Checklist

## Node.js Installed
Node.js is required to run MCP servers locally.  
Screenshot:
(Add screenshot of `node --version`)

## Git Installed
Git is used for version control and managing the repository.  
Screenshot:
(Add screenshot of `git --version`)

## VS Code Insiders with GitHub Copilot
VS Code Insiders provides access to the latest development features, while GitHub Copilot assists with AI-powered coding suggestions.

Screenshot:
(Add screenshot showing VS Code Insiders and Copilot extension enabled)

## Claude Desktop with MCP Servers
Claude Desktop is configured with MCP servers that allow AI tools to interact with external services.

Connected servers:
- Rolldice
- Bootcamp AI Agent
- Calendar Booking
- GitHub

Screenshot:
(Add screenshot showing Claude Desktop with MCP servers)

---

# MCP Servers Overview

## Rolldice Server
The Rolldice MCP server is a simple testing tool used to demonstrate how AI agents can interact with external tools. It generates random dice rolls and helps verify that the MCP connection is functioning correctly.

## Bootcamp AI Agent Server
This server provides tools specifically designed for the AI Agent development bootcamp. It allows experimentation with agent behaviors and testing of tool interactions within the learning environment.

## Calendar Booking Server
The Calendar Booking server allows AI tools to interact with scheduling systems. It demonstrates how an AI agent can create, manage, or retrieve calendar events.

## GitHub MCP Server
The GitHub MCP server enables Claude to interact with GitHub repositories. It can list repositories, retrieve files, and assist with development workflows directly through AI commands.

---

# Troubleshooting Notes

During the setup process, I encountered several configuration issues.

One issue was ensuring that Node.js and npm were properly installed so that MCP servers could run. Running `node --version` and `npm --version` helped confirm that the installation was successful.

Another challenge involved configuring the `claude_desktop_config.json` file correctly so that Claude Desktop could detect the MCP servers. After verifying the file location and restarting Claude Desktop, the servers successfully appeared in the tools list.

These troubleshooting steps helped ensure that the development environment was correctly configured and ready for AI agent development.