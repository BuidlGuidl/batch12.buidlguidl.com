import Image from "next/image";
import { NextPage } from "next";
import { FaMediumM } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Address } from "~~/components/scaffold-eth";

const obahProfile: NextPage = () => {
  const address = "0x1C945Cd472EFBE3b34798AA49457Bc7415636E5D";

  const socialLinks = [
    {
      name: "github",
      link: "https://github.com/obah",
      icon: <FaGithub />,
    },
    {
      name: "x",
      link: "https://x.com/oba_ddev",
      icon: <FaXTwitter />,
    },
    {
      name: "medium",
      link: "https://medium.com/@olusojiobah/",
      icon: <FaMediumM />,
    },
  ] as const;

  return (
    <main className="mx-auto w-[90%] md:w-4/5 lg:w-[90%] xl:max-w-7xl">
      <section className="flex flex-col-reverse items-center gap-6 px-5 py-3 mt-10 bg-base-100 shadow-xl rounded-lg md:py-14 md:px-10 md:mt-20 lg:grid lg:grid-cols-2 xl:gap-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-6xl">Obaloluwa</h1>

            <Address address={address} />

            <p className="text-xl font-bold">Smart Contract Developer</p>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-extrabold">About Me</h2>

            <p>
              Hi there, I am Obaloluwa, a software developer with a background in frontend development using{" "}
              <b>Javascript, React and TailwindCSS</b>.
            </p>

            <p>
              Passionate about <b>blockchain, blockchain security and zero knowledge</b>. I am proficient in{" "}
              <b>Solidity</b> and currently learning <b>Rust</b> and ZK while honing my smart contract auditing and
              writing skills.
            </p>

            <p>Let us connect and build together 🙂</p>
          </div>

          <div className="flex gap-4 items-center">
            {socialLinks.map(item => (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" key={item.link}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="avatar">
          <Image
            src="https://avatars.githubusercontent.com/u/15352545?v=4"
            width={300}
            height={300}
            alt="obaloluwa"
            className="rounded-full"
          />
        </div>
      </section>
    </main>
  );
};

export default obahProfile;
