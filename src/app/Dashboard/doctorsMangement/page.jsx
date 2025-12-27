"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import Link from "next/link";

const DoctorManagement = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageReload, setPageReload] = useState(false);

  //   Fetch data correctly-------------------------->
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/allDoctors`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const data = await res.json();
        setAllData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageReload]);

  //  Delete handler--------------------------------->
  const handleDelete = async (id) => {
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
          const res = await fetch(`/api/allDoctors/${id}`, {
            method: "DELETE",
          });
          const data = await res.json();
          if (data.success) {
            setPageReload(!pageReload);
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

  if (loading) {
    return <p className="text-center p-10">Loading...</p>;
  }

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          {/* ⚠️ No whitespace inside colgroup */}
          <colgroup>
            <col className="w-5" />
            <col className="w-20" />
            <col className="hidden sm:table-column" />
            <col className="hidden md:table-column" />
            <col />
            <col className="hidden lg:table-column" />
            <col className="w-5" />
          </colgroup>

          <thead>
            <tr className="dark:bg-gray-300">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3 hidden sm:table-cell">Specialization</th>
              <th className="p-3 hidden md:table-cell">Phone</th>
              <th className="p-3 hidden sm:table-cell">Time</th>
              <th className="p-3 hidden lg:table-cell">Address</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
            {allData.map((doctor) => (
              <tr key={doctor._id} className="border-b ">
                <td className="px-3 py-4">
                  <Image
                    src={doctor.location?.image_link || "/doctor7.png"}
                    alt="doctor"
                    width={40}
                    height={40}
                  />
                </td>

                <td className="px-3 py-4">{doctor.details?.doctor_name}</td>

                <td className="px-3 py-4 hidden sm:table-cell">
                  {doctor.details?.specialization}
                </td>

                <td className="px-3 py-4 hidden md:table-cell">
                  {doctor.location?.phone}
                </td>

                <td className="px-3 py-4 hidden sm:table-cell">
                  {doctor.details?.appointment_time}
                </td>

                <td className="px-3 py-4 hidden lg:table-cell">
                  {doctor.location?.address}
                </td>

                <td className="px-3 py-4 flex gap-2">
                  <Link
                    href={`/Dashboard/updateDoctor/${doctor._id}`}
                    className="p-2 hover:bg-gray-200 rounded-full"
                  >
                    <CiEdit />
                  </Link>

                  <button
                    onClick={() => handleDelete(doctor._id)}
                    className="p-2 hover:bg-gray-200 rounded-full"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorManagement;
