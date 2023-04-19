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
          <div className="container max-w-screen-xl mx-auto">
              <Image
                src="/images/logo.svg"
                width={120}
                height={120}
                alt="logo-footer-img"
                className="w-24 h-auto mb-5"
              />
          </div>
      <div className="container max-w-screen-xl mx-auto grid grid-cols- md:grid-cols-5">
          <div className="flex  pr-5">
            <BsFillGeoAltFill color="#fff" size={"3rem"} className="self-start"/>
            <p className="text-white text-xs ml-3 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima
              tenetur deleniti praesentium modi, soluta repellendus.
            </p>
          </div>
        <div className="flex flex-col items-center">
          <div>
              <div className="flex">
                <BsFillTelephoneOutboundFill color="#fff" />
                <p className="text-white text-xs ml-3 font-light mb-4">
                  +1-543-123-4567
                </p>
              </div>
              <div className="flex">
                <BsEnvelopeAt color="#fff" />
                <p className="text-white text-xs ml-3 font-light">
                  example@fylo.com
                </p>
              </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="text-white text-sm space-y-3">
            <li className="hover:font-semibold cursor-pointer">About Us</li>
            <li className="hover:font-semibold cursor-pointer">Jobs</li>
            <li className="hover:font-semibold cursor-pointer">Press</li>
            <li className="hover:font-semibold cursor-pointer">Blog</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="text-white text-sm space-y-3">
            <li className="hover:font-semibold cursor-pointer">Contact Us</li>
            <li className="hover:font-semibold cursor-pointer">Terms</li>
            <li className="hover:font-semibold cursor-pointer">Privacy</li>
          </ul>
        </div>
        <div className="flex gap-x-4 justify-center">
          <BsFacebook color="#fff" className="hover:fill-cyanGrad"/>
          <BsInstagram color="#fff" className="hover:fill-cyanGrad"/>
          <BsTwitter color="#fff" className="hover:fill-cyanGrad"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
