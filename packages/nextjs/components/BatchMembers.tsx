"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

export const BatchMembers = () => {
  const [members, setMembers] = useState<string[]>([]);

  const { data: checkInEvents } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 130068488n,
    watch: true,
  });

  useEffect(() => {
    if (checkInEvents) {
      const uniqueMembers = [
        ...new Set(checkInEvents.map(event => event.args.builder).filter((address): address is string => !!address)),
      ];
      setMembers(uniqueMembers);
    }
  }, [checkInEvents]);

  return (
    <div className="flex flex-col gap-2">
      {members.map((address, i) => (
        <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-base-200 transition-colors">
          <span className="text-lg font-bold">{i + 1}.</span>
          <Address address={address} />
          <Link href={`/builders/${address}`} className="ml-2 hover:text-primary transition-colors">
            <UserCircleIcon className="h-6 w-6" />
          </Link>
        </div>
      ))}
    </div>
  );
};
