"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();

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
          pathname == "/Dashboard" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/Dashboard">Dashboard</Link>
      </li>
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
            <div className="text-2xl font-bold flex items-center gap-2">
              <Image
                src="/logo.png"
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
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="btn btn-sm bg-sky-700 border-0 mx-2"
            >
              Log out
            </button>
          ) : (
            <Link href="/login">
              <button className="btn btn-sm bg-sky-700 border-0">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
