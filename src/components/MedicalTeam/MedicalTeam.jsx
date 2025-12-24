"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const doctors=[
  {
    image:"/med-1.png",
    name:"Jennife"

  },
  {
    image:"/med-2.png",
    name:"Richard"
  },
  {
    image:"/med-3.jpeg",
    name:"William"
  },
  {
    image:"/med-4.png",
    name:"William"
  },
  {
    image:"/med-5.png",
    name:"Robert"
  },
  {
    image:"/med-6.jpeg",
    name:"JenMichael"
  },
]

const MedicalTeam = () => {
  useEffect(() => {
    gsap.fromTo(
      ".team-header",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-header",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".team-left .team-item",
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-left",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".team-center",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-center",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".team-right .team-item",
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-right",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="team-header text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our team of doctors and therapists
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of healthcare professionals.
          </p>
        </div>

        <div className="flex justify-between md:flex-row flex-col items-center lg:mx-20">
          {/* LEFT */}
          <div className="team-left space-y-7">
            {doctors.slice(0,3).map((doctor,index) => (
              <section key={index} className="team-item flex items-center gap-2">
                <Image
                  src={doctor.image}
                  alt="doctor"
                  width={90}
                  height={90}
                  className="rounded-full ring-2 ring-sky-600"
                />
                <div>
                  <h3 className="text-2xl ">Dr. {doctor.name}</h3>
                  <p>Oncology</p>
                </div>
              </section>
            ))}
          </div>

          {/* CENTER */}
          <div className="team-center my-10 md:my-0">
            <Image
              src="/main-rem.png"
              alt="doctor"
              width={400}
              height={400}
              className="rounded-full ring-2 ring-sky-600"
            />
          </div>

          {/* RIGHT */}
          <div className="team-right space-y-7">
            {doctors.slice(3,6).map((doctor,index) => (
              <section key={index} className="team-item flex items-center gap-2">
                <Image
                  src={doctor.image}
                  alt="doctor"
                  width={90}
                  height={90}
                  className="rounded-full ring-2 ring-sky-600"
                />
                <div>
                  <h3 className="text-2xl ">Dr. Mickel Bars</h3>
                  <p>Oncology</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTeam;

