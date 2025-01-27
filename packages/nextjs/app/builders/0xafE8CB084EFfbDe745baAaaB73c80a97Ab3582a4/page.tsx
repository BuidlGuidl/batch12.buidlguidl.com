import Image from "next/image";
import type { NextPage } from "next";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Address } from "~~/components/scaffold-eth";

const address = "0xafE8CB084EFfbDe745baAaaB73c80a97Ab3582a4";

const socialLinks = [
  {
    name: "github",
    link: "https://github.com/LandoC4lrissian",
    icon: <FaGithub />,
  },
  {
    name: "x",
    link: "https://x.com/LandoC4lrissian",
    icon: <FaXTwitter />,
  },
] as const;

const LandoProfilePage: NextPage = () => {
  return (
    <div className="bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 h-32"></div>
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <Image
                  className="mx-auto h-20 w-20 rounded-full border-4 border-white -mt-16"
                  src="https://pbs.twimg.com/profile_images/1721586474858983424/N50Rpjfv_400x400.jpg"
                  alt="Profile picture"
                  width={80}
                  height={80}
                />
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <span className="flex flex-row space-x-4 justify-center items-center text-center">
                  <p className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">Ahmet Tahir Yıldız</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    <Address address={address} />
                  </span>
                </span>

                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Web3 Developer | Front End Developer
                </p>
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.link}
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 mx-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-5 text-base text-gray-700 dark:text-gray-300">
            <p>
              I am a <span className="font-semibold">front end developer</span> specializing in creating intuitive and
              visually appealing user interfaces using technologies like{" "}
              <span className="font-semibold">React, Next.js, and TypeScript</span>. With a focus on delivering
              responsive and high-performance applications, I am passionate about crafting seamless digital experiences.
              While my expertise lies in front-end development, I also explore blockchain technologies like{" "}
              <span className="font-semibold">Ethereum and Solidity</span>
              to bridge the gap between decentralized systems and user-friendly design. My goal is to innovate and
              contribute to projects that shape the future of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandoProfilePage;
