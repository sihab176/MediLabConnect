"use client"
import Banner from "@/components/Banner/Banner";
import CardContainer from "@/components/CardContainer/CardContainer";
import ContactUs from "@/components/ContactUs/ContactUs";
import CountUpSection from "@/components/CountUP/CountUpSection";
import Footer from "@/components/Footer/Footer";
import MedicalTeam from "@/components/MedicalTeam/MedicalTeam";
import Navbar from "@/components/Navbar/Navbar";
import ScrollingText from "./ScrollingText/page";
import CareProcess from "./CareProcess/page";
import HealthSolutions from "@/components/HealthSolutions/HealthSolutions";
import MedicalTreatment from "@/components/MedicalTreatment/MedicalTreatment";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger , ScrollSmoother);

export default function Home() {

  useGSAP(()=>{
    ScrollSmoother.create({
      smooth:3,
      effects:true
    })
  })

  return (
    <>
      {/* ✅ Navbar OUTSIDE smoother */}
      <div className="fixed top-0 left-0 w-full z-[999]">
        <Navbar />
      </div>

      {/* GSAP Smooth Scroll */}
      <div id="smooth-wrapper">
        <div id="smooth-content" className="pt-[80px] ">
          <Banner />
          <HealthSolutions />
          <CountUpSection />
          <MedicalTeam />
          <ScrollingText />
          <CareProcess />
          <MedicalTreatment />
          <Footer />
        </div>
      </div>
    </>
  );
}
