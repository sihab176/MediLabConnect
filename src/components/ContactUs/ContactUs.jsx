"use client";
import React from "react";
import Image from "next/image";

const ContactUs = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="hidden lg:block">
            <Image
              src="/contactus.png"
              alt="Contact Us"
              className="rounded-lg "
              width={500}
              height={500}
            />
          </div>

          {/* Form Section */}
          <div className=" rounded-xl  p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we will get back to you as soon as
              possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
