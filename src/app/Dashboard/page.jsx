"use client";
import { useState } from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaDollarSign,
  FaUserPlus,
  FaEnvelope,
  FaFlask,
  FaPills,
  FaBell,
  FaSearch,
  FaClock,
  FaVideo,
  FaUser,
  FaRegCommentDots,
  FaClipboardList,
} from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DoctorDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weeklyData = [
    { day: "Mon", appointments: 12, newPatients: 8 },
    { day: "Tue", appointments: 15, newPatients: 10 },
    { day: "Wed", appointments: 18, newPatients: 14 },
    { day: "Thu", appointments: 16, newPatients: 12 },
    { day: "Fri", appointments: 14, newPatients: 9 },
    { day: "Sat", appointments: 10, newPatients: 6 },
    { day: "Sun", appointments: 8, newPatients: 5 },
  ];

  const appointments = [
    {
      id: 1,
      initial: "E",
      name: "Emma Thompson",
      time: "09:00 AM",
      type: "In Person",
      status: "Completed",
      color: "bg-teal-100 text-teal-700",
    },
    {
      id: 2,
      initial: "M",
      name: "Michael Chen",
      time: "10:30 AM",
      type: "Video Call",
      status: "In Progress",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      initial: "S",
      name: "Sarah Williams",
      time: "11:45 AM",
      type: "In Person",
      status: "Upcoming",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 4,
      initial: "J",
      name: "James Rodriguez",
      time: "02:00 PM",
      type: "Video Call",
      status: "Upcoming",
      color: "bg-pink-100 text-pink-700",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      icon: <FaUsers className="text-teal-500" size={20} />,
      title: "New Patient Registered",
      description: "Robert Smith completed registration form",
      time: "5 min ago",
      bgColor: "bg-teal-50",
    },
    {
      id: 2,
      icon: <FaCalendarAlt className="text-blue-500" size={20} />,
      title: "New Message",
      description: "Emma Thompson sent a follow up question",
      time: "10 min ago",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      icon: <FaFileAlt className="text-yellow-500" size={20} />,
      title: "Lab Results Ready",
      description: "Blood work results for Michael Chen available",
      time: "1 hour ago",
      bgColor: "bg-yellow-50",
    },
    {
      id: 4,
      icon: <FaDollarSign className="text-purple-500" size={20} />,
      title: "Prescription Filled",
      description: "Sarah Williams picked up medication",
      time: "2 hours ago",
      bgColor: "bg-purple-50",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-teal-500 text-white";
      case "In Progress":
        return "bg-teal-500 text-white";
      case "Upcoming":
        return "bg-orange-400 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Friday, December 19, 2025</p>
            <h1 className="text-2xl font-bold text-gray-900">
              Good Morning, <span className="text-teal-500">Dr. Sarah</span>
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              You have <span className="font-semibold">4 appointments</span>{" "}
              scheduled for today.
              <span className="text-gray-500">
                {" "}
                2 patients are waiting for their reports.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <FaSearch
                className="absolute left-3 top-2.5 text-gray-400"
                size={16}
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <FaClock className="text-gray-600" size={20} />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <FaBell className="text-gray-600" size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">
                Total Patients
              </h3>
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                <FaUser className="text-teal-500" size={22} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">2,847</p>
            <p className="text-sm text-teal-500">+8.2% than last month</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">
                Today's Appointments
              </h3>
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <FaCalendarAlt className="text-blue-500" size={22} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">18</p>
            <p className="text-sm text-gray-500">4 pending confirmations</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">
                Pending Reports
              </h3>
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                <FaFileAlt className="text-yellow-500" size={22} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">7</p>
            <p className="text-sm text-red-500">3 critical reviews</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">
                Monthly Revenue
              </h3>
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <FaDollarSign className="text-purple-500" size={22} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">$24,580</p>
            <p className="text-sm text-teal-500">+8.2% than last month</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Overview Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Weekly Overview
                </h3>
                <p className="text-sm text-gray-500">
                  Appointments and new patients this week
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  <span className="text-sm text-gray-600">Appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                  <span className="text-sm text-gray-600">New Patients</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient
                    id="colorAppointments"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#5EEAD4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#5EEAD4" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorNewPatients"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="day"
                  stroke="#9CA3AF"
                  style={{ fontSize: "12px" }}
                />
                <YAxis stroke="#9CA3AF" style={{ fontSize: "12px" }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="appointments"
                  stroke="#5EEAD4"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorAppointments)"
                />
                <Area
                  type="monotone"
                  dataKey="newPatients"
                  stroke="#14B8A6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorNewPatients)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h3>
              <button className="text-sm text-teal-500 hover:text-teal-600 font-medium">
                See All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 ${activity.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Today's Schedule and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Today's Schedule
                </h3>
                <p className="text-sm text-gray-500">
                  4 appointments scheduled
                </p>
              </div>
              <button className="text-sm text-teal-500 hover:text-teal-600 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-teal-200 transition-colors"
                >
                  <div
                    className={`w-12 h-12 ${appointment.color} rounded-lg flex items-center justify-center text-xl font-semibold flex-shrink-0`}
                  >
                    {appointment.initial}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {appointment.name}
                    </h4>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <FaClock size={14} />
                        <span>{appointment.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        {appointment.type === "Video Call" ? (
                          <FaVideo size={14} />
                        ) : (
                          <FaUser size={14} />
                        )}
                        <span>{appointment.type}</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-medium ${getStatusColor(
                      appointment.status
                    )}`}
                  >
                    {appointment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 ">
            <button className="p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <FaUserPlus className="text-teal-500" size={24} />
              </div>
              <p className="text-sm font-medium text-gray-900">Add Patient</p>
            </button>

            <button className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <FaCalendarAlt className="text-blue-500" size={24} />
              </div>
              <p className="text-sm font-medium text-gray-900">Schedule</p>
            </button>

            <button className="p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <FaClipboardList className="text-yellow-500" size={24} />
              </div>
              <p className="text-sm font-medium text-gray-900">Reports</p>
            </button>

            <button className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <FaRegCommentDots className="text-purple-500" size={24} />
              </div>
              <p className="text-sm font-medium text-gray-900">Messages</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorDashboard;
