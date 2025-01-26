import React from "react";
import Image from "next/image";
import hashnodeIcon from "../../../public/hashnode-Icon.png";
import type { NextPage } from "next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const address = "0xB450c1139958772EE65F54F4907e6aCDc7466a4D";

const bio =
  "I am a Web3/frontend developer and product designer, building blockchain solutions and questing to improve web3 UX challenges. Nice to meet you!!!";

const profileImgUrl =
  "https://avatars.githubusercontent.com/u/15064313?s=400&u=94ee737cf97deb7ac721429f05ce5aeeba13fbee&v=4";

const socials = [
  { name: "Twitter", url: "https://twitter.com/jeremiahdsamuel", icon: <FaTwitter className="text-blue-500" /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/jeremiahsamuel", icon: <FaLinkedin className="text-blue-700" /> },
  { name: "GitHub", url: "https://github.com/livinalt", icon: <FaGithub className="text-gray-500" /> },
  {
    name: "Hashnode",
    url: "https://hashnode.com/@jeremiahsamuel",
    icon: <Image src={hashnodeIcon} alt="Hashnode Icon" width={24} height={24} className="w-6 h-6" />,
  },
];

const JerlyPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-t from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-700">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gradient-to-tr from-blue-500 to-purple-500 shadow-md">
            <Image src={profileImgUrl} alt="profileAvatar" width={480} height={480} className="object-cover" />
          </div>

          <h1 className="text-2xl font-bold mt-4">Jeremiah Samuel</h1>
          <p className="text-gray-700 dark:text-gray-300 text-center mt-2 px-4">{bio}</p>

          <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            <span className="font-semibold">Address: </span>
            <Address address={address} />
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Connect</h2>
          <div className="flex flex-col items-center gap-4">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform transform hover:scale-105"
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="text-lg font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JerlyPage;
