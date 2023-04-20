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
      <div className="flex flex-col pt-16 justify-center items-center text-white md:mb-[330px]">
        <Image
          src="/images/illustration-intro.png"
          width={600}
          height={600}
          alt="intro-img"
          className="h-auto w-auto mb-10"
          priority
        />
        <div className="flex flex-col md:w-1/4 gap-y-10 mb-10">
          <h1 className="text-2xl text-center font-bold hidden md:flex">
            All your files in one secure location, accessible anywhere.
          </h1>
          <h1 className="md:hidden text-2xl text-center font-bold">
            All your files in one secure<br/> location, accessible<br/> anywhere.
          </h1>
          <p className="text-center text-sm">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </div>
        <button className="md:px-6 px-20 py-3 text-sm bg-cyanGrad rounded-full hover:bg-blueGrad">
          Get Started
        </button>
      </div>
      <div>
        <Image
          src="/images/bg-curvy-desktop.svg"
          width={600}
          height={600}
          alt="curvy-img"
          className="w-full -z-10 md:flex absolute md:-bottom-[130px] hidden"
        />
        <Image
          src="/images/bg-curvy-mobile.svg"
          width={600}
          height={600}
          alt="curvy-img"
          className="w-full -z-10 md:hidden"
        />
      </div>
    </header>
  );
};

export default HeroSection;
