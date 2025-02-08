import Image from "next/image";
import Link from "next/link";
import BuildersCheckInCount from "./_components/BuildersCheckInCount";
import type { NextPage } from "next";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative container mx-auto px-12 sm:px-6 lg:px-8">
        <Image src="/background.jpg" alt="Website Background Image" priority fill className="opacity-5 object-cover" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-around py-20 gap-2">
          {/* Left Content Section */}
          <section className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Seizing the right time
              <span className="block text-emerald-400">to build.</span>
            </h1>
            <p className="mt-6 text-lg max-w-2xl mx-auto lg:mx-0">
              We are a team of passionate blockchain developers crafting the future of decentralized technology. Join us
              in building the next generation of Web3 solutions.
            </p>
            <div className="flex justify-center lg:justify-start">
              <BuildersCheckInCount />
            </div>

            <Link href={"/builders"} passHref>
              <button
                className="mt-8 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold
          flex items-center justify-center gap-2 mx-auto lg:mx-0 transition-all duration-300 transform hover:scale-105"
              >
                Meet the Builders
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </Link>
          </section>

          {/* Right Content Section */}
          <section className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px]">
              <div className="absolute -inset-1 bg-emerald-500/30 rounded-full blur-3xl"></div>
              <Image
                src="/Network.png"
                alt="Blockchain Network"
                width={450}
                height={450}
                className="relative rounded-lg w-full h-auto"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
