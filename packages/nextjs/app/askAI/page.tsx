import type { NextPage } from "next";
import { AIChat } from "~~/components/ai/AIChat";

const AskAIPage: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-4">
        <h1 className="text-4xl font-bold my-4">Builders Chat Assistant</h1>
        <AIChat />
      </div>
    </>
  );
};

export default AskAIPage;
