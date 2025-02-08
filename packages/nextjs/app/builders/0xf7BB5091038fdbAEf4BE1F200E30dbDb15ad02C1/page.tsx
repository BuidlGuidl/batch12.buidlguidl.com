import Image from "next/image";
import { type NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const PeterProfileInfo = {
  name: "Nnadi Peter",
  role: "Blockchain Developer",
  address: "0xf7BB5091038fdbAEf4BE1F200E30dbDb15ad02C1",
  avatar: "/nnadipeter.png",

  links: {
    github: {
      url: "https://github.com/peternnadi1999",
      colors: {
        default: "text-gray-500",
        hover: "hover:text-gray-900",
      },
    },
    twitter: {
      url: "https://twitter.com/PeterNnadi7",
      colors: {
        default: "text-blue-400",
        hover: "hover:text-blue-600",
      },
    },
    linkedin: {
      url: "https://linkedin.com/in/nnadi-peter-emeka",
      colors: {
        default: "text-blue-700",
        hover: "hover:text-blue-900",
      },
    },
  },
  transition: "transition-colors",
  iconSize: "w-4 h-4",
  skills: ["Smart Contracts", "Solidity", "React.js", "Javascript", "Ethereum"],
};

const BuilderProfile: NextPage = () => {
  return (
    <div className="p-8 font-sans flex items-center justify-center min-h-screen">
      <div className="max-w-xl w-full rounded-lg p-8">
        {/* Profile Header */}
        <div className="text-center">
          <Image
            src={PeterProfileInfo.avatar}
            alt="Profile Avatar"
            width={128}
            height={128}
            className="rounded-full border mx-auto"
          />
          <h1 className="text-xl font-sans dark:text-white font-bold mt-4">{PeterProfileInfo.name}</h1>
          <div className="flex justify-center mt-2">
            <Address address={PeterProfileInfo.address} />
          </div>
          <p className="text-lg font-sans text-gray-500">{PeterProfileInfo.role}</p>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 dark:text-white text-gray-800">About Me</h2>
          <div>
            <span className="block mb-2 dark:text-white text-gray-800">
              Hello! I am Peter, a dedicated software engineer with expertise in frontend technologies like
              <strong> React, Vue and TailwindCSS</strong>.
            </span>

            <span className="block mb-2 dark:text-white text-gray-800">
              Enthusiastic about <strong>blockchain innovation, and zero-knowledge proofs</strong>. I have a strong
              command of
              <strong> Solidity </strong> and am currently expanding my skill set with <strong>Rust</strong> while
              refining my abilities in smart contract development.
            </span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 dark:text-white text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {PeterProfileInfo.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6">
          <div className="flex space-x-6 justify-center">
            {Object.entries(PeterProfileInfo.links).map(([key, { url, colors }]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.default} ${colors.hover} ${PeterProfileInfo.transition}`}
              >
                <span className="sr-only">{key}</span>
                {key === "github" && (
                  <svg
                    className={PeterProfileInfo.iconSize}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.372 0 0 5.372 0 12a12 12 0 008.2 11.42c.6.112.82-.26.82-.582v-2.03c-3.33.722-4.028-1.416-4.028-1.416-.546-1.386-1.33-1.754-1.33-1.754-1.086-.744.082-.728.082-.728 1.2.082 1.83 1.23 1.83 1.23 1.068 1.83 2.798 1.3 3.482.996.104-.774.418-1.3.762-1.598-2.664-.3-5.464-1.33-5.464-5.93 0-1.31.468-2.38 1.23-3.22-.122-.302-.532-1.518.116-3.164 0 0 1.002-.322 3.28 1.228A11.443 11.443 0 0112 6.798c1.018.004 2.04.138 3.002.404 2.276-1.548 3.276-1.228 3.276-1.228.65 1.646.242 2.862.118 3.164.768.84 1.23 1.91 1.23 3.22 0 4.612-2.804 5.624-5.474 5.92.428.37.804 1.1.804 2.22v3.292c0 .324.218.7.828.58A12 12 0 0012 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
                {key === "twitter" && (
                  <svg
                    className={PeterProfileInfo.iconSize}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.523A8.349 8.349 0 0022 5.92a8.19 8.19 0 01-2.357.635A4.078 4.078 0 0021.447 4a8.223 8.223 0 01-2.605.979 4.103 4.103 0 00-6.993 3.743A11.645 11.645 0 013.149 4.92a4.036 4.036 0 001.27 5.475 4.074 4.074 0 01-1.855-.511v.05c0 2.281 1.633 4.179 3.809 4.611a4.09 4.09 0 01-1.85.07c.518 1.598 2.028 2.761 3.822 2.795a8.233 8.233 0 01-5.062 1.728c-.328 0-.653-.019-.975-.057A11.616 11.616 0 008.29 20.25z"></path>
                  </svg>
                )}
                {key === "linkedin" && (
                  <svg
                    className={PeterProfileInfo.iconSize}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.451 20.452H16.92v-5.873c0-1.402-.028-3.207-1.954-3.207-1.954 0-2.254 1.529-2.254 3.11v5.97H9.174V9.751h3.39v1.455h.047c.473-.9 1.632-1.85 3.358-1.85 3.588 0 4.253 2.362 4.253 5.44v6.655zM6.37 8.293a1.974 1.974 0 01-1.974-1.974c0-1.088.886-1.974 1.974-1.974 1.088 0 1.974.886 1.974 1.974 0 1.088-.886 1.974-1.974 1.974zm1.688 12.159H4.683V9.751h3.375v10.701zM22.225 0H1.771C.79 0 0 .791 0 1.771v20.451C0 23.209.79 24 1.771 24h20.451C23.209 24 24 23.209 24 22.225V1.771C24 .791 23.209 0 22.225 0z"></path>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderProfile;
