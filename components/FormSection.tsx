import React from "react";

type Props = {};

const FormSection = (props: Props) => {
  return (
    <section id="form-section" className="bg-darkBlueMain pb-28">
      <div className="space-y-5 bg-darkBlueIntro px-5 pb-10 pt-10 shadow-xl md:container md:mx-auto md:w-1/2 md:px-28">
        <h3 className="text-center text-xl font-bold text-white">
          Get early access today
        </h3>
        <p className="text-center text-sm text-white">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form action="" className="justify-center md:flex md:gap-x-5">
          <input
            type="text"
            className="mb-5 w-full rounded-full px-12 py-3 pl-4 md:w-auto"
            placeholder="myemail@email.com"
          />
          <input
            type="button"
            value="Get Started For Free"
            className="h-12 w-full cursor-pointer rounded-full bg-cyanGrad px-4 py-1 text-sm text-white hover:bg-blueGrad md:w-auto"
          />
        </form>
      </div>
    </section>
  );
};

export default FormSection;
