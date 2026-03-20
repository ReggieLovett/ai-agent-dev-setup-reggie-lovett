#!/usr/bin/env node

const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} = require("@modelcontextprotocol/sdk/types.js");

const server = new Server(
  {
    name: "rolldice",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "roll_dice",
        description: "Roll dice with specified number of sides",
        inputSchema: {
          type: "object",
          properties: {
            sides: {
              type: "number",
              description: "Number of sides on the dice (default: 6)",
            },
            count: {
              type: "number",
              description: "Number of dice to roll (default: 1)",
            },
          },
          required: [],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "roll_dice") {
    const sides = request.params.arguments?.sides || 6;
    const count = request.params.arguments?.count || 1;
    
    const rolls = [];
    for (let i = 0; i < count; i++) {
      rolls.push(Math.floor(Math.random() * sides) + 1);
    }
    
    const total = rolls.reduce((a, b) => a + b, 0);
    
    return {
      content: [
        {
          type: "text",
          text: `Rolled ${count}d${sides}: ${rolls.join(", ")} (Total: ${total})`,
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
