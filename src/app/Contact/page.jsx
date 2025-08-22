import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const contactSection = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <ContactUs />
      <Footer/>
    </div>
  );
};

export default contactSection;
