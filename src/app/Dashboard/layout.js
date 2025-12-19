"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname= usePathname()

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      
      {/* Sidebar for large screens */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-[#b3dee2] shadow-lg">
        {/* logo */}
        <Link href="/">
        <div className="p-4 text-2xl font-bold border-b flex items-center gap-2"><Image
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  /> <h1 className="text-sky-500 mt-1">MediLab</h1> </div>
        </Link>
        {/* links */}
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/Dashboard"
            className={`block p-2 rounded hover:bg-gray-200 mb-4 ${pathname === '/Dashboard' ? 'bg-blue-300' : ''}`}
          >
            Dashboard
          </Link>
          <Link
            href="/Dashboard/addDoctors"
            className={`block p-2 rounded hover:bg-gray-200 mb-4 ${pathname === '/Dashboard/addDoctors' ? 'bg-blue-300' : ''}`}
          >
            Add Doctors
          </Link>
          <Link
            href="/Dashboard/addBlood"
            className={`block p-2 rounded hover:bg-gray-200 mb-4 ${pathname === '/Dashboard/addDoctors' ? 'bg-blue-300' : ''}`}
          >
            Add Blood Bank
          </Link>
           <Link
            href="/Dashboard/doctorsMangement"
            className="block p-2 rounded hover:bg-gray-200 mb-4"
          >
            Manage Doctors
          </Link>
           <Link
            href="/Dashboard/userManage"
            className="block p-2 rounded hover:bg-gray-200 mb-4"
          >
            Manage user
          </Link>
           <Link
            href="/Dashboard/feedback"
            className="block p-2 rounded hover:bg-gray-200 mb-4"
          >
            Feedback
          </Link>
           <Link
            href="/Dashboard/PaymentHistory"
            className="block p-2 rounded hover:bg-gray-200 mb-4"
          >
            Payment History
          </Link>
           <Link
            href="/Dashboard/message"
            className="block p-2 rounded hover:bg-gray-200 mb-4"
          >
            Message
          </Link>
        </nav>
      </aside>
      {/* ======================================Mobile sidebar================================ */}
      <div
        className={`fixed inset-0 bg-black/20 bg-opacity-40 z-40 md:hidden transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 text-2xl font-bold border-b flex justify-between items-center">
          <Link href="/">
        <div className="p-2 text-2xl font-bold flex items-center gap-2"><Image
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  /> <h1 className="text-sky-500 mt-1">MediLab</h1> </div>
        </Link>
          <button onClick={() => setSidebarOpen(false)}>✕</button>
        </div>
        <nav className="p-4 space-y-2">
          <Link
            href="/Dashboard"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Dashboard
          </Link>
          <Link
            href="/Dashboard/doctorsMangement"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Manage Doctors
          </Link>
          <Link
            href="/Dashboard/PaymentHistory"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Payments History
          </Link>
          <Link
            href="/dashboard/settings"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow p-4">
          <div className="flex items-center gap-2">
            <button
              className="lg:hidden p-2 rounded hover:bg-gray-200"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <h1 className="text-lg font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            {/* <span>User Name</span> */}
            {/* <img
              src="https://via.placeholder.com/32"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            /> */}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children} 
        </main>
      </div>
    </div>
  );
}
