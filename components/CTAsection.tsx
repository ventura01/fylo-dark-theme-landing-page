import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

type Props = {};

const CTAsection = (props: Props) => {
  return (
    <section className="bg-darkBlueMain">
      <div className="grid grid-cols-1 md:container md:mx-auto md:max-w-screen-xl md:grid-cols-2">
        <div>
            <Image
              src="/images/illustration-stay-productive.png"
              width={600}
              height={600}
              alt="cta-img"
              className="mb-16 h-auto w-auto "
            />
        </div>
        <div className="flex flex-col justify-center px-5 md:pl-28">
          <h2 className="mb-5 text-lg font-bold text-white md:text-2xl">
            Stay productive, wherever you are
          </h2>
          <p className="mb-5 text-sm text-white">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="mb-5 text-sm text-white">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <Link href="#features">
            <div className="flex items-center">
              <span className="peer mr-3 text-sm text-white underline-offset-8 hover:text-cyanGrad hover:underline">
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
