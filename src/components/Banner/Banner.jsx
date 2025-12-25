"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  useEffect(() => {
    gsap.fromTo(
      ".btn_1",
      {
        x: -50, // left side
        opacity: 0, // invisible
      },
      {
        x: 0, // normal position
        opacity: 1, // visible
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      ".btn_2",
      {
        x: 50, // left side
        opacity: 0, // invisible
      },
      {
        x: 0, // normal position
        opacity: 1, // visible
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      }
    );
      gsap.fromTo(
    ".doctor_image",
    {
      x: 70,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.7,
      ease: "power3.out",
    }
  );
    gsap.fromTo(
      ".word",
      {
        x: -60, // left side
        opacity: 0, // invisible
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.25, // একটার পর একটা
      }
    );
  }, []);

  return (
    <div>
      <section
        className={`relative -top-3 w-full min-h-screen bg-white overflow-hidden pt-0 `}
      >
        <div
          className="absolute p-0 m-0 top-0 right-0 h-full w-[50%] bg-[#DAEFFF] -z-0 hidden lg:block"
          style={{
            // This clip-path creates a slight slant or 'cut' into the shape
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        ></div>

        {/* Main Container */}
        <div className="container mx-auto px-6 h-screen flex flex-col-reverse lg:flex-row items-center relative z-10">
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center pt-10 lg:pt-0">
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-500 uppercase tracking-widest text-xs font-semibold">
                Meet With
              </span>
              <div className="h-[2px] w-12 bg-gray-300"></div>
            </div>

            {/* Main Heading */}
            {/* <h1 className="text-6xl lg:text-7xl  leading-tight text-[#333]">
              Our Best <br />
              <span className="text-[#0089FF]">Doctors</span> <br />
              <span className="text-[#0089FF]">Online</span>
            </h1> */}
            <h1 className="text-6xl lg:text-7xl leading-tight text-[#333] overflow-hidden">
              <span className="word inline-block mr-3">Our</span>
              <span className="word inline-block mr-3">Best</span>
              <br />

              <span className="word inline-block text-[#0089FF] mr-3">
                Doctors
              </span>
              <br />

              <span className="word inline-block text-[#0089FF]">Online</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-gray-500 text-sm lg:text-base max-w-md leading-relaxed">
              He preference connection astonished on of ye. Partiality on or
              continuing in particular principles as. Do believing oh disposing
              to supported allowance we.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="btn_1 opacity-0 px-8 py-3 bg-[#0089FF] text-white font-medium rounded-md shadow-lg shadow-blue-500/30 hover:bg-[#087de4] transition-all">
                Schedule Appointment
              </button>
              <button className="btn_2 opacity-0 px-8 py-3 bg-transparent border border-gray-300 text-gray-600 font-medium rounded-md hover:border-gray-400 hover:bg-gray-50 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex items-end justify-center lg:justify-end relative">
            <div className="relative w-full h-full">
              <Image
                src="/bannerImage.png"
                alt="Doctor giving thumbs up"
                fill
                className="doctor_image object-contain object-bottom lg:object-right-bottom scale-90 lg:scale-100"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
