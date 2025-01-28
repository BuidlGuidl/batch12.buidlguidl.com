"use client";

import { useState } from "react";
import { ComponentType } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighterBase } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const SyntaxHighlighter = SyntaxHighlighterBase as unknown as ComponentType<any>;

type Message = {
  role: "user" | "assistant";
  content: string;
};

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      const assistantMessage: Message = { role: "assistant", content: data.message };
      console.log(assistantMessage);
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] w-full max-w-4xl mx-auto bg-base-200 rounded-xl shadow-xl">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 && (
          <div className="text-center text-base-content/70 mt-10">
            <p className="text-lg">👋 Hi! I&apos;m your AI assistant.</p>
            <p>Ask me anything about the codebase!</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`chat ${msg.role === "user" ? "chat-end" : "chat-start"}`}>
            <div className="chat-header mb-1 text-xs opacity-50">{msg.role === "user" ? "You" : "Assistant"}</div>
            <div
              className={`chat-bubble ${
                msg.role === "assistant" ? "chat-bubble-accent max-w-full bg-base-300" : "chat-bubble-primary"
              }`}
            >
              {msg.role === "assistant" ? (
                <Markdown
                  className="prose prose-invert max-w-none prose-pre:my-0"
                  components={{
                    code: function Code({
                      inline,
                      className,
                      children,
                    }: React.ComponentPropsWithoutRef<"code"> & { inline?: boolean }) {
                      const match = /language-(\w+)/.exec(className || "");
                      const filename = (className || "").split(":")[1];

                      if (!className) {
                        return <code className="bg-base-300 rounded px-1">{children}</code>;
                      }

                      return !inline ? (
                        <div className="max-w-full">
                          {filename && <div className="text-xs mb-1">{filename}</div>}
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match?.[1] || ""}
                            PreTag="div"
                            customStyle={{ maxWidth: "100%" }}
                            wrapLongLines={true}
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        </div>
                      ) : (
                        <code className="bg-base-300 rounded px-1">{children}</code>
                      );
                    },
                  }}
                >
                  {msg.content}
                </Markdown>
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="chat chat-start">
            <div className="chat-header mb-1 text-xs opacity-50">Assistant</div>
            <div className="chat-bubble chat-bubble-accent bg-base-300">
              <span className="loading loading-dots loading-md"></span>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-base-300 bg-base-100 rounded-b-xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask anything about the codebase..."
            className="input input-bordered flex-1"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`btn ${isLoading ? "btn-disabled" : "btn-primary"}`}
            disabled={isLoading || !input.trim()}
          >
            <PaperAirplaneIcon className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
