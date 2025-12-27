"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // বাইরে ক্লিক করলে dropdown বন্ধ হবে
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log("env file",process.env.NEXTAUTH_SECRET);
  const links = (
    <>
      <li
        className={`mx-4 ${
          pathname == "/" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`mx-4 ${
          pathname == "/ai_doctor" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/ai_doctor">AI Doctor</Link>
      </li>
      <li
        className={`mx-4 ${
          pathname == "/BloodBank" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/BloodBank">Blood Bank</Link>
      </li>
      {session?.user?.role === "admin" && (
        <li
          className={`mx-4 ${
            pathname == "/Dashboard" ? "text-sky-500 font-bold border-b-2" : ""
          }`}
        >
          <Link href="/Dashboard">Dashboard</Link>
        </li>
      )}
      <li
        className={`mx-4 ${
          pathname == "/OurTeam" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/OurTeam">Our teams</Link>
      </li>

      <li
        className={`mx-4 ${
          pathname == "/Contact" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/Contact">Contact us</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar  shadow-sm bg-[#caf0f8] lg:px-6 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/*  */}
              {links}
            </ul>
          </div>
          <Link href="/">
            <div className="text-2xl font-semibold flex items-center gap-2">
              <Image
                src="/stethoscope.png"
                alt="logo"
                width={40}
                height={40}
                className="object-cover"
              />{" "}
              <h1 className="text-sky-500 mt-1">MediLab</h1>{" "}
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
            {/* toggle =================*/}
            {/* <div className="mr-8">
              <label
                htmlFor="Toggle1"
                className="inline-flex items-center space-x-4 cursor-pointer"
              >
                <span className="relative">
                  <input
                    id="Toggle1"
                    type="checkbox"
                    onChange={switchTheme}
                    checked={isDark}
                    className="hidden peer"
                  />
                  <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner peer-checked:bg-violet-600 transition-all duration-300"></div>
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 bg-white rounded-full shadow peer-checked:translate-x-4 transition-all duration-300"></div>
                </span>
              </label>
            </div> */}
          </ul>
        </div>
        <div className="navbar-end">
          {status === "authenticated" ? (
            <div className="relative" ref={dropdownRef}>
              {/* Profile Image */}
              <Image
                src={session?.user?.image || "/user.png"}
                alt="user_logo"
                width={40}
                height={40}
                className="object-cover rounded-full cursor-pointer"
                onClick={() => setOpen(!open)}
              />

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white  rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => signOut()}
                    className="w-full btn border-0 text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            // <button
            //   onClick={() => signOut()}
            //   className="btn btn-sm bg-sky-700 border-0 mx-2 text-white"
            // >
            //   Log out
            // </button>
            <Link href="/login">
              <button className="btn btn-sm bg-sky-700 border-0 text-white">
                Login
              </button>
            </Link>
          )}
          {/* image */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
