import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Raleway, Open_Sans } from "next/font/google";
import Features from "@/components/Features";
import CTAsection from "@/components/CTAsection";
import Testimonials from "@/components/Testimonials";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={openSans.className}>
      <Navbar />
      <HeroSection />
      <Features />
      <CTAsection />
      <Testimonials name="" text="" img="" jobTitle=""/>
      <FormSection />
      <Footer />
    </main>
  );
}
