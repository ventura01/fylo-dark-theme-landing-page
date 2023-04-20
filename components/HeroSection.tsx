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
      <div className="flex flex-col items-center justify-center pt-16 text-white md:mb-[330px]">
        <Image
          src="/images/illustration-intro.png"
          width={600}
          height={600}
          alt="intro-img"
          className="mb-10 h-auto w-auto"
          priority
        />
        <div className="mb-10 flex flex-col gap-y-10 md:w-1/4">
          <h1 className="hidden text-center text-2xl font-bold md:flex">
            All your files in one secure location, accessible anywhere.
          </h1>
          <h1 className="text-center text-2xl font-bold md:hidden">
            All your files in one secure
            <br /> location, accessible
            <br /> anywhere.
          </h1>
          <p className="text-center text-sm">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </div>
        <button className="rounded-full bg-cyanGrad px-20 py-3 text-sm hover:bg-blueGrad md:px-6">
          Get Started
        </button>
      </div>
      <div>
        <Image
          src="/images/bg-curvy-desktop.svg"
          width={600}
          height={600}
          alt="curvy-img"
          className="absolute -z-10 hidden w-full md:top-[680px] md:flex"
        />
        <Image
          src="/images/bg-curvy-mobile.svg"
          width={600}
          height={600}
          alt="curvy-img"
          className="-z-10 w-full md:hidden"
        />
      </div>
    </header>
  );
};

export default HeroSection;
