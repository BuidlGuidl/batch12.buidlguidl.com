import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import { FaTelegram } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Address } from "~~/components/scaffold-eth";

const address = "0xD692E6FCCC221a28cD6D57436Ec9F7cEf8c6D490";

const socialLinks = [
  {
    name: "github",
    link: "https://github.com/NVN404",
    icon: <FaGithub className="h-6 w-6" />,
  },
  {
    name: "twitter",
    link: "https://x.com/yun0hu",
    icon: <FaTwitter className="h-6 w-6" />,
  },
  {
    name: "telegram",
    link: "https://t.me/YUN0HU",
    icon: <FaTelegram className="h-6 w-6" />,
  },
  {
    name: "buidlguidl",
    link: "http://app.buidlguidl.com/builders/0xD692E6FCCC221a28cD6D57436Ec9F7cEf8c6D490",
    icon: <BuidlGuidlLogo className="h-6 w-6" />,
  },
] as const;

interface TerminalEntry {
  command: string;
  output: React.ReactNode;
}

const TerminalText = ({ entries }: { entries: TerminalEntry[] }) => {
  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono overflow-auto">
      {entries.map((entry, index) => (
        <div key={index}>
          <p>
            {`> ${entry.command} _`}
            <br />
            {entry.output}
            <br />
          </p>
        </div>
      ))}
    </div>
  );
};

const terminalEntries: TerminalEntry[] = [
  {
    command: "cd ~/data/yunohu",
    output: "",
  },
  {
    command: "less ~/.config/whoami.txt",
    output: "Hello! I am Yunohu 👋",
  },
  {
    command: "head -n 1 ~/about_me.txt",
    output: "I love building and breaking things 🏗️+🔨=☯️",
  },
  {
    command: "cat ~/share/background.txt",
    output: "CS undergrad learning about blockchain, smart contracts, and security⛓️🔐.",
  },
  {
    command: "ls ~/profile/skills",
    output: (
      <p>
        JavaScript/
        <br />
        Solidity/ <br />
        React/
        <br />
        Node.js/
        <br />
        Express/
        <br />
        Python/
        <br />
        C++/
        <br />
        self confidence
        <br />
        Fluent in GIFs and stickers
        <br />
        Proficient in ChatGippity Driven Development
        <br />
        Level 7 procrastination master (but always delivers on time)
        <br />
        Can summarize 300-page textbook in 3 bullet points - in exams
        <br />
        Fluent in six languages, including Gen Z slang - no cap
        <br />
        Peace out ✌️
      </p>
    ),
  },
  {
    command: "",
    output: "",
  },
];

const yunohuProfile: NextPage = () => {
  return (
    <div className={`flex flex-col items-center gap-4 py-12 px-2 md:px-4 lg:px-8`}>
      <div className="flex flex-col items-center gap-4">
        <div className="avatar">
          <Image
            src="https://avatars.githubusercontent.com/u/119102587?s=400&u=bcdb37dadc01680c3ad4991fe638274df332cd2d&v=4"
            alt="its me yunohu"
            width={100}
            height={100}
            className="rounded-full ring ring-primary"
          />
        </div>
        <h1 className="text-4xl font-bold">yunohu</h1>
        <Address address={address} />
      </div>
      <div className="flex gap-4 items-center">
        {socialLinks.map(item => (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" key={item.link}>
            {item.icon}
          </a>
        ))}
      </div>
      <div className="card w-full max-w-2xl mt-8 bg-gray-900 text-green-400">
        <div className="card-body">
          <TerminalText entries={terminalEntries} />
        </div>
      </div>
    </div>
  );
};

export default yunohuProfile;
