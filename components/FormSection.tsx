import React from "react";

type Props = {};

const FormSection = (props: Props) => {
  return (
    <section id="form-section" className="bg-darkBlueMain pb-28">
      <div className="w-1/2 px-28 space-y-5 pt-10 pb-10 shadow-xl container mx-auto bg-darkBlueIntro">
          <h3 className="text-white text-center text-xl font-bold">
            Get early access today
          </h3>
          <p className="text-white text-sm text-center">
            It only takes a minute to sign up and our free starter tier is extremely
            generous. If you have any questions, our support team would be happy to
            help you.
          </p>
          <form action="" className="flex justify-center gap-x-5">
            <input
              type="text"
              className="rounded-full pl-4 py-2 px-12"
              placeholder="myemail@email.com"
            />
            <input
              type="button"
              value="Get Started For Free"
              className="py-2 px-4 bg-blueGrad hover:bg-cyanGrad rounded-full text-white text-sm"
            />
          </form>
      </div>
    </section>
  );
};

export default FormSection;
