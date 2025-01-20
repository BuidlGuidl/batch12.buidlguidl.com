"use client";

import { useEffect, useMemo, useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
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

  const uniqueBuilders = useMemo(() => {
    return Array.from(new Set(events?.map(event => event.args.builder).filter(Boolean) || [])) as string[];
  }, [events]);

  const sortedBuilders = useMemo(() => {
    return [...uniqueBuilders].sort((a, b) => {
      const aHasProfile = validProfiles.includes(a) ? 1 : 0;
      const bHasProfile = validProfiles.includes(b) ? 1 : 0;
      return bHasProfile - aHasProfile;
    });
  }, [uniqueBuilders, validProfiles]);

  useEffect(() => {
    const checkProfiles = async () => {
      try {
        const response = await fetch("/api/builders");
        if (!response.ok) {
          throw new Error("Failed to fetch builder profiles");
        }
        const profiles = await response.json();
        setValidProfiles(profiles);
      } catch (error) {
        console.error("Error checking builder profiles:", error);
        setValidProfiles([]);
      }
    };

    if (uniqueBuilders.length > 0) {
      checkProfiles();
    }
  }, [uniqueBuilders]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-lg font-medium">Loading builders...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-base-100 shadow-lg rounded-[22px] p-6 mt-10">
        <h1 className="text-3xl font-bold mb-4">Builders in Batch 12</h1>
        <p className="mb-6">
          Welcome to the list of builders who have successfully checked in for Batch 12. Below, you will find a list of
          all builders and their Ethereum addresses. If a builder has a profile page, you&#39;ll see a{" "}
          <HiOutlineUserCircle className="text-blue-600 dark:text-blue-400 inline w-6 h-6" /> icon next to their
          address.
        </p>
        <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {sortedBuilders.map(builder => (
            <div key={builder} className="bg-base-200 rounded-[22px] py-2 px-2 hover:bg-base-300 transition-all h-full">
              <div className="flex justify-between items-center h-full">
                <div>
                  <Address address={builder} />
                </div>
                {builder && validProfiles.includes(builder) && (
                  <a
                    href={`/builders/${builder}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    title={`View ${builder} Profile`}
                  >
                    <HiOutlineUserCircle className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildersPage;
