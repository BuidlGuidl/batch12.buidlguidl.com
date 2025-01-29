import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next/types";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Address } from "~~/components/scaffold-eth";

const ADDRESS = "0x2aA2f7090f0ADD72B2d50386CdDE97CE27898287";
const LINKS_DATA = [
  {
    href: "https://github.com/wilfred007",
    label: "GitHub",
    icon: <FaGithub className="mt-1 mx-2" />,
  },
  {
    href: "https://twitter.com/drips_young",
    label: "Twitter",
    icon: <FaXTwitter className="mt-1 mx-2" />,
  },
  {
    href: "https://www.linkedin.com/in/wilfred-adzer-89261923a/",
    label: "LinkedIn",
    icon: <FaLinkedin className="mt-1 mx-2" />,
  },
];

const WilfredProfile: NextPage = () => {
  const LinkButton = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 hover:bg-blue-600 text-white flex font-bold py-2 px-4 rounded"
    >
      {icon}
      {label}
    </Link>
  );

  return (
    <>
      <div className="flex flex-col items-center gap-8 py-12 px-4 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-32 h-32">
            <Image
              src="/0x2aA2f7090f0ADD72B2d50386CdDE97CE27898287.jpg"
              alt="0x2aA2f7090f0ADD72B2d50386CdDE97CE27898287"
              fill={true}
              className="rounded-full ring-4 ring-blue-500"
            />
          </div>
          <h1 className="text-4xl font-bold">Wilfred Adzer</h1>
          <Address address={ADDRESS} />
        </div>

        <div className="text-center">
          <p className="text-xl mb-4">Blockchain Developer</p>
          <div className="flex gap-4 justify-center">
            {LINKS_DATA.map((link, index) => (
              <LinkButton key={index} href={link.href} label={link.label} icon={link.icon} />
            ))}
          </div>
        </div>

        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="font-bold text-2xl mb-2 dark:text-black">About Me</h2>
            <p className="text-gray-600 mb-4 font-bold">Blockchain Developer</p>
            <div className="space-y-4 text-gray-700 mb-4">
              <p>
                I am a blockchain developer who specializes in developing decentralized applications (dApps) and
                blockchain solutions. My journey in tech started with traditional web development, but I quickly became
                fascinated by the potential of blockchain technology to reshape our digital landscape.
              </p>
              <p>
                Currently, I&apos;m working on projects that combines NFTs markets and upcoming artist, allowing users
                to create and trade unique, music art on the blockchain. This project exemplifies my passion for merging
                cutting-edge technologies to create novel user experiences.
              </p>
              <p>
                My tech stack includes Solidity for smart contract development, React and Next.js for frontend. I&apos;m
                also experienced with tools like Hardhat, Ethers.js, and OpenZeppelin for robust and secure smart
                contract development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WilfredProfile;
