"use client";

import { useState } from "react";

interface Quest {
  id: string;
  title: string;
  icon: string;
  current: number;
  total: number;
  reward: string;
}

interface InventoryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  rarity: "common" | "rare" | "legendary";
}

interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
  rarity: "common" | "rare" | "legendary";
}

export default function ProfilePage() {
  const [showInventory, setShowInventory] = useState(false);
  const [showQuests, setShowQuests] = useState(false);
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [gameBoard, setGameBoard] = useState<string[]>(Array(9).fill(""));
  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  const quests: Quest[] = [
    {
      id: "1",
      title: "Plant 100 Seeds",
      icon: "🌱",
      current: 65,
      total: 100,
      reward: "🏆 Legendary Gardener Title",
    },
    {
      id: "2",
      title: "Water Gardens",
      icon: "💧",
      current: 3,
      total: 10,
      reward: "💫 Rare Growth Potion",
    },
  ];

  const inventory: InventoryItem[] = [
    {
      id: "1",
      name: "Magic Seed",
      icon: "🌱",
      description: "A rare seed that grows digital flowers",
      rarity: "rare",
    },
    {
      id: "2",
      name: "Water Essence",
      icon: "💧",
      description: "Pure digital water for your garden",
      rarity: "common",
    },
    {
      id: "3",
      name: "Growth Potion",
      icon: "⚗️",
      description: "Doubles garden growth speed",
      rarity: "rare",
    },
    {
      id: "4",
      name: "Star Fragment",
      icon: "⭐",
      description: "A piece of digital stardust",
      rarity: "legendary",
    },
  ];

  const achievements: Achievement[] = [
    {
      id: "1",
      icon: "🌱",
      title: "First Steps",
      description: "Plant your first seed",
      unlocked: true,
      rarity: "common",
    },
    {
      id: "2",
      icon: "🔥",
      title: "100 Days Streak",
      description: "Maintain activity for 100 days",
      unlocked: true,
      rarity: "rare",
    },
    {
      id: "3",
      icon: "👑",
      title: "Garden Master",
      description: "Reach level 50",
      unlocked: true,
      rarity: "legendary",
    },
    {
      id: "4",
      icon: "⭐",
      title: "Legendary Status",
      description: "???",
      unlocked: false,
      rarity: "legendary",
    },
  ];

  // Mini-game logic
  const colors = ["🌸", "🌺", "🌻", "🌼", "🌷"];

  const handleCellClick = (index: number) => {
    if (gameBoard[index]) return;

    const newBoard = [...gameBoard];
    newBoard[index] = colors[Math.floor(Math.random() * colors.length)];
    setGameBoard(newBoard);

    if (selectedCell === null) {
      setSelectedCell(index);
    } else {
      // Check for match
      if (newBoard[selectedCell] === newBoard[index]) {
        // Match found!
        setTimeout(() => {
          const clearedBoard = [...newBoard];
          clearedBoard[selectedCell] = "";
          clearedBoard[index] = "";
          setGameBoard(clearedBoard);
        }, 500);
      }
      setSelectedCell(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] p-6 font-['Press_Start_2P']">
      <div className="max-w-2xl mx-auto bg-[#1a1a2f] rounded-2xl border-4 border-[#00ff9d] p-6 relative">
        {/* Profile Header */}
        <div className="grid grid-cols-[96px,1fr] gap-6 mb-6 items-center">
          <div
            className="w-24 h-24 bg-[#1a1a2f] border-4 border-[#00ff9d] relative cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setShowMiniGame(true)}
          >
            {/* Avatar content */}
          </div>

          <div>
            <h1 className="text-xl text-[#00ff9d] mb-2">
              VOID GARDENER <span className="bg-[#ff00ff] text-[#0a0a0f] px-2 py-1 text-sm animate-pulse">LVL 42</span>
            </h1>
            <p className="text-sm text-[#00f0ff] break-all">0xD7AB529467eB698db97044c34997d01804204CCD</p>
          </div>
        </div>

        {/* XP Bar */}
        <div className="h-6 bg-[#0a0a0f] border-2 border-[#ffd700] relative mb-6">
          <div className="h-full w-3/4 bg-[#ffd700] relative">
            <div className="absolute inset-0 flex items-center justify-center text-xs text-[#0a0a0f]">
              75% TO LVL 43
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {["847 COMMITS", "42.eth POWER", "13.37k MANA"].map((stat, i) => (
            <div key={i} className="bg-[#0a0a0f] border-2 border-[#00ff9d] p-3 text-center relative overflow-hidden">
              <div className="text-lg text-[#00ff9d] mb-1">{stat.split(" ")[0]}</div>
              <div className="text-xs text-[#e0e0ff]">{stat.split(" ")[1]}</div>
            </div>
          ))}
        </div>

        {/* Quests Panel */}
        <button
          onClick={() => setShowQuests(!showQuests)}
          className="w-full mb-4 bg-[#0a0a0f] border-2 border-[#00f0ff] p-2 text-sm hover:bg-[#00f0ff] hover:text-[#0a0a0f] transition-colors"
        >
          📜 QUESTS
        </button>

        {showQuests && (
          <div className="mb-6 bg-[#0a0a0f] border-2 border-[#00f0ff] p-4 rounded-lg">
            {quests.map(quest => (
              <div key={quest.id} className="mb-4 last:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <span>{quest.icon}</span>
                  <span className="text-sm">{quest.title}</span>
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

        {/* Mini Game Modal */}
        {showMiniGame && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#0a0a0f] border-4 border-[#00ff9d] p-6 rounded-xl">
              <h3 className="text-center mb-4">GARDEN MATCH</h3>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {gameBoard.map((cell, index) => (
                  <button
                    key={index}
                    onClick={() => handleCellClick(index)}
                    className="w-16 h-16 bg-[#1a1a2f] border-2 border-[#00f0ff] rounded flex items-center justify-center text-2xl hover:bg-[#2a2a3f] transition-colors"
                  >
                    {cell}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setShowMiniGame(false);
                  setGameBoard(Array(9).fill(""));
                  setSelectedCell(null);
                }}
                className="w-full bg-[#00ff9d] text-[#0a0a0f] py-2 rounded hover:bg-[#00cc7d] transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

        {/* Inventory Button */}
        <button
          onClick={() => setShowInventory(!showInventory)}
          className="absolute top-6 right-6 bg-transparent border-2 border-[#00ff9d] text-[#00ff9d] p-2 hover:bg-[#00ff9d] hover:text-[#0a0a0f] transition-colors rounded"
        >
          🎒
        </button>

        {/* Inventory Panel */}
        {showInventory && (
          <div className="mb-6 bg-[#0a0a0f] border-2 border-[#00ff9d] p-4 rounded-lg">
            <h3 className="mb-4 text-sm">INVENTORY</h3>
            <div className="grid grid-cols-6 gap-2">
              {inventory.map(item => (
                <div
                  key={item.id}
                  className={`
                    aspect-square bg-[#1a1a2f] border-2 
                    ${
                      item.rarity === "legendary"
                        ? "border-[#ff00ff]"
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

        <div className="mb-6 bg-[#0a0a0f] border-2 border-[#00ff9d] p-4 rounded-lg">
          <h3 className="mb-4 text-sm">ACHIEVEMENTS</h3>
          <div className="grid grid-cols-6 gap-2">
            {achievements.map(item => (
              <div
                key={item.id}
                className={`
                    aspect-square bg-[#1a1a2f] border-2 
                    ${
                      item.rarity === "legendary"
                        ? "border-[#ff00ff]"
                        : item.rarity === "rare"
                          ? "border-[#00f0ff]"
                          : "border-[#00ff9d]"
                    }
                    rounded flex items-center justify-center text-2xl cursor-help
                    hover:scale-105 transition-transform
                  `}
                title={`${item.title}\n${item.description}`}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Rest of the profile content */}
        <div className="bio mb-6 bg-[rgba(0,240,255,0.05)] border-2 border-[#00f0ff] p-4 text-sm">
          Pixel artist and garden keeper in the infinite ethereum void. Building sustainable digital ecosystems one
          block at a time. Currently exploring the intersection of zero knowledge porotocols and infinite generative
          gardens.
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 gap-3">
          {["TWITTER", "GITHUB", "MIRROR", "FARCASTER"].map(link => (
            <a
              key={link}
              href="#"
              className="flex items-center px-4 py-2 bg-[#0a0a0f] border-2 border-[#00ff9d] text-[#e0e0ff] no-underline text-sm hover:bg-[#00ff9d] hover:text-[#0a0a0f] hover:-translate-y-0.5 transition-all"
            >
              <span className="mr-2 text-[#00ff9d]">{">"}</span>
              {link}
            </a>
          ))}
        </div>

        {/* Animated Dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00ff9d] rounded-full animate-blink"
              style={{
                top: `${[10, 90, 50, 30, 70][i]}%`,
                left: `${[90, 10, 85, 15, 95][i]}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
