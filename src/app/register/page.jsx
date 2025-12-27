"use client";
import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import { RegisterUser } from "../actions/auth/RegisterUser";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import SocialLogin from "@/components/socialLogin/SocialLogin";

const registerPage = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    // console.log(name, email, password);
    const res = await RegisterUser({ name, email, password, phone });
    console.log("res=========>", res);
    if (res.success) {
      // toast.success("successfully sign in");
      await signIn("credentials", {
        redirect: true,
        email,
        password,
        callbackUrl: "/",
      });
    } else if (res.status) {
      toast.error("email already used");
    }
  };

  return (
    <section className="flex justify-center items-center bg-gray-100 h-dvh">
      <div className="w-full max-w-md px-8 py-18  space-y-3  border-6 border-white  bg-white/60  rounded-[40px]  shadow-2xl  ">
        <h1 className="text-4xl font-semibold text-center text-sky-400">
          Sign up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              required
              className="w-full px-4 py-2 rounded border border-gray-400 bg-white"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              className="w-full px-4 py-2 rounded border border-gray-400 bg-white"
            />
          </div>

          <div className=" gap-4">
            <div className="flex-1">
              <label className="block text-gray-700">Mobile Number</label>
              {/* test mobile */}
              <PhoneInput
                country={"bd"} // ডিফল্ট দেশ বাংলাদেশ
                value={phone}
                onChange={setPhone}
                inputStyle={{ width: "380px" }}
                className="bg-[#caf0f8]"
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              className="w-full px-4 py-2 rounded border border-gray-400 bg-white"
            />
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            className="block w-full p-3 text-center rounded-sm bg-sky-500 btn border-none"
            fdprocessedid="p6vw3g"
          >
            Sign up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center ">
          <SocialLogin />
        </div>
        <p className="text-xs text-center mt-8 sm:px-6 dark:text-gray-600">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            href="/login"
            className="underline dark:text-blue-600"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default registerPage;
