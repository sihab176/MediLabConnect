"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";


const CountUpSection = () => {
  return (
    <div>
      <section className=" py-22 px-6 md:px-12 bg-[#489fb5]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div>
            <p className="text-sm text-gray-50 uppercase tracking-wide">
              The Finest Design Agency
            </p>
            <h2 className="text-3xl md:text-6xl  text-gray-900 mt-2 ">
              You convey the idea, and we deliver a refined interface.
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We’re one of the finest web design agencies that team up with
              startups, agencies, and founders to design digital products and
              websites.
            </p>
            <button className="mt-6 px-8 py-5 btn btn-outline hover:bg-black/20  text-white rounded font-medium  transition">
              More Details
            </button>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-200 shadow-md rounded-xl p-6 text-center">
              <div className="flex justify-center">
                <Image src="/healthcare.png" alt="logos" width={40} height={40} />
              </div>
              {/* <Users className="w-10 h-10 mx-auto text-blue-600 mb-3" /> */}
              <h1 className="text-3xl font-bold ">
                <CountUp
                  end={467}
                  enableScrollSpy={true}
                  scrollSpyDelay={10}
                  duration={5}
                ></CountUp>
                +
              </h1>
              <p className="text-gray-500">Happy Customers</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-200 shadow-md rounded-xl p-6 text-center">
              <div className="flex justify-center">
                <Image src="/drugs.png" alt="logos" width={40} height={40} />
              </div>
              <h1 className="text-3xl font-bold ">
                <CountUp
                  end={1267}
                  enableScrollSpy={true}
                  scrollSpyDelay={10}
                  duration={3}
                ></CountUp>
                k
              </h1>
              <p className="text-gray-500">Free medicine</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-200 shadow-md rounded-xl p-6 text-center">
              <div className="flex justify-center">
                <Image src="/blood-test.png" alt="logos" width={40} height={40} />
              </div>
              <h1 className="text-3xl font-bold ">
                <CountUp
                  end={713}
                  enableScrollSpy={true}
                  scrollSpyDelay={10}
                  duration={5}
                ></CountUp>
                +
              </h1>
              <p className="text-gray-500">Donate blood</p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-200 shadow-md rounded-xl p-6 text-center">
              <div className="flex justify-center">
                <Image src="/defribillator.png" alt="logos" width={40} height={40} />
              </div>
              <h1 className="text-3xl font-bold ">
                <CountUp
                  end={432}
                  enableScrollSpy={true}
                  scrollSpyDelay={10}
                  duration={5}
                ></CountUp>
                k
              </h1>
              <p className="text-gray-500">Telemedicine service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountUpSection;
