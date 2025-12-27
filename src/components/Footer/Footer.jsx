"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="relative bg-[#4bb6c6]  pt-28   ">
      {/* Smooth Wave Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px]"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* BRAND */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/">
              <div className="text-2xl font-semibold flex items-center gap-2">
                <Image
                  src="/stethoscope.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />{" "}
                <h1 className="text-sky-700 mt-1">MediLab</h1>{" "}
              </div>
            </Link>
          </div>

          <p className="text-gray-600  mb-6">
            The healthcare arena there was a felt need of developing new as well
            as upgrading the existing functioning.
          </p>

          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/md.shahariyar.787622"
              target="_blank"
              className="w-9 h-9 rounded-full border flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/sihab176"
              target="_blank"
              className="w-9 h-9 rounded-full border flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shahab-bin-shariar-web/"
              target="_blank"
              className="w-9 h-9 rounded-full border flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition cursor-pointer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/md.shahariyar.787622"
              target="_blank"
              className="w-9 h-9 rounded-full border flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition cursor-pointer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* CENTER TEXT */}
        <div className="md:col-span-7">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">
            There is Only One Thing In The World I Want And That Is Hospital.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-sky-700 mb-3">Useful Link</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li
                  className={`mx-4 ${
                    pathname == "/ai_doctor"
                      ? "text-sky-500 font-bold border-b-2 "
                      : "hover:text-sky-700 hover:font-semibold"
                  }`}
                >
                  <Link href="/ai_doctor">AI Doctor</Link>
                </li>
                <li
                  className={`mx-4 ${
                    pathname == "/BloodBank"
                      ? "text-sky-500 font-bold border-b-2"
                      : "hover:text-sky-700 hover:font-semibold"
                  }`}
                >
                  <Link href="/BloodBank">Blood Bank</Link>
                </li>
                <li
                  className={`mx-4 ${
                    pathname == "/OurTeam"
                      ? "text-sky-500 font-bold border-b-2"
                      : "hover:text-sky-700 hover:font-semibold"
                  }`}
                >
                  <Link href="/OurTeam">Our teams</Link>
                </li>
                <li
                  className={`mx-4 ${
                    pathname == "/Contact"
                      ? "text-sky-500 font-bold border-b-2"
                      : "hover:text-sky-700 hover:font-semibold"
                  }`}
                >
                  <Link href="/Contact">Contact us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sky-700 mb-3">Working Time</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Mon - Fri: 9.00am - 5.00pm</li>
                <li>Saturday: 10.00am - 6.00pm</li>
                <li>Sunday Closed</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sky-700 mb-3">Our Address</h4>
              <p className="text-sm text-gray-600">
                Old Westbury 256, New York <br />
                11201, United States
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STETHOSCOPE IMAGE */}
      <div className="absolute left-1/3 -translate-x-1/2 rotate-12  bottom-14">
        <Image
          src="/footerstethoscope.png"
          alt="stethoscope"
          width={350}
          height={200}
          className="opacity-90 overflow-hidden"
        />
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-32 border-t py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>Terms and conditions | Privacy policy</p>
        <p>Copyright © 2024 PBM Infotech</p>
      </div>
    </footer>
  );
};

export default Footer;
