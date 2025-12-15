"use client"
import Footer from "@/components/Footer/Footer";
import MedicalTeam from "@/components/MedicalTeam/MedicalTeam";
import Navbar from "@/components/Navbar/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
const OurTeamPage = () => {
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
      <div id="smooth-wrapper">
        <div id="smooth-content" className="pt-[70px]">
          <MedicalTeam />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;
