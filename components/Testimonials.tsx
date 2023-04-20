import Image from "next/image";
import React from "react";

type TestimonialsProps = {
  name: string;
  text: string;
  img: string;
  jobTitle: string;
};
const testimonials: TestimonialsProps[] = [
  {
    name: "Satish Patel",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: "/images/profile-1.jpg",
    jobTitle: "Founder & CEO, Huddle",
  },
  {
    name: "Bruce McKenzie",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: "/images/profile-2.jpg",
    jobTitle: "Founder & CEO, Huddle",
  },
  {
    name: "Iva Boyd",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: "/images/profile-3.jpg",
    jobTitle: "Founder & CEO, Huddle",
  },
];

const Testimonials = (props: TestimonialsProps) => {
  return (
    <section id="testimonials" className="relative bg-darkBlueMain pb-40 pt-40">
      <article className="z-50 grid grid-cols-1 gap-y-5 px-10 md:container md:mx-auto md:max-w-screen-xl md:grid-cols-3 md:gap-x-5 md:px-0">
        {testimonials.map((test) => (
          <div key={test.name} className="bg-darkBlueTest px-5 pb-5 pt-10">
            <p className="mb-5 text-xs text-white md:text-sm md:leading-loose">
              {test.text}
            </p>
            <div className="flex gap-x-2">
              <Image
                src={test.img}
                width={48}
                height={48}
                alt="testimonial-img"
                className="rounded-full"
              />
              <div>
                <span className="text-xs font-bold text-white">
                  {test.name}
                </span>
                <span className="block text-xs font-light text-white">
                  {test.jobTitle}
                </span>
              </div>
            </div>
          </div>
        ))}
      </article>
      <Image
        src="/images/bg-quotes.png"
        width={75}
        height={75}
        alt="quote-img"
        className="absolute left-8 top-32 z-0 h-auto w-12 md:left-72 md:top-32"
      />
    </section>
  );
};

export default Testimonials;
