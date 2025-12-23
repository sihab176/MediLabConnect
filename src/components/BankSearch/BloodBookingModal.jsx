"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdVerified, MdClose } from "react-icons/md";
import { FaDownload, FaHome } from "react-icons/fa";

// Booking Modal Component
const BloodBookingModal = ({ isOpen, onClose, bank, searchResults }) => {
  // console.log("bank of modal ",bank)
  const [step, setStep] = useState(1);

  const [bookingData, setBookingData] = useState({
    bloodType: "",
    units: 1,
    status: "pending",
    patientName: "",
    patientId: "",
    hospitalName: "",
    bankId: bank?.id || "",
    bankName: bank?.name || "Regional Medical Center",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setStep(1);
    setBookingData({
      bloodType: "",
      units: 1,
      status: "pending",
      patientName: "",
      patientId: "",
      hospitalName: "",
      bankId: bank?.id || "",
      bankName: bank?.name || "Regional Medical Center",
    });
  }, [bank]);

  if (!isOpen) return null;

  // handle maxUnit find------->
  const maxUnits = bookingData.bloodType
    ? bank?.bloodTypes[bookingData.bloodType] || 0
    : 0;

  const handleBloodSelect = (type) => {
    // console.log("select blood", type);
    setBookingData({ ...bookingData, bloodType: type, units: 1 });
  };

  //  handle unint change--------->
  const handleUnitChange = (increment) => {
    // console.log("before ", increment);
    const newUnits = bookingData.units + increment;
    // console.log("afeer ", newUnits);
    if (newUnits >= 1 && newUnits <= maxUnits) {
      setBookingData({ ...bookingData, units: newUnits });
    }
  };

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (step === 1 && !bookingData.bloodType) {
      setError("Please select a blood group");
      return;
    }
    if (step === 2) {
      if (
        !bookingData.patientName ||
        !bookingData.patientId ||
        !bookingData.hospitalName
      ) {
        setError("Please fill all patient information");
        return;
      }
    }
    setError("");
    setStep(step + 1);
  };

  const handleBack = () => {
    setError("");
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    console.log("bookingData-->", bookingData);

    try {
      const response = await fetch("/api/book-blood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Booking successful!");
        // onClose();
        setStep(4);
        // Reset form
        // setStep(1);
        // setBookingData({
        //   bloodType: "",
        //   units: 1,
        //   patientName: "",
        //   patientId: "",
        //   hospitalName: "",
        //   bankId: bank?.id || "",
        //   bankName: bank?.name || "Regional Medical Center",
        // });
      } else {
        setError(data.message || "Booking failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Download receipt
  const handleDownloadReceipt = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-50">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <MdClose size={24} />
        </button>

        {/* Header */}
        <h2 className="mb-1 text-xl font-bold text-gray-800">
          Book Blood Units
        </h2>
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
          <FaMapMarkerAlt size={14} />
          Hope Blood Center
        </div>

        {/* Progress Steps */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`flex h-10 w-10 p-1 items-center justify-center rounded-full ${
                step >= 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step > 1 ? "✓" : "💉"}
            </div>
            <div className="ml-2">
              <p className="text-[9px] text-gray-500">Select Blood</p>
            </div>
          </div>

          <div
            className={`h-0.5 w-16 ${
              step >= 2 ? "bg-blue-500" : "bg-gray-200"
            }`}
          ></div>

          <div className="flex items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                step >= 2
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step > 2 ? "✓" : "👤"}
            </div>
            <div className="ml-2">
              <p className="text-[9px] text-gray-500">Patient Info</p>
            </div>
          </div>

          <div
            className={`h-0.5 w-16 ${
              step >= 3 ? "bg-blue-500" : "bg-gray-200"
            }`}
          ></div>

          <div className="flex items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                step >= 3
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step > 2 ? "✓" : "📋"}
            </div>
            <div className="ml-2">
              <p className="text-[9px] text-gray-500">Confirm</p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}
        {/*//TODO ---------------- STEP 4 ---------------- */}
        {step === 4 && (
          <div className="text-center print:p-0">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
              ✓
            </div>

            <h2 className=" font-bold text-gray-800">Booking Confirmed!</h2>
            <p className="mb-6 text-[11px] text-gray-500">
              Your blood booking has been successfully processed
            </p>

            <div className="mb-6 rounded-lg bg-gray-50 p-4 text-left space-y-2  text-[13px]">
              <p>
                <span className="text-gray-500">Patient ID:</span>{" "}
                <span className="font-semibold text-blue-600">
                  {bookingData.patientId}
                </span>
              </p>
              <p>
                <span className="text-gray-500">Blood Bank:</span>{" "}
                {bookingData.bankName}
              </p>
              <p>
                <span className="text-gray-500">Blood Group:</span>{" "}
                <span className="font-semibold text-red-500">
                  {bookingData.bloodType}
                </span>
              </p>
              <p>
                <span className="text-gray-500">Units:</span>{" "}
                {bookingData.units}
              </p>
              <p>
                <span className="text-gray-500">Patient:</span>{" "}
                {bookingData.patientName}
              </p>
            </div>

            <div className="mb-4 rounded-lg bg-blue-50 p-3 text-[11px] text-blue-700">
              Please visit the blood bank within 24 hours with your Booking ID
              and valid ID proof.
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleDownloadReceipt}
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-blue-500 py-3 font-semibold text-blue-600 hover:bg-blue-50"
              >
                <FaDownload /> Download Receipt
              </button>

              <button
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 py-3 font-semibold text-white hover:bg-blue-600"
              >
                <FaHome /> Back Home
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Select Blood */}
        {step === 1 && (
          <div>
            <h3 className="mb-4 font-semibold text-gray-700">
              Select Blood Group
            </h3>
            <div className="mb-6 grid grid-cols-3 gap-3">
              {Object.entries(bank?.bloodTypes || {}).map(([type, count]) => (
                <button
                  key={type}
                  onClick={() => handleBloodSelect(type)}
                  className={`rounded-xl border-2 p-2 text-center transition ${
                    bookingData.bloodType === type
                      ? "border-red-400 bg-red-50"
                      : "border-gray-200 hover:border-red-200"
                  }`}
                >
                  <p className="text-lg font-bold text-red-500">{type}</p>
                  <p className="text-xs text-gray-500">{count} units</p>
                </button>
              ))}
            </div>

            <h3 className="mb-2 font-semibold text-gray-700">
              Number of Units
            </h3>
            <div className="mb-4 flex items-center gap-4">
              <button
                onClick={() => handleUnitChange(-1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                −
              </button>
              <span className="text-3xl font-bold">{bookingData.units}</span>
              <button
                onClick={() => handleUnitChange(1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                +
              </button>
            </div>
            <p className="mb-6 text-sm text-gray-500">
              Maximum {maxUnits} units available
            </p>

            <button
              onClick={handleContinue}
              className="w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Patient Info */}
        {step === 2 && (
          <div className="text-[13px]">
            <h3 className="mb-4 font-semibold  text-gray-700">Patient Name</h3>
            <input
              type="text"
              name="patientName"
              value={bookingData.patientName}
              onChange={handleInputChange}
              placeholder="Enter patient's full name"
              className="mb-4 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
            />

            <h3 className="mb-4 font-semibold text-gray-700">
              Patient ID / SSN
            </h3>
            <input
              type="text"
              name="patientId"
              value={bookingData.patientId}
              onChange={handleInputChange}
              placeholder="Enter patient ID"
              className="mb-4 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
            />

            <h3 className="mb-4 font-semibold text-gray-700">
              Hospital / Clinic Name
            </h3>
            <input
              type="text"
              name="hospitalName"
              value={bookingData.hospitalName}
              onChange={handleInputChange}
              placeholder="Enter hospital name"
              className="mb-6 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
            />

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className="w-full rounded-xl border-2 border-blue-500 py-3 font-semibold text-blue-500 transition hover:bg-blue-50"
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                className="w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <div>
            <h3 className="mb-4 font-semibold text-gray-700">
              Confirm Booking
            </h3>

            <div className="mb-6 space-y-3 text-[13px] rounded-lg bg-gray-50 p-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Blood Group:</span>
                <span className="font-semibold text-red-500">
                  {bookingData.bloodType}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Units:</span>
                <span className="font-semibold">{bookingData.units}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Patient Name:</span>
                <span className="font-semibold">{bookingData.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Patient ID:</span>
                <span className="font-semibold">{bookingData.patientId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Hospital:</span>
                <span className="font-semibold">
                  {bookingData.hospitalName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Blood Bank:</span>
                <span className="font-semibold">{bookingData.bankName}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                disabled={loading}
                className="w-full rounded-xl border-2 border-blue-500 py-3 font-semibold text-blue-500 transition hover:bg-blue-50 disabled:opacity-50"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600 disabled:opacity-50"
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default BloodBookingModal;
