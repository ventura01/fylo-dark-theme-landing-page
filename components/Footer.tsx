import Image from "next/image";
import React from "react";
import {
  BsFillGeoAltFill,
  BsFillTelephoneOutboundFill,
  BsEnvelopeAt,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="footer" className="bg-darkBlueFooter pb-12 pt-12">
      <div className="pl-5 md:container md:mx-auto md:max-w-screen-xl">
        <Image
          src="/images/logo.svg"
          width={120}
          height={120}
          alt="logo-footer-img"
          className="mb-5 h-auto w-32 md:w-24"
        />
      </div>
      <div className="grid-cols- grid md:container md:mx-auto md:max-w-screen-xl md:grid-cols-5">
        <div className="mb-5 flex px-5 md:pr-5">
          <BsFillGeoAltFill color="#fff" size={"3rem"} className="self-start" />
          <p className="ml-3 text-xs font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima
            tenetur deleniti praesentium modi, soluta repellendus.
          </p>
        </div>
        <div className="mb-16 flex flex-col px-5 md:items-center">
          <div>
            <div className="flex">
              <BsFillTelephoneOutboundFill color="#fff" />
              <p className="mb-4 ml-3 text-xs font-light text-white">
                +1-543-123-4567
              </p>
            </div>
            <div className="flex">
              <BsEnvelopeAt color="#fff" />
              <p className="ml-3 text-xs font-light text-white">
                example@fylo.com
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10 flex justify-start px-5 md:mb-0 md:justify-center md:px-0">
          <ul className="space-y-3 text-sm text-white">
            <li className="cursor-pointer hover:font-semibold">About Us</li>
            <li className="cursor-pointer hover:font-semibold">Jobs</li>
            <li className="cursor-pointer hover:font-semibold">Press</li>
            <li className="cursor-pointer hover:font-semibold">Blog</li>
          </ul>
        </div>
        <div className="mb-10 flex justify-start px-5 md:mb-0 md:justify-center md:px-0">
          <ul className="space-y-3 text-sm text-white">
            <li className="cursor-pointer hover:font-semibold">Contact Us</li>
            <li className="cursor-pointer hover:font-semibold">Terms</li>
            <li className="cursor-pointer hover:font-semibold">Privacy</li>
          </ul>
        </div>
        <div className="flex justify-center gap-x-4">
          <BsFacebook color="#fff" className="hover:fill-cyanGrad" />
          <BsInstagram color="#fff" className="hover:fill-cyanGrad" />
          <BsTwitter color="#fff" className="hover:fill-cyanGrad" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
