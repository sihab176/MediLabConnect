"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const DoctorAddForm = () => {
  const [formData, setFormData] = useState({
    appointment_id: "",
    status: "pending",
    message: "",
    details: {
      doctor_name: "",
      specialization: "",
      appointment_date: "",
      appointment_time: "",
      available_days: [],
    },
    location: {
      center_name: "",
      address: "",
      agent_promt: "",
      phone: "",
      image_link: "",
    },
    instructions: "",
  });

  const specializations = [
    "General Physician",
    "Pediatrician",
    "Dermatologist",
    "Psychologist",
    "Nutritionist",
    "Cardiologist",
    "ENT Specialist",
    "Orthopedic",
    "Gynecologist",
    "Dentist",
  ];

  const timeSlots = [
    "09:00 AM - 09:30 AM",
    "09:30 AM - 10:00 AM",
    "10:00 AM - 10:30 AM",
    "10:30 AM - 11:00 AM",
    "11:00 AM - 11:30 AM",
    "02:00 PM - 02:30 PM",
    "02:30 PM - 03:00 PM",
    "03:00 PM - 03:30 PM",
    "03:30 PM - 04:00 PM",
  ];

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAvailableDaysChange = (day) => {
    setFormData((prev) => ({
      ...prev,
      details: {
        ...prev.details,
        available_days: prev.details.available_days.includes(day)
          ? prev.details.available_days.filter((d) => d !== day)
          : [...prev.details.available_days, day],
      },
    }));
  };

  const generateAppointmentId = () => {
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
    const timeStr = now.getTime().toString().slice(-4);
    return `APP-${dateStr}-${timeStr}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentId = generateAppointmentId();
    const finalData = {
      ...formData,
      appointment_id: appointmentId,
      status: "confirmed",
      message: "Your appointment has been successfully booked.",
    };

    const res = await fetch(`/api/allDoctors`, {
      method: "POST",
      body: JSON.stringify(finalData),
    });
    const response = await res.json();
    // console.log("response", response);
    toast.success("successfully added ");
    if (response.insertedId) {
      setFormData({
        appointment_id: "",
        status: "pending",
        message: "",
        details: {
          doctor_name: "",
          specialization: "",
          appointment_date: "",
          appointment_time: "",
          available_days: [],
        },
        location: {
          center_name: "",
          address: "",
          agent_promt: "",
          phone: "",
          image_link: "",
        },
        instructions: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[12px]">
      <div className=" ">
        <div className=" overflow-hidden">
          {/* header */}

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Doctor & Appointment Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                Appointment Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Doctor Name * */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Doctor Name *
                  </label>
                  <input
                    type="text"
                    name="details.doctor_name"
                    value={formData.details.doctor_name}
                    onChange={handleInputChange}
                    placeholder="Dr. Emily Chen"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                {/*  Specialization * */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialization *
                  </label>
                  <select
                    name="details.specialization"
                    value={formData.details.specialization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Specialization</option>
                    {specializations.map((spec) => (
                      <option key={spec} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Appointment Date * */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Date *
                  </label>
                  <input
                    type="date"
                    name="details.appointment_date"
                    // value={formData.details.appointment_date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                {/* Time Slot * */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Slot *
                  </label>
                  <select
                    name="details.appointment_time"
                    value={formData.details.appointment_time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Time Slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Available Days */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Available Days
                </label>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                  {weekDays.map((day) => (
                    <label
                      key={day}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.details.available_days.includes(day)}
                        onChange={() => handleAvailableDaysChange(day)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        {day.slice(0, 3)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                Location Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Center Name * */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Center Name *
                  </label>
                  <input
                    type="text"
                    name="location.center_name"
                    value={formData.location.center_name}
                    onChange={handleInputChange}
                    placeholder="Main Diagnostic Center"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                {/* Phone Number * */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="location.phone"
                    value={formData.location.phone}
                    onChange={handleInputChange}
                    placeholder="+1-555-HELP"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                {/* Address * */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="location.address"
                    value={formData.location.address}
                    onChange={handleInputChange}
                    placeholder="456 Healthcare Ave, City, State, 12345"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                {/*  Image Link */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image Link
                  </label>
                  <input
                    type="url"
                    name="location.image_link"
                    value={formData.location.image_link}
                    onChange={handleInputChange}
                    placeholder="https://image.example.png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Agent Promt */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Agent Promt
                  </label>
                  <input
                    type="text"
                    name="location.agent_promt"
                    value={formData.location.agent_promt}
                    onChange={handleInputChange}
                    placeholder="Write a promt for agent"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Special Instructions
              </label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleInputChange}
                placeholder="Please arrive 15 minutes prior to your appointment. Bring your ID and any previous medical reports."
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorAddForm;
