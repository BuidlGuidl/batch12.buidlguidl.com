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
            width={160}
            height={160}
            className="rounded-full ring ring-primary"
          />
        </div>
        <h1 className="text-4xl font-bold">@nikolaiii</h1>
        <Address address={address} />
      </div>

      <div className="max-w-2xl text-center">
        <p className="text-lg mb-4">I cook frames on Warpcast</p>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/NikolaiL" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            GitHub
          </a>
          <a
            href="https://warpcast.com/nikolaiii"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Warpcast
          </a>
        </div>
      </div>

      <div className="card w-full max-w-2xl bg-base-100 shadow-xl mt-8">
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p>
            👋 Hello! I am Nikolai <br />
            🧑‍🍳 I cook frames on Warpcast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default nikolaiiiProfile;
