"use client";
import React, { useState } from "react";
import SuggestDoctorCard from "./SuggestDoctrorCard/SuggestDoctorCard";

const Modal = ({ open, setOpen }) => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [suggestDoctor, setSuggestDoctor] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState({});

  //TODO : this is  normal chat bot --------->
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const r = await fetch("/api/generate", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ note }),
  //   });
  //   const data = await r.json();
  //   setRes(data.text || data.error || "No response");
  //   setOpen(false);
  // };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const r = await fetch("/api/suggest-doctors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    });
    const data = await r.json();
    setSuggestDoctor(data);
    setLoading(false);
  };
  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition duration-200">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)} // set false → close modal
              className="absolute top-2 right-2 text-xl"
            >
              ✕
            </button>

            {/* Modal Content */}
            {suggestDoctor.length > 0 ? (
              // suggest doctors card
              <div className="grid grid-cols-2 gap-2 ">
                {suggestDoctor.map((doctor, index) => (
                  <div key={doctor.id}>
                    <SuggestDoctorCard
                      doctor={doctor}
                      index={index}
                      setSelectedDoctor={() => setSelectedDoctor(doctor)}
                      selectedDoctor={selectedDoctor}
                    />
                  </div>
                ))}
              </div>
            ) : (
              // write to search doctor
              <div>
                <h3 className="font-bold text-lg">Add Basic Details</h3>
                <p className="py-4 text-gray-500">
                  Add Symptoms or Any Other Details
                </p>
                <textarea
                  onChange={(e) => setNote(e.target.value)}
                  name="problem"
                  placeholder="Add Details Here..."
                  className="h-[160px] w-full rounded p-2  border border-gray-500 "
                ></textarea>
              </div>
            )}
            <div className="flex justify-end gap-10">
              {!suggestDoctor ? (
                <button
                  onClick={handleSubmit}
                  disabled={!note}
                  className="btn bg-black/80 text-white px-5"
                >
                  Next{" "}
                  {loading && (
                    <span className="loading loading-spinner text-blue-500"></span>
                  )}
                </button>
              ) : (
                <button
                  disabled={!selectedDoctor || loading}
                  className="btn bg-black/80 text-white px-5"
                >
                  Consultations{" "}
                  {loading && (
                    <span className="loading loading-spinner text-blue-500"></span>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
