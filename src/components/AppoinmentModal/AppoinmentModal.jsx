"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AppoinmentModal = ({ isOpen, setIsOpen }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { data: session } = useSession();

  

  //Todo: handle submit --------------->
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userEmail =await session?.user?.email;

  
    const patientName = e.target.patientName.value;
    const gender = e.target.gender.value;
    const chiefComplaint = e.target.chiefComplaint.value;
    const appoinmentData = {
      patientName,
      phoneNumber,
      userEmail,
      gender,
      chiefComplaint,
    };

    const postData = await fetch("/api/appoinment", {
      method: "POST",
      body: JSON.stringify(appoinmentData),
    });
    const response = await postData.json();
    console.log("response", response);

    if (response.insertedId) {
      toast.success("Appoinment booked successfully");
    }
    setIsOpen(false);
    console.log(userEmail);
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-md rounded-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Patient Information</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Patient Name
                </label>
                <input
                  name="patientName"
                  type="text"
                  required
                  className="w-full border placeholder:text-sm  px-3 py-2"
                  placeholder="write full name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-1 text-xs font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex flex-col items-start gap-3">
                  <PhoneInput
                    required
                    country={"bd"}
                    placeholder="phone"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    inputStyle={{
                      height: "40px",
                      width: "100%",

                      borderRadius: "0px",
                      border: "none",
                      background: "none",
                    }}
                    className="border focus:ring-1 focus:border-amber-600"
                  />
                </div>
              </div>

              {/* Email */}
              {/* <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border  placeholder:text-sm px-3 py-2"
                  placeholder="enter mail"
                />
              </div> */}

              {/* Gender (Radio) */}
              <div>
                <label className="block text-sm font-medium mb-1">Gender</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="gender" value="male" required />
                    Male
                  </label>

                  <label className="flex items-center gap-1">
                    <input type="radio" name="gender" value="female" />
                    Female
                  </label>

                  <label className="flex items-center gap-1">
                    <input type="radio" name="gender" value="other" />
                    Other
                  </label>
                </div>
              </div>

              {/* Chief Complaint */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Chief Complaint
                </label>
                <textarea
                  name="chiefComplaint"
                  rows="3"
                  required
                  className="w-full border  px-3 py-2"
                  placeholder="write in details"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#7fe4f8] hover:bg-[#5ec2d6] text-white py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AppoinmentModal;
