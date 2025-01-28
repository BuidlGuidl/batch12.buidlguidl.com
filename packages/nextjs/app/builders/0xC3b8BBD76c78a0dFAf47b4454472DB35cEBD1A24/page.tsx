"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiFarcaster } from "react-icons/si";
import { TbPlant2 } from "react-icons/tb";
import { Address } from "~~/components/scaffold-eth";

interface SocialMediaIconProps {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
  hoverColor: string;
}

function SocialMediaIcon({ href, ariaLabel, icon, hoverColor }: SocialMediaIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`text-gray-800 dark:text-white transition ${hoverColor}`}
    >
      {icon}
    </a>
  );
}

const socialMediaLinks = [
  {
    href: "https://github.com/ludmila-omlopes",
    ariaLabel: "GitHub",
    icon: <FaGithub size={24} />,
    hoverColor: "hover:text-blue-500 dark:hover:text-blue-300",
  },
  {
    href: "https://hey.xyz/u/definn",
    ariaLabel: "Lens",
    icon: <TbPlant2 size={24} />,
    hoverColor: "hover:text-green-500 dark:hover:text-green-300",
  },
  {
    href: "https://twitter.com/DeFinnTheFarmer",
    ariaLabel: "Twitter",
    icon: <FaTwitter size={24} />,
    hoverColor: "hover:text-blue-400 dark:hover:text-blue-300",
  },
  {
    href: "https://warpcast.com/definn.eth",
    ariaLabel: "Farcaster",
    icon: <SiFarcaster size={24} />,
    hoverColor: "hover:text-purple-500 dark:hover:text-purple-300",
  },
];

const LudmilaProfile: NextPage = () => {
  const address = "0xC3b8BBD76c78a0dFAf47b4454472DB35cEBD1A24";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-purple-900 dark:to-blue-900 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-10 relative">
        <div className="flex items-start">
          <div className="flex-1 flex items-center space-x-6">
            <div className="avatar">
              <Image
                src="https://avatars.githubusercontent.com/u/16783967"
                alt="@ludmila-omlopes"
                width={100}
                height={100}
                className="rounded-full ring ring-primary"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Ludmila Lopes (DeFinn)</h1>
              <Address address={address} />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">🌟 Professional Generalist</p>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="top-0 right-0 flex flex-col items-center gap-2">
            {socialMediaLinks.map((link, index) => (
              <SocialMediaIcon
                key={index}
                href={link.href}
                ariaLabel={link.ariaLabel}
                icon={link.icon}
                hoverColor={link.hoverColor}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-6 text-left">
        <h2 className="text-lg font-semibold mb-2">About Me</h2>
        <p>
          I&apos;m Ludmila, a Brazilian woman and primarily a <strong>developer</strong> but also with experience in
          <strong> SEO, marketing, and growth</strong>. Currently passionate about solving problems in the{" "}
          <a
            href="https://lens.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Lens Protocol
          </a>{" "}
          ecosystem, I&apos;ve been building in the crypto space since 2017.
        </p>
        <p>
          I&apos;m building{" "}
          <a href="https://lens.xyz" className="text-blue-500 hover:underline">
            Mystic Garden
          </a>
          ,{" "}
          <a href="https://oriona.xyz/" className="text-blue-500 hover:underline">
            Oriona
          </a>
          , and{" "}
          <a href="https://lens-agora.vercel.app/" className="text-blue-500 hover:underline">
            Lens Agora
          </a>
          . These projects aim to empower communities and creators in the web3 space.
        </p>
        <p>
          In my free time, I enjoy gaming and spending time with my three cats 😺😺😺. Feel free to connect if
          you&apos;d like to learn more about my projects!
        </p>
      </div>
    </div>
  );
};

export default LudmilaProfile;
