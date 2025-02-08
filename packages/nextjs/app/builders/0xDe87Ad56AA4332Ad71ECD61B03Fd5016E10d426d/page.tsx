import Image from "next/image";
import { type NextPage } from "next";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { GithubIcon } from "~~/components/assets/GithubIcon";
import { LinkedinIcon } from "~~/components/assets/LinkedinIcon";
import { TelegramIcon } from "~~/components/assets/TelegramIcon";

// Add this if you have a LinkedIn icon

const ShahlaNikbakht_ProfilePage: NextPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
        {/* Profile Picture */}
        <div className="w-40 h-40 mx-auto lg:mx-0 rounded-full shadow-2xl overflow-hidden">
          <Image
            src="/profile-picture-0xDe87Ad56AA4332Ad71ECD61B03Fd5016E10d426d.jpg" // Ensure this file is in the public directory
            alt="Shahla Nikbakht"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="text-center lg:text-left">
          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-bold">Shahla Nikbakht</h1>
          <p className="py-4 text-lg">
            Blockchain & Backend Developer passionate about decentralized applications (DApps) and leveraging blockchain
            for innovative solutions.
          </p>

          {/* Expertise */}
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Expertise</h2>
            <ul className="list-disc list-inside mt-2 text-lg text-left">
              <li>Decentralized Applications (DApps) on Ethereum</li>
              <li>Smart Contracts with Solidity</li>
              <li>Blockchain Ecosystems: Hyperledger Fabric, Besu</li>
              <li>Frontend & Backend Integration</li>
              <li>Cloud Deployment: AWS & GCP</li>
              <li>Quantum Computation and Quantum Information</li>
            </ul>
          </div>

          {/* Contact and Social Links */}
          <div className="flex flex-row items-center justify-center gap-4 py-6">
            {/* GitHub */}
            <a href="https://github.com/shnikbakht" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon className="w-8 h-8 hover:text-blue-500" />
            </a>

            {/* Telegram */}
            <a href="https://t.me/ShahlaNikbakht" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <TelegramIcon className="w-8 h-8 hover:text-blue-500" />
            </a>

            {/* BuidlGuidl */}
            <a
              href="https://app.buidlguidl.com/builders/0xDe87Ad56AA4332Ad71ECD61B03Fd5016E10d426d"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BuidlGuidl"
            >
              <BuidlGuidlLogo className="w-8 h-8 hover:text-blue-500" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shahlanikbakht/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-8 h-8 hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShahlaNikbakht_ProfilePage;
