import Image from "next/image";
import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <section className="bg-darkBlueMain">
      <div className="grid grid-cols-1 md:container md:mx-auto md:max-w-screen-xl md:grid-cols-2">
        <article className="mb-28 md:mb-12 flex flex-col items-center px-5 md:px-28">
          <Image
            src="/images/icon-access-anywhere.svg"
            width={300}
            height={300}
            alt="feat-img"
            className="mb-6 w-auto"
          />
          <h2 className="mb-3 text-center text-base font-bold text-white">
            Access your files, anywhere
          </h2>
          <p className="text-center text-sm font-light text-white">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </article>
        <article className="mb-28 md:mb-12 flex flex-col items-center px-5 md:px-28">
          <Image
            src="/images/icon-security.svg"
            width={300}
            height={300}
            alt="feat-img"
            className="mb-6 w-auto"
          />
          <h2 className="mb-3 text-center text-base font-bold text-white">
            Security you can trust
          </h2>
          <p className="text-center text-sm font-light text-white">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </article>
        <article className="mb-28 md:mb-12 flex flex-col items-center px-5 md:px-28">
          <Image
            src="/images/icon-collaboration.svg"
            width={300}
            height={300}
            alt="feat-img"
            className="mb-6 w-auto"
          />
          <h2 className="mb-3 text-center text-base font-bold text-white">
            Real-time collaboration
          </h2>
          <p className="text-center text-sm font-light text-white">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </article>
        <article className="mb-28 md:mb-12 flex flex-col items-center px-5 md:px-28">
          <Image
            src="/images/icon-any-file.svg"
            width={300}
            height={300}
            alt="feat-img"
            className="mb-6 w-auto"
          />
          <h2 className="mb-3 text-center text-base font-bold text-white">
            Store any type of file
          </h2>
          <p className="text-center text-sm font-light text-white">
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
