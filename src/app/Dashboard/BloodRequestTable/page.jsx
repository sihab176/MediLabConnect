"use client";
import React, { useEffect, useState } from "react";

const BloodRequestTable = () => {
  // Initializing state with your provided data
  const [pageUpdate, setPageUpdate] = useState(false);

  const [bloodData, setBloodData] = useState([]);

  useEffect(() => {
    const bloodDataFun = async () => {
      const res = await fetch("/api/book-blood");
      const data = await res.json();
      // console.log("data", data)
      setBloodData(data);
    };
    bloodDataFun();
  }, [pageUpdate]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch("http://localhost:3000/api/book-blood", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // ✅ fixed
        },
        body: JSON.stringify({
          id: id, // ✅ key name correct
          status: newStatus, // ✅ backend expects "status"
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Update failed:", data);
        return;
      }

      setPageUpdate(true);
      console.log(`Updated ID ${id} to ${newStatus}`);
    } catch (error) {
      console.log(error);
    }
  };

  const statusStyles = {
    pending: "bg-amber-100 text-amber-800 focus:ring-amber-300",
    approved: "bg-blue-100 text-blue-800 focus:ring-blue-300",
    Approved: "bg-blue-100 text-blue-800 focus:ring-blue-300",
    completed: "bg-green-100 text-green-800 focus:ring-green-300",
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Blood Requests
        </h2>

        {/* Desktop View: Traditional Table */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
                <th className="px-6 py-4 font-semibold">Blood Group</th>
                <th className="px-6 py-4 font-semibold">Patient Info</th>
                <th className="px-6 py-4 font-semibold">Hospital</th>
                <th className="px-6 py-4 font-semibold text-center">Units</th>
                <th className="px-6 py-4 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bloodData.map((req) => (
                <tr
                  key={req._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 font-bold text-lg">
                      {req.bloodType}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-800">
                      {req.patientName}
                    </div>
                    <div className="text-xs text-gray-500 font-mono mt-1">
                      ID: {req.patientId.trim()}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    {req.hospitalName}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-700">
                    {req.units}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <select
                      value={req.status}
                      onChange={(e) =>
                        handleStatusChange(req._id, e.target.value)
                      }
                      className={`text-sm font-medium px-4 py-1 rounded-full border-none 
      cursor-pointer appearance-none text-center
      ${
        statusStyles[req.status] ||
        "bg-gray-100 text-gray-700 focus:ring-gray-300"
      }
    `}
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Card Style (Matching your image) */}
        <div className="md:hidden space-y-4">
          {bloodData.map((req) => (
            <div
              key={req._id}
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-500 font-bold text-xl">
                  {req.bloodType}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">
                    {req.patientName}
                  </h3>
                  <p className="text-gray-400 text-sm">{req.hospitalName}</p>
                  <p className="text-[10px] text-gray-400 mt-1 font-mono">
                    ID: {req.patientId.trim()} | Units: {req.units}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="px-6 py-4 text-center">
                  <select
                    value={req.status}
                    onChange={(e) =>
                      handleStatusChange(req._id, e.target.value)
                    }
                    className={`text-sm font-medium px-4 py-1 rounded-full border-none 
      cursor-pointer appearance-none text-center
      ${
        statusStyles[req.status] ||
        "bg-gray-100 text-gray-700 focus:ring-gray-300"
      }
    `}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodRequestTable;
