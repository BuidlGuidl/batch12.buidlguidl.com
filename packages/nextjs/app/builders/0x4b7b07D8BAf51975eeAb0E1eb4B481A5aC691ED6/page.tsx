"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const nikolaiiiProfile: NextPage = () => {
  const address = "0x4b7b07D8BAf51975eeAb0E1eb4B481A5aC691ED6";

  return (
    <div className="flex flex-col items-center gap-4 py-12 px-2 md:px-4 lg:px-8">
      <div className="flex flex-col items-center gap-4">
        <div className="avatar">
          <Image
            src="https://avatars.githubusercontent.com/u/7041720"
            alt="@nikolaii"
            width={120}
            height={120}
            className="rounded-full ring ring-primary"
          />
        </div>
        <h1 className="text-4xl font-bold">@nikolaiii</h1>
        <Address address={address} />
      </div>

      <div className="max-w-2xl text-center">
        <p className="text-lg mb-4">I cook frames on Warpcast</p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/NikolaiL"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm font-normal gap-1"
          >
            GitHub
          </a>
          <a
            href="https://warpcast.com/nikolaiii"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm font-normal gap-1"
          >
            Warpcast
          </a>
        </div>
      </div>

      <div className="card w-full max-w-2xl bg-base-100 shadow-xl mt-8">
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p>👋 Hello! I am Nikolai</p>
          <p>
            I am passionate about analytics and web3. Started working on Bitclout (now Deso) analytics in 2021 and built{" "}
            <a className="link" href="https://altumbase.com" target="_blank" rel="noopener noreferrer">
              AltumBase
            </a>
            . Until today most of the Deso nodes use it as a source for user analytics.
          </p>
          <p>
            In March 2024 started making frames (mini-apps) on Warpcast. You can check out my profile at{" "}
            <a className="link" href="https://warpcast.com/nikolaiii" target="_blank" rel="noopener noreferrer">
              warpcast.com/nikolaiii
            </a>
            .
          </p>
          <p>In order to elevate my frames I started learning smart contracts and this is how I got here.</p>
          <p>
            If you are not yet on Warpcast, I really think you should join. It is a great place to build. Please let me
            know if you need an free invite.
          </p>
          <p>Wishing you all a Happy Based Building New Year!</p>
        </div>
      </div>
    </div>
  );
};

export default nikolaiiiProfile;
