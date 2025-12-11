"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        <div className="relative w-full h-screen">
          <Image
            src="/banner-1.png"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            src="/banner-2.png"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            src="/banner-3.png"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
      </Carousel>

      {/* <div className="hero-container   h-screen overflow-hidden max-w-7xl mx-auto">
        <video
            src="/banner.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

      </div> */}
    </div>
  );
};

export default Banner;
