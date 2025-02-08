"use client";

import Image from "next/image";
import { TrackingEye } from "./TrackingEye";
import clsx from "clsx";
import type { NextPage } from "next";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { GithubIcon } from "~~/components/assets/GithubIcon";
import { TwitterIcon } from "~~/components/assets/TwitterIcon";
import { Address } from "~~/components/scaffold-eth";

const textColorStyles = "dark:text-white text-gray-800";
const bodyTextStyles = clsx(textColorStyles, "text-base w-3/4 text-center text-balance m-0");

const SOCIALS = [
  { href: "https://github.com/zelkibuilds", Icon: GithubIcon, title: "GitHub" },
  { href: "https://x.com/_zelki", Icon: TwitterIcon, title: "X Profile" },
  {
    href: "https://app.buidlguidl.com/builders/0x31973c1799C889A03f9ce9EA468c3ceF26F01169",
    Icon: BuidlGuidlLogo,
    title: "BuidlGuidl Profile",
  },
] as const;

const ZelkiBuilderProfile: NextPage = () => {
  return (
    <article className={clsx("flex flex-col gap-y-2 justify-center items-center pt-5", textColorStyles)}>
      <h1 className="font-bold text-[3rem]">zelki</h1>
      <Image src="/zelki.gif" alt="zelki's avatar" width={100} height={100} className="rounded-full" />
      <Address address="0x31973c1799C889A03f9ce9EA468c3ceF26F01169" />

      <SectionTitle title="Socials" />
      <div className="flex gap-x-4">
        {SOCIALS.map(({ href, Icon, title }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer" title={title}>
            <Icon className="size-6 dark:hover:text-gray-400 hover:text-primary" />
          </a>
        ))}
      </div>

      <SectionTitle title="About me" />
      <p className={bodyTextStyles}>
        <span>I&apos;m a fullstack developer with a focus on front-end. Currently employed at </span>
        <a
          className="font-bold underline bg-gradient-to-r from-[#6600AC] to-[#FF6F5B] text-transparent bg-clip-text"
          href="https://zharta.io"
          target="_blank"
          rel="noreferrer"
          title="Zharta"
        >
          Zharta
        </a>
        .
      </p>
      <p className={bodyTextStyles}>
        I&apos;m going through BuidlGuild since it looked like a lot of fun and I&apos;d like to dive deeper into smart
        contract engineering.
      </p>

      <SectionTitle title="Thanks for having a look" />
      <TrackingEye />
    </article>
  );
};

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className={clsx(textColorStyles, "font-semibold text-center pt-6 text-xl")}>{title}</h2>
);

export default ZelkiBuilderProfile;
