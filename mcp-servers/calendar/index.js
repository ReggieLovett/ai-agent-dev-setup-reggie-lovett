#!/usr/bin/env node

const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} = require("@modelcontextprotocol/sdk/types.js");

const server = new Server(
  {
    name: "calendar",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Simple in-memory event store
const events = [];

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_current_time",
        description: "Get the current date and time",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
      {
        name: "add_event",
        description: "Add an event to the calendar",
        inputSchema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "Event title",
            },
            date: {
              type: "string",
              description: "Event date (YYYY-MM-DD)",
            },
            time: {
              type: "string",
              description: "Event time (HH:MM)",
            },
            description: {
              type: "string",
              description: "Event description",
            },
          },
          required: ["title", "date"],
        },
      },
      {
        name: "list_events",
        description: "List all calendar events",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "get_current_time") {
    const now = new Date();
    return {
      content: [
        {
          type: "text",
          text: `Current date and time: ${now.toISOString()}`,
        },
      ],
    };
  }
  
  if (request.params.name === "add_event") {
    const { title, date, time, description } = request.params.arguments;
    const event = {
      id: Date.now(),
      title,
      date,
      time: time || "00:00",
      description: description || "",
    };
    events.push(event);
    return {
      content: [
        {
          type: "text",
          text: `Event added: ${title} on ${date} at ${event.time}`,
        },
      ],
    };
  }
  
  if (request.params.name === "list_events") {
    if (events.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: "No events scheduled",
          },
        ],
      };
    }
    
    const eventList = events
      .map((e) => `- ${e.title} on ${e.date} at ${e.time}`)
      .join("\n");
    
    return {
      content: [
        {
          type: "text",
          text: `Calendar Events:\n${eventList}`,
        },
      ],
    };
  }
  
  throw new Error(`Unknown tool: ${request.params.name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
