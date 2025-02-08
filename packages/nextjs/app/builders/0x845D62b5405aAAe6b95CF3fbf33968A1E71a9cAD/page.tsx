import Image from "next/image";
import { type NextPage } from "next";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { GithubIcon } from "~~/components/assets/GithubIcon";
import { TelegramIcon } from "~~/components/assets/TelegramIcon";
import { TwitterIcon } from "~~/components/assets/TwitterIcon";
import { Address } from "~~/components/scaffold-eth";

const INFO = {
  name: "DimaKush",
  role: "Full Stack Developer",
  address: "0x845D62b5405aAAe6b95CF3fbf33968A1E71a9cAD",
  avatar: "https://avatars.githubusercontent.com/u/81520363",
  links: {
    bg: "https://app.buidlguidl.com/builders/0x845D62b5405aAAe6b95CF3fbf33968A1E71a9cAD",
    github: "https://github.com/DimaKush",
    twitter: "https://twitter.com/_Dima_Kush_",
    telegram: "https://t.me/kushnarevdn",
  },
  skills: ["Next.js", "React", "TypeScript", "Solidity", "Foundry", "Hardhat", "Ethers", "IPFS", "Aiogram"],
  currentWork: "Building weird stuff and exploring Web3 possibilities",
  vision: "Contributing to the better future through decentralized technologies and simple solutions",
} as const;

const SOCIAL_LINKS = [
  { href: INFO.links.github, Icon: GithubIcon },
  { href: INFO.links.twitter, Icon: TwitterIcon },
  { href: INFO.links.telegram, Icon: TelegramIcon },
  { href: INFO.links.bg, Icon: BuidlGuidlLogo },
] as const;

const DimaKushProfile: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-300 to-base-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-base-200 rounded-xl p-8 mb-8 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#333_25%,transparent_25%),linear-gradient(-45deg,#333_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#333_75%),linear-gradient(-45deg,transparent_75%,#333_75%)] bg-[length:20px_20px]" />

          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <Image
              src={INFO.avatar}
              alt="Profile"
              width={200}
              height={200}
              className="rounded-2xl shadow-xl"
              priority
            />

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">{INFO.name}</h1>
              <p className="text-xl opacity-80 mb-4">{INFO.role}</p>
              <Address address={INFO.address} />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-base-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Vision</h2>
              <p className="opacity-80">{INFO.vision}</p>
            </div>

            <div className="bg-base-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Current Work</h2>
              <p className="opacity-80">{INFO.currentWork}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-base-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {INFO.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-base-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-base-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Connect</h2>
                <div className="flex items-center gap-8">
                  {SOCIAL_LINKS.map(({ href, Icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Icon className="h-10 w-10" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimaKushProfile;
