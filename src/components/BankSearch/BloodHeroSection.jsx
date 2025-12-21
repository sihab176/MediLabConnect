import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { IoShieldHalf } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";

const BloodHeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-3 rounded-full">
            <FaRegHeart  className="w-4 h-4" />
            <span className="text-sm font-medium">Every Drop Saves Lives</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl  text-gray-900 mb-6">
            Find <span className="text-blue-600">Blood</span> When You Need It
            Most
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-600 text-lg md:text-sm max-w-3xl mx-auto mb-12">
          Connect with verified blood banks near you. Search by blood type,
          check availability in real-time, and book with confidence.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <IoShieldHalf  className="w-5 h-5 text-green-600" />
            </div>
            <span className="font-medium">Verified Banks</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <CiClock2  className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-medium">Real-time Updates</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <FaHeartPulse  className="w-5 h-5 text-red-600" />
            </div>
            <span className="font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodHeroSection;
