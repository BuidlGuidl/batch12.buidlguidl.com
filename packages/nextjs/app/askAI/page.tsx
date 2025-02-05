"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { AIChat } from "~~/components/ai/AIChat";

const AskAIPage: NextPage = () => {
  const { address } = useAccount();
  const [builders, setBuilders] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBuilders = async () => {
      try {
        const response = await fetch("/api/builders");
        const data = await response.json();
        setBuilders(data.map((addr: string) => addr.toLowerCase()));
      } catch (error) {
        console.error("Failed to fetch builders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBuilders();
  }, []);

  const isBuilder = address && builders.includes(address.toLowerCase());

  return (
    <div className="flex items-center flex-col pt-4">
      <h1 className="text-4xl font-bold my-4 mx-2 text-center">Builders Chat Assistant</h1>

      {isLoading ? (
        <div className="loading loading-spinner loading-lg"></div>
      ) : isBuilder ? (
        <AIChat />
      ) : (
        <div className="w-full max-w-2xl px-4">
          <div className="alert alert-warning shadow-lg p-4 flex gap-2 sm:gap-4">
            <div className="flex-shrink-0">
              <InformationCircleIcon className="h-6 w-6 stroke-current" />
            </div>
            <div className="flex flex-col flex-grow text-center">
              <h3 className="font-bold text-lg">Access Restricted</h3>
              <div className="text-sm">
                This AI assistant is exclusively available to verified builders.
                {!address ? (
                  <span> Please connect your wallet first.</span>
                ) : (
                  <span> Your current address is not on the builders list.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AskAIPage;
