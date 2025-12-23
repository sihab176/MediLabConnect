"use client";
import Footer from "@/components/Footer/Footer";
import MedicalTeam from "@/components/MedicalTeam/MedicalTeam";
import Navbar from "@/components/Navbar/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import React from "react";
import {
  FaAward,
  FaCheckCircle,
  FaTint,
  FaBuilding,
  FaFlask,
  FaClock,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const OurTeamPage = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  const certifications = [
    {
      icon: FaAward, // Replaced Award
      title: "Government Approved Facility",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaCheckCircle, // Replaced CheckCircle
      title: "Board Certified Doctors",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
    {
      icon: FaTint, // Replaced Droplet
      title: "Safe Blood Handling Protocols",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaBuilding, // Replaced Building2
      title: "Hospital & Lab Partnerships",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaFlask, // Replaced FlaskConical
      title: "Accredited Laboratories",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
    {
      icon: FaClock, // Replaced Clock
      title: "24/7 Medical Support",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-[50]">
        <Navbar />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content" className="pt-[70px]">
          <MedicalTeam />
          {/*  */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Certifications & Trust Indicators
                </h2>
                <p className="text-gray-600 text-lg">
                  Recognized and accredited for meeting the highest healthcare
                  standards.
                </p>
              </div>

              {/* Certification Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`${cert.bgColor} p-3 rounded-lg`}>
                          {/* react-icons accept className for sizing and coloring */}
                          <IconComponent className={`w-6 h-6 ${cert.color}`} />
                        </div>
                        <h3 className="text-gray-900 font-semibold text-base">
                          {cert.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;
