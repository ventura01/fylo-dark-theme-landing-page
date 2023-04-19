import Image from "next/image";
import React from "react";
import { Raleway, Open_Sans } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <header>
      <div className="flex flex-col justify-center items-center text-white mb-[330px]">
        <Image
          src="/images/illustration-intro.png"
          width={600}
          height={600}
          alt="intro-img"
          className="h-auto w-auto mb-10"
          priority
        />
        <div className="flex flex-col w-1/4 gap-y-10 mb-10">
          <h1 className="text-2xl text-center font-bold">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-center text-sm">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </div>
        <button className="px-6 py-1 text-sm bg-cyanGrad rounded-full">
          Get Started
        </button>
      </div>
      <div>
        <Image
          src="/images/bg-curvy-desktop.svg"
          width={600}
          height={600}
          alt="curvy-img"
          className="w-full -z-10 absolute -bottom-72"
        />
      </div>
    </header>
  );
};

export default HeroSection;
