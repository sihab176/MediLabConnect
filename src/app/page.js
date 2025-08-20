import Banner from "@/components/Banner/Banner";
import CardContainer from "@/components/CardContainer/CardContainer";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="max-w-[1440px] mx-auto px-3">
    <Navbar/>
    <Banner/>
    <CardContainer/>
    <Footer/>
   </div>
  );
}
