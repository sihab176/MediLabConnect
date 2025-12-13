"use client";
import React, { useEffect, useState } from "react";
import { FiSearch, FiMapPin, FiFilter } from "react-icons/fi";
import Cards from "../CardContainer/Cards";
import DoctorAgentCard from "./DoctorAgentCard";

const AiDoctorAgents = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [center, setCenter] = useState("");
  const [sort, setSort] = useState("");

  const fetchDoctors = async () => {
    const res = await fetch(`/api/allDoctors`, { cache: "no-store" });
    const data = await res.json();
    setAllDoctors(data);
    setFiltered(data);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    let temp = [...allDoctors];

    if (search.trim()) {
      temp = temp.filter((item) =>
        item.details.doctor_name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (specialization) {
      temp = temp.filter(
        (item) =>
          item.details.specialization.toLowerCase() ===
          specialization.toLowerCase()
      );
    }

    if (center) {
      temp = temp.filter((item) =>
        item.location.address.toLowerCase().includes(center.toLowerCase())
      );
    }

    if (sort === "az") {
      temp.sort((a, b) =>
        a.details.doctor_name.localeCompare(b.details.doctor_name)
      );
    }
    if (sort === "za") {
      temp.sort((a, b) =>
        b.details.doctor_name.localeCompare(a.details.doctor_name)
      );
    }

    setFiltered(temp);
  }, [search, specialization, center, sort, allDoctors]);

  return (
    <section className="max-w-7xl mx-auto mb-16 mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* LEFT FILTER SIDEBAR */}
      <div className="bg-white rounded-2xl shadow-xl p-6 h-max border border-gray-100 sticky top-20">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FiFilter /> Filters
        </h2>

        {/* SEARCH BOX */}
        <div className="mb-4">
          <label className="font-semibold text-gray-600">Search</label>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded mt-1">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Doctor name..."
              className="bg-transparent outline-none w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* LOCATION */}
        <div className="mb-6">
          <label className="font-semibold text-gray-600">Location</label>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded mt-1">
            <FiMapPin className="text-gray-500" />
            <input
              type="text"
              placeholder="City or center..."
              className="bg-transparent outline-none w-full"
              value={center}
              onChange={(e) => setCenter(e.target.value)}
            />
          </div>
        </div>

        {/* SPECIALIZATION */}
        <div className="mb-6">
          <p className="font-semibold text-gray-600 mb-2">Specialization</p>
          <select
            className="select select-bordered w-full rounded"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="">All Specialties</option>
            {[...new Set(allDoctors.map((d) => d.details.specialization))].map(
              (spec, i) => (
                <option key={i} value={spec}>
                  {spec}
                </option>
              )
            )}
          </select>
        </div>

        {/* SORT */}
        <div className="mb-6">
          <p className="font-semibold text-gray-600 mb-2">Sort</p>
          <select
            className="select select-bordered w-full rounded"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Default</option>
            <option value="az">Name A–Z</option>
            <option value="za">Name Z–A</option>
          </select>
        </div>

        {/* RESET BUTTON */}
        <button
          onClick={() => {
            setSearch("");
            setSpecialization("");
            setCenter("");
            setSort("");
          }}
          className="btn btn-neutral w-full rounded mt-4"
        >
          Reset Filters
        </button>
      </div>

      {/* DOCTORS LIST */}
      <div className="lg:col-span-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((data, index) => (
            <DoctorAgentCard data={data} key={index} />
          ))
        ) : (
          <p className="text-center text-lg font-semibold text-gray-500 mt-10">
            No doctor found 🥲
          </p>
        )}
      </div>
    </section>
  );
};

export default AiDoctorAgents;
