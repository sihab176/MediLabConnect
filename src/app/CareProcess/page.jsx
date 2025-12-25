"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

const CareProcess = () => {

  useEffect(() => {
  // Left content animation
  gsap.fromTo(
    ".cp-left",
    { x: -80, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cp-left",
        start: "top 40%",
        // markers:true
      },
    }
  );

  // Steps stagger animation
  gsap.fromTo(
    ".cp-step",
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cp-left",
        start: "top 30%",
      },
    }
  );

  // Right image animation
  gsap.fromTo(
    ".cp-image",
    { x: 80, opacity: 0, scale: 0.95 },
    {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cp-image",
        start: "top 40%",
      },
    }
  );
}, []);




  return (
    
    <section className="bg-[#4bb6c6]  px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="cp-left text-white py-10">
          <p className="uppercase text-sm tracking-wide mb-2 opacity-80">
            How it works
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
            Our Simple & Effective <br /> Care Process
          </h2>

          <div className=" space-y-6">
            {/* STEP 1 */}
            <div className="cp-step flex gap-4 p-3 border-b border-white/30 hover:shadow-xl hover:shadow-white/35 hover:border hover:border-gray-300 rounded cursor-pointer">
              <div className="min-w-[40px] h-10 flex items-center justify-center rounded-full bg-white text-[#4bb6c6] font-bold">
                01
              </div>
              <div>
                <h4 className="font-semibold text-xl">Initial Consultation</h4>
                <p className="text-sm opacity-90 mt-1 text-gray-600">
                  Present legibus tempus quam. Posset vider <br /> catus in quorum gravid semper.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="cp-step flex gap-4 p-3 border-b border-white/30 hover:shadow-xl hover:shadow-white/35 hover:border hover:border-gray-300 rounded cursor-pointer hover:border-t-0">
              <div className="min-w-[40px] h-10 flex items-center justify-center rounded-full bg-white text-[#4bb6c6] font-bold">
                02
              </div>
              <div>
                <h4 className="font-semibold text-xl">Personalized Care Plan</h4>
                <p className="text-sm opacity-90 mt-1 text-gray-600 ">
                  Present legibus tempus quam. Posset vider <br /> catus in quorum gravid semper.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="cp-step flex gap-4 p-3 border-b border-white/30 hover:shadow-xl hover:shadow-white/35 hover:border hover:border-gray-300 rounded cursor-pointer hover:border-t-0">
              <div className="min-w-[40px] h-10 flex items-center justify-center rounded-full bg-white text-[#4bb6c6] font-bold">
                03
              </div>
              <div>
                <h4 className="font-semibold text-xl">Ongoing Care & Support</h4>
                <p className="text-sm opacity-90 mt-1 text-gray-600">
                  Present legibus tempus quam. Posset vider <br /> catus in quorum gravid semper.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center md:justify-end h-full w-full">
          
          {/* Clip-path Background Shape */}
          {/* w-[200%] ব্যবহার করা হয়েছে যাতে ডানে কোনো গ্যাপ না থাকে */}
          <div 
            className="absolute inset-y-0 left-0 md:left-[-10%] w-[200%] bg-[#5fc5d5] z-0"
            style={{ 
              clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" 
            }}
          ></div>

          {/* The Nurse Image */}
          <div className="cp-image relative z-5 pt-10">
            <Image
              src="/nurse.png" 
              alt="Doctor"
              width={450}
              height={550}
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareProcess;