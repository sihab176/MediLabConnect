"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DoctorEditForm = ({ appointmentId }) => {
  // console.log("appintment id", appointmentId)
  const [formData, setFormData] = useState({
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

  // ------------------- Fetch existing appointment -------------------
  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await fetch(`/api/allDoctors/${appointmentId}`);
        const data = await res.json();
        console.log("data", data);
        if (data) {
          setFormData(data);
        }
      } catch (error) {
        toast.error("Failed to load appointment");
      }
    };

    fetchAppointment();
  }, [appointmentId]);

  // ------------------- Handle Input Change -------------------
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

  // ------------------- Handle Available Days -------------------
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

  // ------------------- Handle Update ------------------->
  const handleUpdate = async (e) => {
    e.preventDefault();

    console.log("updated data", formData);

    try {
      const res = await fetch(`/api/allDoctors/${appointmentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          updatedData: {
            ...formData,
            status: "confirmed",
            message: "Appointment updated successfully",
          },
        }),
      });

      const data = await res.json();
      // console.log("successfully update", data)

      if (data.modifiedCount > 0) {
        toast.success("Appointment updated successfully");
      } else {
        toast.error("No changes were made ❌");
      }
    } catch (error) {
      toast.error("Update failed ❌");
    }
  };

  // console.log("from data", formData)
  return (
    <div className="min-h-screen bg-white p-8 text-[12px]">
      <h2 className="text-2xl font-bold mb-6">Edit Appointment</h2>
      <form onSubmit={handleUpdate} className="space-y-6">
        {/* Doctor & Appointment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Doctor Name *
            </label>
            <input
              type="text"
              name="details.doctor_name"
              value={formData.details.doctor_name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specialization *
            </label>
            <select
              name="details.specialization"
              value={formData.details.specialization}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded"
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Appointment Date *
            </label>
            <input
              type="date"
              name="details.appointment_date"
              value={formData.details.appointment_date}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Slot *
            </label>
            <select
              name="details.appointment_time"
              value={formData.details.appointment_time}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded"
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
          <label className="block text-sm font-medium mb-2">
            Available Days
          </label>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
            {weekDays.map((day) => (
              <label
                key={day}
                className="flex items-center gap-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.details.available_days.includes(day)}
                  onChange={() => handleAvailableDaysChange(day)}
                  className="w-4 h-4"
                />
                <span>{day.slice(0, 3)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Center Name *
            </label>
            <input
              type="text"
              name="location.center_name"
              value={formData.location.center_name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone *</label>
            <input
              type="tel"
              name="location.phone"
              value={formData.location.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Address *</label>
            <input
              type="text"
              name="location.address"
              value={formData.location.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">
              Image Link *
            </label>
            <input
              type="text"
              name="location.image_link"
              value={formData.location.image_link}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded"
              required
            />
          </div>
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-sm font-medium mb-2">Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-3 border rounded"
          />
        </div>

        {/* Update Button */}
        <div className="flex justify-center ">
          <button
            type="submit"
            className="bg-sky-400 text-white px-6 py-3 w-full rounded hover:bg-sky-500"
          >
            Update Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorEditForm;
