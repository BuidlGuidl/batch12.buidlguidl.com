import Image from "next/image";
import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const obahProfile: NextPage = () => {
  const address = "0x1C945Cd472EFBE3b34798AA49457Bc7415636E5D";

  return (
    <main className="mx-auto w-[90%] md:w-4/5 lg:w-[90%] xl:max-w-7xl">
      <section className="flex flex-col-reverse items-center gap-6 px-5 py-3 mt-10 bg-base-100 shadow-xl rounded-lg md:py-14 md:px-10 md:mt-20 lg:grid lg:grid-cols-2 xl:gap-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-6xl">Obaloluwa</h1>

            <Address address={address} />

            <p className="text-xl font-bold">Web3 Security Researcher</p>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-extrabold">About Me</h2>

            <p>
              Hi there, I am Obaloluwa, a software developer passionate about blockchain and securing it. I have a
              background in frontend development using Javascript, React and TailwindCSS.
            </p>
            <p>
              I am also proficient in Solidity and I am currently learning Rust and ZK while honing my smart contract
              auditing and writing skills. Let us connect and build together 🙂
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/obah"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm font-normal gap-1"
            >
              GitHub
            </a>

            <a
              href="https://x.com/oba_ddev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm font-normal gap-1"
            >
              X
            </a>
            <a
              href="https://medium.com/@olusojiobah/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm font-normal gap-1"
            >
              Medium
            </a>
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
