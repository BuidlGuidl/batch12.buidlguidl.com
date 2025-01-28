import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { getCodeContext } from "~~/utils/codeContext";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `You are a helpful AI assistant with deep knowledge of the current project's codebase. 
When showing code examples:
1. Always specify the language after the opening \`\`\` (e.g. \`\`\`typescript)
2. For file-specific code, include the full path (e.g. \`\`\`typescript:packages/nextjs/components/Example.tsx)
3. Use proper indentation (2 spaces)
4. Break long lines for readability
5. Add brief comments for complex logic
6. When showing modifications to existing files, use "// ... existing code ..." to indicate unchanged sections
7. Don't notify about installing dependencies, just show the code.
Use the provided code context to answer questions accurately and provide relevant code examples.
Always reference specific files and code sections when explaining.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const codeContext = await getCodeContext();
    const useAnthropic = process.env.USE_ANTHROPIC === "true";

    // Check for API keys before proceeding
    if (useAnthropic && !process.env.ANTHROPIC_API_KEY) {
      console.error("Anthropic API key is missing.");
      return NextResponse.json({ error: "Anthropic API key is missing" }, { status: 500 });
    } else if (!useAnthropic && !process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key is missing.");
      return NextResponse.json({ error: "OpenAI API key is missing" }, { status: 500 });
    }

    // Instantiate the API clients inside the API call to avoid issues during build time
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const contextualizedMessages: Message[] = [
      { role: "system", content: SYSTEM_PROMPT + "\n\n" + codeContext },
      ...messages,
    ];

    if (useAnthropic) {
      const response = await anthropic.messages.create({
        messages: contextualizedMessages.map(msg => ({
          role: msg.role === "system" ? "assistant" : msg.role,
          content: msg.content,
        })),
        model: "claude-3-opus-20240229",
        max_tokens: 1024,
      });

      const messageContent =
        response.content[0].type === "text" ? response.content[0].text : "Unsupported response type";

      return NextResponse.json({ message: messageContent });
    } else {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: contextualizedMessages,
        temperature: 0.7,
        max_tokens: 1024,
      });

      return NextResponse.json({ message: response.choices[0].message.content });
    }
  } catch (error) {
    console.error("AI Chat error:", error);
    return NextResponse.json({ error: "Failed to get AI response" }, { status: 500 });
  }
}
