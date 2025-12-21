"use client";
import { useEffect, useState } from "react";
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
import StatsCards from "./StatsCards";
import OverviewChart from "./OverviewChart";

const DashboardHomePages = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bloodData, setBloodData] = useState([]);

  useEffect(() => {
    const bloodDataFun = async () => {
      const res = await fetch("/api/book-blood");
      const data = await res.json();
      // console.log("data", data)
      setBloodData(data);
    };
    bloodDataFun();
  }, []);

  // console.log(bloodData)



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
    <div className=" bg-gray-50">
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
        {/*//? =============================== Stats Cards =========================*/}
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/*//TODO ============================== Weekly Overview Chart ================*/}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <OverviewChart />
          </div>

          {/*//TODO ============================== Recent Activity ======================*/}
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

        {/*//TODO ================================= Today's Schedule and Quick Actions ===*/}
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
              {bloodData.map((appointment) => (
                <div
                  key={appointment._id}
                  className="flex items-center gap-4 p-2 rounded-lg border border-gray-100 hover:border-teal-200 transition-colors"
                >
                  <div
                    className={`w-12 h-12  bg-teal-100 text-blue-400 rounded-lg flex items-center justify-center text-xl font-semibold flex-shrink-0`}
                  >
                    {appointment.bloodType}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {appointment.patientName}
                    </h4>
                    <div className="flex items-center gap-4 mt-1 text-[11px] text-gray-400">
                        <p>{appointment.hospitalName}</p>
                    </div>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-medium bg-amber-100`}
                  >
                    Pending...
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
export default DashboardHomePages;
