"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import BloodBookingModal from "./BloodBookingModal";
import { useState } from "react";

export default function BloodBankCard({ searchResults }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);

  const handleBookNow = (bank) => {
    setSelectedBank(bank);
    setIsModalOpen(true);
  };

  return (
    <>
      {searchResults?.banks?.map((bank, index) => (
        <div
          key={index}
          className="max-w-full rounded-2xl border border-red-200 hover:bg-red-50  p-6 shadow-sm my-4"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              {bank.name}
              {bank.verified == true && (
                <MdVerified className="text-green-500" />
              )}
            </h2>

            <span>
             
              {searchResults.availability == "Available" ? (
                <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
                  ⚠{" "} {searchResults.availability}
                </div>
              ) : (
                <div className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                  ⚠{" "} {searchResults.availability}
                </div>
              )}
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
              <div className="flex flex-wrap gap-2">
                {Object.entries(bank.bloodTypes).map(([type, count]) => (
                  <span
                    key={type}
                    className="rounded-full border border-green-300 bg-green-50 px-4 py-1 text-sm font-semibold text-green-700"
                  >
                    {type} ({count})
                  </span>
                ))}
              </div>
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
              {bank.hours}
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => handleBookNow(bank)}
            className="mt-5 w-full rounded-xl bg-red-400 py-3 text-white font-semibold transition hover:bg-red-500"
          >
            Book Now
          </button>
        </div>
      ))}
      <BloodBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bank={selectedBank}
        searchResults={searchResults}
      />
    </>
  );
}
