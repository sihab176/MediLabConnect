import AiDoctorAgents from "@/components/AiDoctorAgents/AiDoctorAgents";
import Faqsection from "@/components/AiDoctorAgents/Faqsection";
import Footer from "@/components/Footer/Footer";
import HistoryList from "@/components/historyList/HistoryList";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const AIdoctor = () => {
  return (
    <section>
      <div className="sticky top-0 left-0 w-full z-[50]">
        <Navbar />
      </div>
      <HistoryList />
      <AiDoctorAgents />
      <Faqsection />
      <Footer/>
    </section>
  );
};

export default AIdoctor;
