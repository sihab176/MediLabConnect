import React from "react";

const TeamHeroSection = () => {
  return (
    <section>
      <div className="relative h-[350px] w-full bg-[url('/ourTeamImage.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full  pt-20">
          <h1 className=" text-6xl text-center  text-white  ">
            OUR TEAM
          </h1>
          <p className="mt-4 text-sm text-center text-gray-400 max-w-2xl mx-auto">
            Our dedicated team of experienced doctors, healthcare professionals,
            and support staff work together to provide trusted medical care,
            seamless appointments, and reliable blood services for every
            patient.
          </p>
          <div className="flex justify-center mt-6">
            <button className="btn btn-outline  px-11 text-white hover:bg-black/30 ">HOME </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHeroSection;
