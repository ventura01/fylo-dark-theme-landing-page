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
    <section id="testimonials" className="bg-darkBlueMain pt-40 pb-40 relative">
      <article className="grid grid-cols-1 z-50 space-x-5 md:grid-cols-3 max-w-screen-xl container mx-auto">
        {testimonials.map((test) => (
          <div key={test.name} className="bg-darkBlueTest pb-5 pt-10 px-5">
            <p className="text-white text-sm leading-loose mb-5">{test.text}</p>
            <div className="flex gap-x-2">
              <Image
                src={test.img}
                width={48}
                height={48}
                alt="testimonial-img"
                className="rounded-full"
              />
              <div>
                <span className="text-white font-bold text-xs">
                  {test.name}
                </span>
                <span className="text-white text-xs font-light block">
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
        className="absolute w-12 h-auto top-32 z-0 left-72"
      />
    </section>
  );
};

export default Testimonials;
