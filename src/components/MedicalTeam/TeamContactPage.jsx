"use client";
import { useState } from "react";
import { FiCheck, FiLock } from "react-icons/fi";

const TeamContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    insuranceType: "",
    message: "",
  });

  const insuranceTypes = [
    "Life Insurance",
    "Health Insurance",
    "Auto Insurance",
    "Home Insurance",
    "Business Insurance",
    "Travel Insurance",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Quote request submitted successfully!");
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
    //   <div className="w-full max-w-7xl bg-white rounded-2xl  overflow-hidden">
    //     <div className="grid md:grid-cols-2 gap-0">
    //       {/* Left Side - Content */}
    //       <div className="bg-gradient-to-br from-[#0b518a] to-[#a3d1f5] p-12 flex flex-col justify-center text-white">
    //         <div className="mb-4">
    //           <span className="inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium text-black">
    //             Get a Quote
    //           </span>
    //         </div>

    //         <h1 className="text-5xl font-bold mb-6 leading-tight">
    //           Secure Your
    //           <br />
    //           Family Future
    //           <br />
    //           With us.
    //         </h1>

    //         <p className="text-lg text-teal-50 leading-relaxed">
    //           Reiciendis voluptatibus maiores alias perferendis doloribus
    //           aseriores.
    //         </p>

    //         {/* Decorative Elements */}
    //         <div className="mt-12 space-y-4">
    //           <div className="flex items-center space-x-3">
    //             <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-blue-700">
    //               <FiCheck size={24} />
    //             </div>
    //             <span className="text-teal-50">Quick & Easy Process</span>
    //           </div>
    //           <div className="flex items-center space-x-3">
    //             <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-blue-700">
    //               <FiLock size={24} />
    //             </div>
    //             <span className="text-teal-50">100% Secure</span>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right Side - Form */}
    //       <div className="p-12">
    //         <div className="space-y-6">
    //           {/* Name Input */}
    //           <div>
    //             <input
    //               type="text"
    //               name="name"
    //               placeholder="Name"
    //               value={formData.name}
    //               onChange={handleChange}
    //               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5aa6e0] focus:border-transparent transition-all"
    //             />
    //           </div>

    //           {/* Email Input */}
    //           <div>
    //             <input
    //               type="email"
    //               name="email"
    //               placeholder="Email"
    //               value={formData.email}
    //               onChange={handleChange}
    //               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5aa6e0] focus:border-transparent transition-all"
    //             />
    //           </div>

    //           {/* Insurance Type Select */}
    //           <div className="relative">
    //             <select
    //               name="insuranceType"
    //               value={formData.insuranceType}
    //               onChange={handleChange}
    //               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5aa6e0] focus:border-transparent transition-all appearance-none cursor-pointer"
    //             >
    //               <option value="">Insurance Type</option>
    //               {insuranceTypes.map((type) => (
    //                 <option key={type} value={type}>
    //                   {type}
    //                 </option>
    //               ))}
    //             </select>
    //             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
    //               <svg
    //                 className="w-5 h-5 text-gray-400"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   d="M19 9l-7 7-7-7"
    //                 />
    //               </svg>
    //             </div>
    //           </div>

    //           {/* Message Textarea */}
    //           <div>
    //             <textarea
    //               name="message"
    //               placeholder="Message"
    //               value={formData.message}
    //               onChange={handleChange}
    //               rows="4"
    //               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5aa6e0] focus:border-transparent transition-all resize-none"
    //             ></textarea>
    //           </div>

    //           {/* Submit Button */}
    //           <button
    //             onClick={handleSubmit}
    //             className="w-full bg-gradient-to-r from-[#6cb3ee] to-[#a3d1f5] hover:from-[#439fe6]  text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
    //           >
    //             <span>Submit Now</span>
    //             <svg
    //               className="w-5 h-5"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M14 5l7 7m0 0l-7 7m7-7H3"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section>
      <div className="relative h-[420px] w-full bg-[url('/ourTeam2.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-300 mb-2">
                Why Choose Us
              </p>

              <h1 className="text-4xl md:text-5xl  text-white leading-tight">
                Why We're Better <br /> than Others
              </h1>

              <p className="mt-4 text-gray-300 max-w-lg">
                Our dedicated team of experienced doctors, healthcare
                professionals, and support staff work together to provide
                trusted medical care, seamless appointments, and reliable blood
                services.
              </p>

              <button className="mt-6 btn btn-outline  px-11 text-white hover:bg-black/30 ">
                Get Started →
              </button>
            </div>

            {/* RIGHT STATS */}
            <div className="flex items-center justify-start md:justify-end">
              <div className="grid grid-cols-3 gap-8 text-white">
                <div className="text-center">
                  <h2 className="text-4xl font-bold">95%</h2>
                  <p className="text-sm text-gray-300 mt-1">Awards Win</p>
                </div>

                <div className="text-center">
                  <h2 className="text-4xl font-bold">320+</h2>
                  <p className="text-sm text-gray-300 mt-1">
                    Insurance Policies
                  </p>
                </div>

                <div className="text-center">
                  <h2 className="text-4xl font-bold">100%</h2>
                  <p className="text-sm text-gray-300 mt-1">
                    Satisfied Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamContactPage;
