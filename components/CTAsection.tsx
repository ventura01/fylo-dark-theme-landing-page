import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

type Props = {};

const CTAsection = (props: Props) => {
  return (
    <section className="bg-darkBlueMain pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-screen-xl">
        <Image
          src="/images/illustration-stay-productive.png"
          width={600}
          height={600}
          alt="cta-img"
          className="w-auto h-auto"
        />
        <div className="flex flex-col justify-center pl-28">
          <h2 className="text-white text-2xl font-bold mb-5">
            Stay productive, wherever you are
          </h2>
          <p className="text-white text-sm mb-5">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-white text-sm mb-5">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <Link href="#features">
            <div className="flex items-center">
              <span className="text-white mr-3 peer hover:underline underline-offset-8 text-sm">
                See how Fylo works
              </span>
              <BsFillArrowRightCircleFill
                color="#fff"
                className="peer-hover:underline"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
