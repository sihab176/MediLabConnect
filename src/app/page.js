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

export default function Home() {
  return (
   <div className=" ">
    <div className="sticky top-0 z-10">
      <Navbar/>
    </div>
    <Banner/>
    <HealthSolutions/>
    <CountUpSection/>
    <MedicalTeam/>
    <ScrollingText/>
    <CareProcess/>
    <MedicalTreatment/>
    {/* <ContactUs/> */}
    <Footer/>
   </div>
  );
}
