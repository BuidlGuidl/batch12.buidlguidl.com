import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Address } from "~~/components/scaffold-eth";

export default function Page() {
  const BUILDER_INFO = {
    name: "Jason Suárez",
    role: "Smart Contract | Frontend Developer",
    address: "0x7d971C39bb700AcEc20879D46f092dC0DB1dbF9E",
    avatar: "https://ik.imagekit.io/montresor/9.png?updatedAt=1730742966131",
    tagline: "Securing the blockchain, one contract at a time",
    languages: ["🇫🇷", "🇩🇴", "🇬🇧"],
    links: {
      bg: "https://app.buidlguidl.com/builders/0x7d971C39bb700AcEc20879D46f092dC0DB1dbF9E",
      github: "https://github.com/All-Khwarizmi",
      twitter: "https://twitter.com/swarecito",
      telegram: "https://t.me/swarecito",
    },
    focus: {
      building: "Smart Contracts",
      learning: "DeFi security and cross-chain mechanics",
      contributing: "BuildGuild batch12 and open source",
    },
    journey: [
      {
        year: "2023",
        milestone: "Frontend Developer",
        detail: "Building modern web applications",
      },
      {
        year: "2024",
        milestone: "Blockchain Development",
        detail: "Smart contract development & security",
      },
      {
        year: "2025",
        milestone: "BuildGuild #12",
        detail: "Contributing to Web3 ecosystem",
      },
    ],
  };

  return (
    <div className="p-4 flex  items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className=" rounded-lg shadow-xl p-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-4">
            {/* Avatar */}
            <div className="relative">
              <img src={BUILDER_INFO.avatar} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
            </div>

            {/* Identity */}
            <h1 className="text-3xl font-bold">{BUILDER_INFO.name}</h1>
            <Address address={BUILDER_INFO.address} />
            <p className="text-lg opacity-80">{BUILDER_INFO.tagline}</p>

            {/* Social Links */}
            <a
              href={BUILDER_INFO.links.bg}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity underline text-blue-600"
            >
              <BuidlGuidlLogo className=" h-6" />
            </a>
            <div className="flex space-x-4">
              <a
                href={BUILDER_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity underline text-blue-600"
              >
                Github
              </a>
              <a
                href={BUILDER_INFO.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity underline text-blue-600"
              >
                X
              </a>
              <a
                href={BUILDER_INFO.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity underline text-blue-600"
              >
                Telegram
              </a>
            </div>
          </div>
          {/* Languages */}
          <div className="text-center">
            <p className="text-lg opacity-80">{BUILDER_INFO.languages.join(" ")}</p>
          </div>

          {/* Current Focus */}
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h2 className="text-xl font-bold mb-2">Building</h2>
                <p>{BUILDER_INFO.focus.building}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Learning</h2>
                <p>{BUILDER_INFO.focus.learning}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Contributing</h2>
                <p>{BUILDER_INFO.focus.contributing}</p>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Journey</h2>
            <div className="space-y-2">
              {BUILDER_INFO.journey.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="font-bold">{step.year}</span>
                  <span className="flex-grow border-t border-base-300"></span>
                  <span>{step.milestone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
