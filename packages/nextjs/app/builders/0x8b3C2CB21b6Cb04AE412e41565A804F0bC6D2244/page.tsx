/* eslint-disable prettier/prettier */
"use client";

import { useState } from "react";
import { Aldrich } from "next/font/google";
import Image from "next/image";
import MiniGame from "./MiniGame";
import bgPattern from "./background.svg";
import { achievements, inventory, quests } from "./resources";
import { NextPage } from "next";
import { FaDiscord, FaGithub, FaTelegram, FaXTwitter } from "react-icons/fa6";

const aldrich = Aldrich({
  weight: "400",
  subsets: ["latin"],
});

const socialLinks = [
  {
    name: "discord",
    link: "https://discord.com/users/715113364245839872",
    icon: <FaDiscord />,
  },
  {
    name: "github",
    link: "https://github.com/psychemist",
    icon: <FaGithub />,
  },
  {
    name: "telegram",
    link: "https://telegram.me/teleborg",
    icon: <FaTelegram />,
  },
  {
    name: "twitter",
    link: "https://x.com/internetingbot",
    icon: <FaXTwitter />,
  },
];

const PsychemistBuilderPage: NextPage = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [showQuests, setShowQuests] = useState(false);
  const [showMiniGame, setShowMiniGame] = useState(false);

  return (
    <div
      className={`flex min-h-screen p-6 relative z-0 justify-center items-center ${aldrich.className} bg-[#201f1f] bg-cover bg-center bg-blend-lighten`}
      style={{
        backgroundImage: `url(${bgPattern.src})`,
      }}
    >
      {/* <div className="relative z-0 bg-[#201f1f] rounded-2xl max-w-2xl mx-auto p-6"> */}
      <div className="relative z-0 max-w-2xl mx-auto bg-[#474783] rounded-2xl border-3 p-6 shadow-lg">
        <div className="md:hidden flex justify-end gap-2 mb-4">
          <button
            onClick={() => setShowInventory(!showInventory)}
            className="bg-transparent border-2 border-[#00ff9d] text-[#00ff9d] p-2 hover:bg-[#00ff9d] hover:text-[#0a0a0f] transition-colors rounded"
          >
            🎒
          </button>
          <button
            onClick={() => setShowAchievements(!showAchievements)}
            className="bg-transparent border-2 border-[#00ff9d] text-[#00ff9d] p-2 hover:bg-[#00ff9d] hover:text-[#0a0a0f] transition-colors rounded"
          >
            🏆
          </button>
        </div>

        <div className="grid grid-cols-[96px,1fr] gap-6 mb-6 items-center">
          <div
            className="w-24 h-24 bg-[#1a1a2f] border-2 border-[#00ff9d] relative cursor-pointer hover:scale-105 transition-transform rounded-lg"
            onClick={() => setShowMiniGame(true)}
          >
            <Image
              src="https://github.com/psychemist.png"
              alt="profile image"
              width={150}
              height={150}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="relative">
            <div className="hidden md:flex absolute top-0 right-0 gap-2">
              <button
                onClick={() => setShowInventory(!showInventory)}
                className="bg-transparent border-2 border-[#00ff9d] text-[#00ff9d] p-2 hover:bg-[#00ff9d] hover:text-[#0a0a0f] transition-colors rounded"
              >
                🎒
              </button>
              <button
                onClick={() => setShowAchievements(!showAchievements)}
                className="bg-transparent border-2 border-[#00ff9d] text-[#00ff9d] p-2 hover:bg-[#00ff9d] hover:text-[#0a0a0f] transition-colors rounded"
              >
                🏆
              </button>
            </div>

            <div className="flex flex-col w-4/5 mb-2 gap-0 md:gap-2 md:flex-row md:items-center md:w-full">
              <h1 className="mb-0 text-lg text-[#93bbfb]">psychemist</h1>
              <span className="inline-block bg-gradient-to-r from-[#b950f2] to-[#b950f2] text-[#0a0a0f] px-2 py-0 text-sm animate-pulse">
                LVL 99
              </span>
            </div>
            <a
              className="text-sm text-[#93bbfb] break-all hover:underline flex items-center"
              href="https://app.buidlguidl.com/builders/0x8b3C2CB21b6Cb04AE412e41565A804F0bC6D2244"
              target="_blank"
              rel="noopener"
            >
              0x8b3C2CB21b6Cb04AE412e41565A804F0bC6D2244
              <span className="ml-2">⬅︎</span>
            </a>
          </div>
        </div>

        {/* XP Bar */}
        <div className="h-6 bg-[#0a0a0f] border-2 border-[#ffd700] relative mb-6 rounded-full overflow-hidden">
          <div className="h-full w-3/4 mb-4 bg-gradient-to-r from-[#3c3c42] to-[#ffdd00] p-2 text-sm hover:bg-[#ffdd00]transition-colors rounded-lg shadow-md">
            <div className="absolute inset-0 flex items-center justify-center text-xs text-[#0a0a0f] font-semibold">
              75% TO LVL 100
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {["42.ETH POWER", "13.37k MANA", "1111 SPELLS"].map((stat, i) => (
            <div
              key={i}
              className="bg-[#0a0a0f] border-2 border-[#00ff9d] p-3 text-center relative overflow-hidden rounded-lg shadow-md"
            >
              <div className="text-lg text-[#b950f2] mb-1">{stat.split(" ")[0]}</div>
              <div className="text-xs text-[#e0e0ff]">{stat.split(" ")[1]}</div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="relative mb-6 bg-[rgba(0,240,255,0.05)] border-2 border-[#00f0ff] p-4 text-sm text-[#e0e0ff] rounded-lg shadow-md">
          Bit manipulator and garden keeper in the infinite ether. Building sustainable digital ecosystems one block at
          a time. Currently exploring the intersection of zero knowledge protocols and self-governing virtual reality
          cityscapes.
        </div>

        {/* Mini Game Modal */}
        {showMiniGame && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#0a0a0f] border-2 border-[#00ff9d] p-8 rounded-xl">
              <h3 className="text-center font-extrabold mb-4">🍀 GARDEN MATCH 🍀</h3>
              <h4 className="text-sm text-bold text-center font-bold mb-4">🏋🏽‍♂️ HARDCORE MODE 🏋🏽‍♂️</h4>
              <p className="my-5 text-xs text-center text-[#00ff9d]">
                <p>Match the emojis by clicking on the cells.</p>
                <p>If the emojis match, they will stay displayed.</p>
                <p>If they don&apos;t match, they will disappear.</p>
              </p>
              <MiniGame />
              <button
                onClick={() => setShowMiniGame(false)}
                className="w-2/5 float-end bg-[#00ff9d] text-[#0a0a0f] font-semibold p-2 mt-3 me-3 rounded hover:bg-[#00e08d] transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

        {/* Quests Panel */}
        <button
          onClick={() => setShowQuests(!showQuests)}
          className="w-full mb-4 bg-gradient-to-r from-[#0a0a0f] to-[#3ab2dd] border-2 border-[#00f0ff] p-2 text-sm text-[#e0e0ff] hover:bg-[#00f0ff] hover:text-[#0a0a0f] transition-colors rounded-lg shadow-md"
        >
          📜 QUESTS 📜
        </button>

        {showQuests && (
          <div className="mb-6 bg-[#0a0a0f] border-2 border-[#00f0ff] p-4 rounded-lg">
            {quests.map(quest => (
              <div key={quest.id} className="mb-4 last:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <span>{quest.icon}</span>
                  <span className="text-sm text-[#e0e0ff]">{quest.title}</span>
                </div>
                <div className="h-2 bg-[#1a1a2f] border border-[#00ff9d] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00ff9d] transition-all duration-300"
                    style={{ width: `${(quest.current / quest.total) * 100}%` }}
                  />
                </div>
                <div className="text-right text-xs mt-1 text-[#00ff9d]">
                  {quest.current}/{quest.total}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Inventory Panel */}
        {showInventory && (
          <div className="relative mb-6 bg-[#0a0a0f] border-2 border-[#00f0ff] p-4 rounded-lg">
            <h3 className="mb-4 text-md text-center text-[#93bbfb]">🍇 INVENTORY 🍇</h3>
            <div className="grid grid-cols-6 gap-6">
              {inventory.map(item => (
                <div
                  key={item.id}
                  className={`
                    aspect-square bg-[#1a1a2f] border-2 
                    ${
                      item.rarity === "legendary"
                        ? "border-[#b950f2]"
                        : item.rarity === "rare"
                          ? "border-[#00f0ff]"
                          : "border-[#00ff9d]"
                    }
                    rounded flex items-center justify-center text-2xl cursor-help
                    hover:scale-105 transition-transform
                  `}
                  title={`${item.name}\n${item.description}`}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Panel */}
        {showAchievements && (
          <div className="relative mb-6 bg-[#0a0a0f] border-2 border-[#00f0ff] p-4 rounded-lg">
            <h3 className="mb-4 text-md text-center text-[#93bbfb]">🥇 ACHIEVEMENTS 🥇</h3>
            {achievements.map(achievement => (
              <div key={achievement.id} className="px-3 mb-2 last:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <span>{achievement.icon}</span>
                  <span className="text-md text-[#e0e0ff]">{achievement.title}</span>
                </div>
                <div className="flex justify-between align-items text-xs text-[#e0e0ff]">
                  <span className="text-sm">{achievement.description}</span>
                  <span className="text-right text-xs mt-0 mb-5 text-[#00ff9d]">
                    {achievement.unlocked ? "Unlocked" : "Locked"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-5 mt-2 justify-center items-center">
          {socialLinks.map(app => (
            <a href={app.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" key={app.link}>
              {app.icon}
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-5 px-4 text-center text-sm text-[#00ff9d] z-1">
            Click on profile picture to play hidden game!
        </div>

      </div>
    </div>
  );
};

export default PsychemistBuilderPage;
