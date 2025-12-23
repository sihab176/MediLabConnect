"use client";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BloodBankDetails = () => {
  // Data structure based on your backend image
  const [bloodBanks, setBloodBanks] = useState([]);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/add-blood`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const data = await res.json();
        setBloodBanks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [reload]);

  if (loading) {
    return <p className="text-center p-10">Loading...</p>;
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("Deleted id:", id);
        try {
          const res = await fetch(`/api/add-blood/${id}`, {
            method: "DELETE",
          });
          const data = await res.json();
          if (data.success) {
            setReload(!reload);
            Swal.fire("Deleted!", "Doctor removed successfully.", "success");
          } else {
            Swal.fire("Error!", data.message || "Delete failed", "error");
          }
        } catch (error) {
          Swal.fire("Error!", "Server error occurred", "error");
        }
      }
    });
  };

  console.log("blood data", users);

  return (
    <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Blood Bank Management
        </h2>

        {/* Desktop Table View (Visible on md screens and up) */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 border-b border-gray-100">
              <tr className="text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Bank Details</th>
                <th className="px-6 py-4 font-semibold">Contact Info</th>
                <th className="px-6 py-4 font-semibold">Stock (Units)</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {bloodBanks.map((bank) => (
                <tr
                  key={bank._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="font-bold text-gray-900">
                      {bank.bloodBankName}
                    </div>
                    <div className="text-sm text-gray-500">{bank.address}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-gray-700 font-medium">
                      {bank.email}
                    </div>
                    <div className="text-sm text-gray-400">{bank.phone}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-2 flex-wrap">
                      {Object.entries(bank.bloodTypes).map(([type, unit]) => (
                        <span
                          key={type}
                          className="px-2 py-1 bg-cyan-50 text-cyan-600 rounded text-xs font-bold border border-cyan-100"
                        >
                          {type}: {unit}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      {bank.urgent && (
                        <span className="w-fit px-3 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded-full uppercase">
                          Urgent
                        </span>
                      )}
                      {bank.verified && (
                        <span className="w-fit px-3 py-1 bg-green-100 text-green-600 text-[10px] font-bold rounded-full uppercase">
                          Verified
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right text-sm text-gray-600 font-mono">
                    <button
                      onClick={() => handleDelete(bank._id)}
                      className="text-2xl hover:text-red-500 cursor-pointer"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* //! ============== Mobile Card View (Visible on small screens)=============== */}
        <div className="md:hidden space-y-4">
          {bloodBanks.map((bank) => (
            <div
              key={bank._id}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">
                    {bank.bloodBankName}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{bank.location}</p>
                </div>
                {bank.verified && (
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-[10px] font-bold rounded uppercase">
                    Verified
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold block text-gray-400 text-[10px] uppercase">
                    Address
                  </span>
                  {bank.address}
                </div>

                <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  {Object.entries(bank.bloodTypes).map(([type, unit]) => (
                    <div key={type} className="text-xs flex justify-between">
                      <span className="text-gray-400 font-bold">{type}</span>
                      <span className="text-cyan-600 font-bold">
                        {unit} Units
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                  <div className="text-xs font-mono text-gray-500">
                    {bank.openingHours} - {bank.closingHours}
                  </div>
                  <div className="text-xs font-bold text-gray-700">
                    {bank.phone}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodBankDetails;
