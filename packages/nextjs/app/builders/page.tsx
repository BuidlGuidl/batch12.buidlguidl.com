"use client";

import { useEffect, useMemo, useState } from "react";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const BuildersPage = () => {
  const [validProfiles, setValidProfiles] = useState<string[]>([]);
  const { data: events, isLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 130068488n,
    watch: true,
  });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("/buildersWithProfiles.json");
        const data = await response.json();
        setValidProfiles(data.profiles);
      } catch (error) {
        console.error("Error fetching builders with profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  // Check if a page exists for each builder, using a HEAD request. It works, but I think it's a questionable solution.
  /* useEffect(() => {
    if (uniqueBuilders.length === 0) return;

    const checkProfiles = async () => {
      const checks = await Promise.all(
        uniqueBuilders.map(async (builder) => {
          try {
            // Fetch the HEAD request to check if the page exists
            const response = await fetch(`/builders/${builder}`, { method: "HEAD" });
            return { builder, exists: response.ok };
          } catch {
            return { builder, exists: false };
          }
        })
      );

      // Create a record of builders and their profile existence
      const profileMap = checks.reduce((acc, { builder, exists }) => {
        acc[builder] = exists;
        return acc;
      }, {} as Record<string, boolean>);

      setValidProfiles(profileMap);
    };

    checkProfiles();
  }, [uniqueBuilders]);
  */

  const uniqueBuilders = useMemo(() => {
    return Array.from(new Set(events?.map(event => event.args.builder) || []));
  }, [events]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-lg font-medium">Loading builders...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-base-100 shadow-lg rounded-lg p-6 mt-10">
        <h1 className="text-3xl font-bold mb-4">Builders in Batch 12</h1>
        <p className="mb-6">
          Welcome to the list of builders who have successfully checked in for Batch 12. Below, you will find a list of
          all builders and their Ethereum addresses. If a builder has a profile page, you&#39;ll see a{" "}
          <span className="text-blue-600 dark:text-blue-400">Profile</span> link next to their address.
        </p>
        <p className="mb-6">
          If you&#39;re one of the builders and don&#39;t see a{" "}
          <span className="text-blue-600 dark:text-blue-400">Profile</span> link for your address, make sure to add your
          Ethereum address to the{" "}
          <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">buildersWithProfiles.json</code> file to activate
          your page link.
        </p>
        <div className="gap-2 grid grid-cols-2 md:grid-cols-3">
          {uniqueBuilders.map(builder => (
            <div key={builder} className="">
              <div className="h-10">
                <Address address={builder} />
              </div>
              {builder && validProfiles.includes(builder) && (
                <a href={`/builders/${builder}`} className="block text-blue-600 dark:text-blue-400 hover:underline">
                  Profile
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildersPage;
