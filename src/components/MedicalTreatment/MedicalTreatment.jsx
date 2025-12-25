import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger)
const MedicalTreatment = () => {

  useEffect(() => {
  // LEFT SHAPE
  gsap.fromTo(
    ".mt-shape",
    { scale: 0.6, rotate: -15, opacity: 0 },
    {
      scale: 1,
      rotate: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mt-left",
        start: "top 80%",
      },
    }
  );

  // LEFT IMAGE
  gsap.fromTo(
    ".mt-image",
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mt-left",
        start: "top 75%",
      },
    }
  );

  // RIGHT CONTENT
  gsap.fromTo(
    ".mt-right > *",
    { x: 60, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mt-right",
        start: "top 80%",
      },
    }
  );

  // FEATURES
  gsap.fromTo(
    ".mt-feature",
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mt-feature",
        start: "top 85%",
      },
    }
  );

  // CTA BUTTON
  gsap.fromTo(
    ".mt-btn",
    { scale: 0.85, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".mt-btn",
        start: "top 90%",
      },
    }
  );
}, []);


  return (
    <section className="py-20 px-6 bg-white ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: DOCTOR IMAGES WITH CLIP-PATH BACKGROUND */}
        <div className="mt-left relative flex justify-center items-center">
          {/* Clip-path background */}
          <div
            className="mt-shape absolute z-0 w-[420px] h-[420px] bg-[#4bb6c6] opacity-90"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          />

          {/* Doctors Image */}
          <div className="mt-image relative z-4">
            <Image
              src="/tow_doc.png"
              alt="Medical Team"
              width={750}
              height={700}
              className="object-contain w-[490px] h-[490px]"
            />
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="mt-right flex flex-col space-y-4">
          <h2 className="text-4xl md:text-5xl  text-[#1a2b4b] leading-tight">
            We always Insure Best Medical Treatment for your health.
          </h2>

          <p className="text-gray-500 leading-relaxed text-sm max-w-lg">
            Helping you always is our best health to health to trust. Lorem
            ipsum dolor sit, amet consectetur elit.
          </p>

          <p className="text-gray-500 leading-relaxed max-w-lg text-sm ">
            Helping you always is our best health to health to trust. Ut sed do
            eiusmod tempor incididunt the atram cosusblua.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
            {[
              "Small Patient Support",
              "Registered Nurse",
              "Easy Online Booking",
              "Easy Space Nurse",
              "Latest Technology",
            ].map((item, index) => (
              <div key={index} className="mt-feature flex items-center gap-3 group">
                <div className="text-blue-600 text-xs">
                  <FaCheck />
                </div>
                <span className="text-[#1a2b4b] font-semibold text-sm group-hover:text-blue-600 transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button className="mt-btn bg-[#0089FF] hover:bg-[#087de4] text-white font-bold py-4 px-8 rounded-md transition-all uppercase text-sm tracking-wider">
              Get a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTreatment;
