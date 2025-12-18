"use client";
import AppoinmentModal from "@/components/AppoinmentModal/AppoinmentModal";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useState } from "react";

const DoctorDetailsClient = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="min-h-screen lg:p-10 lg:mt-0 mt-6 mx-5 ">
        <div className=" w-full flex justify-between flex-col lg:flex-row  rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex-1 lg:mt-7 pl-4">
            <Image
              src={data?.location?.image_link || "/doctor7.png"}
              alt="Doctor Location"
              width={800}
              height={400}
              className="rounded-lg object-cover lg:h-[540px] "
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-3 flex-1">
            {/* Doctor Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Dr. {data.details.doctor_name}
              </h2>
              <p className="text-gray-600">{data.details.specialization}</p>
            </div>

            {/* Appointment Info */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Appointment Information
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-medium">Appointment ID:</span>{" "}
                  {data.appointment_id}
                </li>
                <li>
                  <span className="font-medium">Date:</span>{" "}
                  {data.details.appointment_date}
                </li>
                <li>
                  <span className="font-medium">Time:</span>{" "}
                  {data.details.appointment_time}
                </li>
              </ul>
            </div>

            {/* Available Days */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Available Days
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.details.available_days.map((day, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Clinic Location
              </h3>
              <p className="text-gray-600">
                <span className="font-medium">Center:</span>{" "}
                {data.location.center_name}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Address:</span>{" "}
                {data.location.address}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span>{" "}
                {data.location.phone}
              </p>
              <button onClick={()=>setIsOpen(true)} className="btn bg-[#ade8f4] hover:bg-[#74c6d6] border-none w-full mt-3 ">
                Appointment now
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <AppoinmentModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default DoctorDetailsClient;
