"use client";
import { useEffect, useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import BloodBankCard from "./BloodBankCard";
import { SlLocationPin } from "react-icons/sl";




const BankSearch = () => {
  const [bloodGroup, setBloodGroup] = useState("AB+");
  const [location, setLocation] = useState("Philadelphia");
  const [availability, setAvailability] = useState("Urgent Need");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const locations = [
    "location",
    "Rangpur",
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Sylhet",
    "Bogura",
    "Mymensingh",
    "Cumilla",
    "Khulna",
  ];
  const availabilityOptions = ["Urgent Need", "Available"];

  const handleQuickSelect = (type) => {
    setBloodGroup(type);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/search-blood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bloodGroup,
          location,
          availability,
        }),
      });

      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };




  // console.log("search result", searchResults);

  return (
    <div className=" bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-dashed border-gray-200">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Search Blood Availability
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Find the blood type you need at verified blood banks
            </p>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Blood Group Dropdown */}
            <div className="flex flex-col">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <span className="text-red-500">🩸</span>
                Blood Group
              </label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-[#4161a3] focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer"
              >
                {bloodTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Dropdown */}
            <div className="flex flex-col">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <span className="text-blue-500"><SlLocationPin size={20}/></span>
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-[#4161a3] focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Availability Dropdown */}
            <div className="flex flex-col">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <span className="text-yellow-500">⚠️</span>
                Availability
              </label>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-[#4161a3] focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer"
              >
                {availabilityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option === "Urgent Need" && "🔴 "}
                    {option === "Available" && "🟢 "}
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                disabled={loading}
                className="w-full px-6 py-3 bg-[#4161a3] hover:bg-[#334d82] text-white font-bold rounded  focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
          </div>

          {/* Quick Select Blood Type */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 mb-3">
              Quick select blood type:
            </p>
            <div className="flex flex-wrap gap-3">
              {bloodTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleQuickSelect(type)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    bloodGroup === type
                      ? "bg-red-600 text-white border-2 border-red-600"
                      : "bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/*================================ Search Results =============================*/}
          <div>
            {searchResults?.banks?.length === 0 ? (
              <p className="text-center text-2xl font-semibold text-gray-500 mt-8 pt-6 border-t border-gray-200">
                No results found
              </p>
            ) : (
              <div>
                {" "}
                {searchResults && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <BloodBankCard searchResults={searchResults} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankSearch;
