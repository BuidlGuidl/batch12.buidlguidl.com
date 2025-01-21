interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
  rarity: "common" | "rare" | "legendary";
}

interface InventoryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  rarity: "common" | "rare" | "legendary";
}

interface Quest {
  id: string;
  title: string;
  icon: string;
  current: number;
  total: number;
  reward: string;
}

export const achievements: Achievement[] = [
  {
    id: "1",
    icon: "💪🏽",
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
    icon: "🪬",
    title: "Legendary Status",
    description: "???",
    unlocked: false,
    rarity: "legendary",
  },
];

export const inventory: InventoryItem[] = [
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
  {
    id: "5",
    name: "Mystery Box",
    icon: "🤔",
    description: "A mystery item",
    rarity: "rare",
  },
  {
    id: "6",
    name: "Mystery Box",
    icon: "🤐",
    description: "A mystery item",
    rarity: "legendary",
  },
];

export const quests: Quest[] = [
  {
    id: "1",
    title: "Plant 100 Seeds",
    icon: "🌱",
    current: 69,
    total: 100,
    reward: "🏆 Legendary Gardener Title",
  },
  {
    id: "2",
    title: "Slay Dragons",
    icon: "🐉",
    current: 11,
    total: 33,
    reward: "💎 Diamond Scales",
  },
  {
    id: "3",
    title: "Water Gardens",
    icon: "💧",
    current: 4,
    total: 20,
    reward: "💫 Rare Growth Potion",
  },
];

export * from "./resources";
