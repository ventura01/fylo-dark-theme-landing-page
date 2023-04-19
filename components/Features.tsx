import Image from "next/image";
import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <section className="bg-darkBlueMain">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-screen-xl">
        <article className="flex flex-col items-center px-28 mb-12">
          <Image
            src="/images/icon-access-anywhere.svg"
            width={300}
            height={300}
            alt="feat-img"
            className="w-auto mb-6 28"
          />
          <h2 className="text-white mb-3 text-center font-bold text-base">
            Access your files, anywhere
          </h2>
          <p className="text-white text-center text-sm font-light">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </article>
        <article className="flex flex-col items-center px-28 mb-12">
          <Image
            src="/images/icon-security.svg"
            width={300}
            height={300}
            alt="feat-img"
            className="w-auto mb-6 28"
          />
          <h2 className="text-white mb-3 text-center font-bold text-base">
            Security you can trust
          </h2>
          <p className="text-white text-center text-sm font-light">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </article>
        <article className="flex flex-col items-center px-28 mb-12">
          <Image
            src="/images/icon-collaboration.svg"
            width={300}
            height={300}
            alt="feat-img"
            className="w-auto mb-6 28"
          />
          <h2 className="text-white mb-3 text-center font-bold text-base">
            Real-time collaboration
          </h2>
          <p className="text-white text-center text-sm font-light">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </article>
        <article className="flex flex-col items-center px-28 mb-12">
          <Image
            src="/images/icon-any-file.svg"
            width={300}
            height={300}
            alt="feat-img"
            className="w-auto mb-6 28"
          />
          <h2 className="text-white mb-3 text-center font-bold text-base">
            Store any type of file
          </h2>
          <p className="text-white text-center text-sm font-light">
            Whether you&apos;re sharing holidays photos or work documents, Fylo
            has you covered allowing for all file types to be securely stored
            and shared.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Features;
