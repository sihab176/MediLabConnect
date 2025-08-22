import Footer from "@/components/Footer/Footer";
import MedicalTeam from "@/components/MedicalTeam/MedicalTeam";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const OurTeamPage = () => {
  return (
    <div>
        <div className="sticky top-0 z-10">
          <Navbar/>
        </div>
      <MedicalTeam />
      <Footer/>
    </div>
  );
};

export default OurTeamPage;
