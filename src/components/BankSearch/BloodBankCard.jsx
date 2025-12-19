"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function BloodBankCard({ searchResults }) {
  console.log("this is search result", searchResults);
  return (
    <>
      {searchResults.banks.map((bank, index) => (
        <div key={index} className="max-w-full rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm my-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              Regional Medical Center
              <MdVerified className="text-green-500" />
            </h2>

            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
              ⚠ {searchResults.availability}
            </span>
          </div>

          {/* Location */}
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
            <FaMapMarkerAlt />
            {bank.address}
          </div>

          {/* Blood Types */}
          <div className="mt-4">
            <p className="mb-2 text-sm font-medium text-gray-700">
              Available Blood Types
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
               {searchResults.bloodGroup}
              </span>
              {/* <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                AB+ (12)
              </span>
              <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                O- (2)
              </span> */}
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              (718) 555-0202
            </div>

            <div className="flex items-center gap-2">
              <FaClock />
              8AM - 10PM
            </div>
          </div>

          {/* Button */}
          <button className="mt-5 w-full rounded-xl bg-red-400 py-3 text-white font-semibold transition hover:bg-red-500">
            Book Now
          </button>
        </div>
      ))}
    </>
  );
}
