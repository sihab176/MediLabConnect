"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);

    try {
      const handleFunc = async () => {
        const res = await fetch("/api/message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        toast.success("Meassage sent successfully");
        console.log("data post", data);
      };
      handleFunc();
    } catch (error) {
      console.log(error);
    }

    setFormData({ name: "", email: "", message: "" });
  };
  useEffect(() => {
    gsap.fromTo(
      ".number_one",
      {
        x: 90, // left side
        opacity: 0, // invisible
      },
      {
        x: 0, // normal position
        opacity: 1, // visible
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      ".number_two",
      {
        x: 90, // left side
        opacity: 0, // invisible
      },
      {
        x: 0, // normal position
        opacity: 1, // visible
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      ".doctor_image",
      {
        x: -70,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.7,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      ".word",
      {
        y: 70, // left side
        opacity: 0, // invisible
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.25, // একটার পর একটা
      }
    );
    gsap.fromTo(
      ".location_number",
      {
        x: 90, // left side
        opacity: 0, // invisible
      },
      {
        x: 0, // normal position
        opacity: 1, // visible
        duration: 1.2,
        delay: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Doctor Image */}
      <div className="relative bg-gray-200">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Doctor Image */}
          <div className="doctor_image relative h-96 md:h-[520px]">
            <img
              src="https://i.ibb.co.com/wNB6hn4n/doctor-contact.jpg"
              alt="Doctor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20"></div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <div className="border-l-4 border-gray-800 pl-4 mb-8">
              <div className="space-y-4">
                <div>
                  <a
                    href="tel:001-234-5678"
                    className="number_one text-3xl md:text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors block"
                  >
                    001-234-5678
                  </a>
                  <a
                    href="tel:001-987-7654"
                    className="number_two text-3xl md:text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors block"
                  >
                    001-987-7654
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="word text-lg text-gray-700 font-medium">
                  121 Rock Street, 21 Avenue, New York, NY 92103-9000
                </p>
              </div>

              <div>
                <p className="word text-gray-600 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 ">24/7 service available</p>
              </div>

              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-semibold">CALL NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Info Bar */}
      <div className="bg-gradient-to-r from-[#226191] to-blue-700 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            {/* Call Us */}
            <div className=" flex items-start space-x-4">
              <div className=" flex-shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="location_number">
                <h3 className="text-xl font-bold mb-2">CALL US</h3>
                <p className="text-blue-100">1 (234) 567-891,</p>
                <p className="text-blue-100">1 (234) 987-654</p>
              </div>
            </div>

            {/* Location */}
            <div className="location_number flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">LOCATION</h3>
                <p className="text-blue-100">
                  121 Rock Street, 21 Avenue, New York, NY 92103-9000
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="location_number flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">HOURS</h3>
                <p className="text-blue-100">
                  Mon - Fri ...... 11 am - 8 pm, Sat, Sun ...... 6 am - 8 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-sm">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600">
              Have a question? Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>

          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
