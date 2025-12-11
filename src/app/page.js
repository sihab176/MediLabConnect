import Banner from "@/components/Banner/Banner";
import CardContainer from "@/components/CardContainer/CardContainer";
import ContactUs from "@/components/ContactUs/ContactUs";
import CountUpSection from "@/components/CountUP/CountUpSection";
import Footer from "@/components/Footer/Footer";
import MedicalTeam from "@/components/MedicalTeam/MedicalTeam";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" ">
    <div className="sticky top-0 z-10">
      <Navbar/>
    </div>
    <Banner/>
    <CardContainer/>
    <CountUpSection/>
    <MedicalTeam/>
    <ContactUs/>
    <Footer/>
   </div>
  );
}
