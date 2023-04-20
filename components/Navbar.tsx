import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Raleway } from "next/font/google";
import { Open_Sans } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center px-5 justify-between pt-12 md:container md:mx-auto md:mb-10 md:max-w-screen-xl">
      <Image
        src="/images/logo.svg"
        width={90}
        height={50}
        alt="logo-img"
        className="h-auto w-24"
      />
      <div className="flex gap-x-8 text-white">
        <Link className="underline-offset-1 hover:underline" href="#features">
          <span className={`${raleway.className} text-sm`}>Features</span>
        </Link>
        <Link className="underline-offset-1 hover:underline" href="#team">
          <span className={`${raleway.className} text-sm`}>Team</span>
        </Link>
        <button className={`${raleway.className} text-sm`}>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
