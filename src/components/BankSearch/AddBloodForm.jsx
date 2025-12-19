"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddBloodForm() {
  const [formData, setFormData] = useState({
    bloodBankName: "",
    location: "",
    address: "",
    phone: "",
    email: "",
    openingHours: "",
    closingHours: "",
    bloodTypes: {
      "A+": "",
      "A-": "",
      "B+": "",
      "B-": "",
      "AB+": "",
      "AB-": "",
      "O+": "",
      "O-": "",
    },
    urgent: false,
    verified: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBloodTypeChange = (bloodType, value) => {
    setFormData((prev) => ({
      ...prev,
      bloodTypes: {
        ...prev.bloodTypes,
        [bloodType]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    console.log("formData",formData)

    try {
      const response = await fetch("/api/add-blood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      toast.success("successfully added the blood")

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Blood bank data added successfully!",
        });
        // Reset form
        setFormData({
          bloodBankName: "",
          location: "",
          address: "",
          phone: "",
          email: "",
          openingHours: "",
          closingHours: "",
          bloodTypes: {
            "A+": "",
            "A-": "",
            "B+": "",
            "B-": "",
            "AB+": "",
            "AB-": "",
            "O+": "",
            "O-": "",
          },
          urgent: false,
          verified: false,
        });
      } else {
        setMessage({
          type: "error",
          text: data.error || "Failed to add blood bank data",
        });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50  px-4 sm:px-6 lg:px-8 text-[12px]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Add Blood Bank Information
            </h1>
            <p className="text-gray-600 text-base">
              Help save lives by adding blood availability data
            </p>
          </div>

          {/* Success/Error Message */}
          {message.text && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
            >
              <div className="flex items-center gap-2">
                {message.type === "success" ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span className="font-medium">{message.text}</span>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Blood Bank Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
                Blood Bank Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Blood Bank Name *
                  </label>
                  <input
                    type="text"
                    name="bloodBankName"
                    value={formData.bloodBankName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                    placeholder="Regional Medical Center"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location/City *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                    placeholder="Brooklyn, New York"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                  placeholder="1800 Lombard St, Philadelphia, PA 19146"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                    placeholder="(718) 555-0202"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                    placeholder="contact@hospital.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Opening Hours *
                  </label>
                  <input
                    type="time"
                    name="openingHours"
                    value={formData.openingHours}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Closing Hours *
                  </label>
                  <input
                    type="time"
                    name="closingHours"
                    value={formData.closingHours}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Blood Type Availability */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
                Blood Type Availability (Units)
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.keys(formData.bloodTypes).map((bloodType) => (
                  <div key={bloodType}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {bloodType}
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.bloodTypes[bloodType]}
                      onChange={(e) =>
                        handleBloodTypeChange(bloodType, e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="urgent"
                  name="urgent"
                  checked={formData.urgent}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label
                  htmlFor="urgent"
                  className="text-sm font-medium text-gray-700"
                >
                  Mark as urgent (critically low stock)
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="verified"
                  name="verified"
                  checked={formData.verified}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label
                  htmlFor="verified"
                  className="text-sm font-medium text-gray-700"
                >
                  Verified blood bank
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Submit Blood Bank Data
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
