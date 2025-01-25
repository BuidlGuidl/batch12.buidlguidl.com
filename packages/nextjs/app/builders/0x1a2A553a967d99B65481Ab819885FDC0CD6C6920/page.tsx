"use client";

import Image from "next/image";
import { FaMediumM } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Address } from "~~/components/scaffold-eth";

const emirhancavusogluProfile = () => {
  const address = "0x1a2A553a967d99B65481Ab819885FDC0CD6C6920";

  const socialLinks = [
    {
      name: "github",
      link: "https://github.com/Emirhan-Cavusoglu-sftw",
      icon: <FaGithub />,
    },
    {
      name: "x",
      link: "https://x.com/Emirhan_cvsgl",
      icon: <FaXTwitter />,
    },
    {
      name: "medium",
      link: "https://medium.com/@emirhancavusoglu",
      icon: <FaMediumM />,
    },
  ] as const;

  return (
    <div className="flex flex-col items-center gap-4 py-12 px-2  md:px-4 lg:px-8">
      <div className="flex flex-col items-center gap-4">
        <div className="avatar shadow-[0_0_50px_-1px] hover:shadow-[0_0_200px_0px] shadow-green-500 rounded-full">
          <Image
            src="https://pbs.twimg.com/profile_images/1600117861233606658/g4myvUJY_400x400.jpg"
            alt="@Emirhan_cvsgl"
            width={120}
            height={120}
            className="rounded-full ring ring-primary"
          />
        </div>
        <Address address={address} />
      </div>
      <div className="flex gap-4 items-center">
        {socialLinks.map(item => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hover:border-green-50 hover:border"
            key={item.link}
          >
            {item.icon}
          </a>
        ))}
      </div>

      <div className="card w-full max-w-3xl bg-base-100 flex flex-col items-center shadow-xl mt-8">
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-2">Hi, I am Emirhan</p>
          <p>
            I am a full-stack web3 developer building dapps and attending hackathons. I am currently exploring account
            abstraction and Solidity security. I wrote a beginner-friendly article on how to build a dapp with account
            abstraction and won a prize from the Scroll article contest. You can check it out on Medium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default emirhancavusogluProfile;
