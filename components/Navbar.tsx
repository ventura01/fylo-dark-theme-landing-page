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
    <nav className="container max-w-screen-xl mx-auto flex justify-between items-center mb-10 pt-12">
      <Image
        src="/images/logo.svg"
        width={90}
        height={50}
        alt="logo-img"
        className="h-auto w-24"
      />
      <div className="flex gap-x-8 text-white">
        <Link className="hover:underline underline-offset-1" href="#features">
          <span className={`${raleway.className} text-sm`}>Features</span>
        </Link>
        <Link className="hover:underline underline-offset-1" href="#team">
          <span className={`${raleway.className} text-sm`}>Team</span>
        </Link>
        <button className={`${raleway.className} text-sm`}>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
