"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import { Camera, Globe } from "lucide-react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";

interface SocialButtonProps {
  children: ReactNode;
  href: string;
}

const profileImages = [
  "/0x24e765Fcd00106D7175837848ec9073f9fEb9d8e.jpeg",
  "/1.0x24e765Fcd00106D7175837848ec9073f9fEb9d8e.jpg",
];

const stats = [
  {
    number: "+3 years",
    description: "Experience in building user-friendly and functional web applications :)",
  },
  {
    number: "+20",
    description: "Programming Languages & Development Tools",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: (
      <span className="h-4 w-4">
        <FaGithub />
      </span>
    ),
    href: "https://github.com/FrankiePower",
  },
  {
    name: "Gmail",
    icon: (
      <span className="h-4 w-4">
        <BiLogoGmail />
      </span>
    ),
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=&su=&body=&bcc=&cc=&from=",
  },
  {
    name: "Twitter",
    icon: (
      <span className="h-4 w-4">
        <FaXTwitter />
      </span>
    ),
    href: "https://x.com/FrankyEjezie",
  },
  {
    name: "Telegram",
    icon: (
      <span className="h-4 w-4">
        <FaTelegram />
      </span>
    ),
    href: "https://t.me/Frankie170",
  },
  {
    name: "BuildGuidl",
    icon: (
      <span className="h-4 w-4">
        <BuidlGuidlLogo className="h-4 w-4" />
      </span>
    ),
    href: "https://app.buidlguidl.com/builders/0x24e765Fcd00106D7175837848ec9073f9fEb9d8e",
  },
];

const SocialButton = ({ children, href }: SocialButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-black dark:border-base-100 px-6 py-2 hover:bg-base-300 dark:hover:bg-base-100 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 text-base-content dark:text-base-content"
  >
    {children}
  </a>
);

const NigerianFlag = () => (
  <svg className="h-6 w-6" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="10.67" height="24" fill="#008751" />
    <rect x="10.67" y="0" width="10.67" height="24" fill="#FFFFFF" />
    <rect x="21.33" y="0" width="10.67" height="24" fill="#008751" />
  </svg>
);

export default function FrankiePowerPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLocation, setShowLocation] = useState(false);

  const handleNextImage = () => {
    setCurrentImage(prev => (prev + 1) % profileImages.length);
  };

  const toggleLocation = () => {
    setShowLocation(prev => !prev);
  };

  return (
    <main className=" bg-base-200 dark:bg-base-300 min-h-screen ">
      <section className="pt-6 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right Column */}
            <div className="relative lg:order-2">
              <div className="bg-orange-300 dark:bg-secondary/20 rounded-3xl p-8 transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src={profileImages[currentImage]}
                  alt="Profile Picture"
                  width={700}
                  height={750}
                  className="rounded-2xl object-cover"
                  priority // For better loading performance
                />
                <div className="absolute bottom-4 right-4 flex space-x-4">
                  <button
                    onClick={handleNextImage}
                    className="bg-white rounded-full dark:bg-base-300 btn btn-circle"
                    aria-label="Switch profile picture"
                  >
                    <Camera className="h-6 w-6" />
                  </button>
                  <button
                    onClick={toggleLocation}
                    className="bg-white rounded-full dark:bg-base-300 btn btn-circle relative"
                    aria-label={showLocation ? "Show globe" : "Show location"}
                  >
                    <div className="transition-all duration-300 transform group-hover:scale-110">
                      {showLocation ? <NigerianFlag /> : <Globe className="h-6 w-6" />}
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Left Column */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-7xl font-bold tracking-tight leading-none">
                Web3
                <br />
                Developer
              </h1>
              <p className="text-base sm:text-lg text-base-content max-w-md">
                My focus is on creating secure, user-centric platforms that empower users and foster growth in the Web3
                ecosystem. Excited to collaborate with like-minded innovators and contribute to the decentralization of
                the web!
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(link => (
                  <SocialButton key={link.name} href={link.href}>
                    {link.icon}
                  </SocialButton>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-8 pt-8">
                {stats.map(stat => (
                  <div key={stat.number}>
                    <h3 className="text-3xl sm:text-5xl font-bold ">{stat.number}</h3>
                    <p className="text-base-content mt-2">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
