

"use client";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaFileAlt, FaDollarSign, FaUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";

const StatsCards = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    todayAppointments: 0,
    totalDoctors: 0,
    totalBloodBooked: 0,
  });
  

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllStats = async () => {
      try {
        // 🔹 সব API একসাথে call করা
        const [
          usersRes,
          appointmentsRes,
          doctorsRes,
          bloodRes,
        ] = await Promise.all([
          fetch("/api/users"),
          fetch("/api/appoinment"),
          fetch("/api/allDoctors"),
          fetch("/api/book-blood"),
        ]);

        const users = await usersRes.json();
        const appointments = await appointmentsRes.json();
        const doctors = await doctorsRes.json();
        const blood = await bloodRes.json();

        // 🔹 Data set করা
        setStats({
          totalUsers: users.length,              // users collection count
          todayAppointments: appointments.length, // today's appointments
          totalDoctors: doctors.length,           // doctors count
          totalBloodBooked: blood.length,         // blood booked count
        });

      } catch (error) {
        console.error("Dashboard stats fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllStats();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading dashboard data...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

      {/* Total Users */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm text-gray-600">Total Users</h3>
          <FaUser className="text-teal-500" size={22} />
        </div>
        <p className="text-3xl font-bold">{stats.totalUsers}</p>
      </div>

      {/* Today's Appointments */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm text-gray-600">Total Appointments</h3>
          <FaCalendarAlt className="text-blue-500" size={22} />
        </div>
        <p className="text-3xl font-bold">{stats.todayAppointments}</p>
      </div>

      {/* Total Doctors */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm text-gray-600">Total Doctors</h3>
          <FaUserDoctor  className="text-yellow-500" size={22} />
        </div>
        <p className="text-3xl font-bold">{stats.totalDoctors}</p>
      </div>

      {/* Total Blood Booked */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm text-gray-600">Total Blood Booked</h3>
          <MdBloodtype  className="text-red-600" size={22} />
        </div>
        <p className="text-3xl font-bold">{stats.totalBloodBooked}</p>
      </div>

    </div>
  );
};

export default StatsCards;
