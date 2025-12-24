"use client"
import BankSearch from "@/components/BankSearch/BankSearch";
import BloodHeroSection from "@/components/BankSearch/BloodHeroSection";
import HowItWorks from "@/components/BankSearch/HowItWorks";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const page = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-[50]">
        <Navbar />
      </div>
      <div id="smooth-wrapper" className="mt-[70px]">
        <div id="smooth-content">
          <BloodHeroSection />
          <BankSearch />
          <HowItWorks />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
