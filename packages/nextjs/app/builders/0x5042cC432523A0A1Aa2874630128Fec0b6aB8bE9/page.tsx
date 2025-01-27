import Image from "next/image";
import { type NextPage } from "next";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { GithubIcon } from "~~/components/assets/GithubIcon";
import { TelegramIcon } from "~~/components/assets/TelegramIcon";
import { TwitterIcon } from "~~/components/assets/TwitterIcon";
import { Address } from "~~/components/scaffold-eth";

const SOCIALS = [
  { href: "https://github.com/mahantybiplab", Icon: GithubIcon, title: "GitHub" },
  { href: "https://x.com/MahantyBiplab3", Icon: TwitterIcon, title: "X Profile" },
  {
    href: "https://t.me/mahanty501",
    Icon: TelegramIcon,
    title: "telegram profile",
  },
  {
    href: "https://app.buidlguidl.com/builders/0x5042cC432523A0A1Aa2874630128Fec0b6aB8bE9",
    Icon: BuidlGuidlLogo,
    title: "BuidlGuidl Profile",
  },
] as const;

const BiplabBuilderProfile: NextPage = () => {
  return (
    <article className="max-w-2xl mx-auto p-4 space-y-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <Image src="/Biplab.jpg" alt="Biplab's avatar" width={100} height={100} className="rounded-full shrink-0" />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold">Biplab</h1>
          <h3 className="text-lg text-gray-600 dark:text-gray-400">Web3 enthusiast</h3>
          <Address address="0x5042cC432523A0A1Aa2874630128Fec0b6aB8bE9" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-center sm:justify-start space-x-4">
          <SectionTitle title="Connect with me" />
          {SOCIALS.map(({ href, Icon, title }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={title}
              className="hover:text-primary dark:hover:text-gray-400 transition-colors"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <SectionTitle title="My one personality : " />
        <p className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg">
          I&apos;m curious how the world economy actually works and where blockchain fits into it.
        </p>
      </div>

      <div className="space-y-2">
        <p>
          If you are not curious about <span className=" text-[30px] font-bold">∞</span> then I have one simple equation
          for you :
        </p>
        <p className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg">
          1 + 2 + 3 + 4 + · · · + ∞ = -1/12
        </p>
        <p>
          Btw, it&apos;s not simple 😁 but if you are really curious I am more than sure that you will fall in love with
          <span className="text-xl font-bold"> Mathematics !</span>
        </p>
        <p>
          And plz take some time to find out how <span className=" text-[30px] font-bold">∞</span> is tightly linked
          with
          <span className="text-xl font-bold"> Philosophy</span>. If you don&apos;t care then it&apos;s upto you but all
          I can say is that you are missing something that you shouldn&apos;t miss 🥲!
        </p>
      </div>
    </article>
  );
};

const SectionTitle = ({ title }: { title: string }) => <span className="text-xl font-bold">{title}</span>;

export default BiplabBuilderProfile;
