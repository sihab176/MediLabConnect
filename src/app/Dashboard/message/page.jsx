"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/message`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [reload]);

  // console.log("message", messages);

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
          const res = await fetch(`/api/message/${id}`, {
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

  return (
    <div
      className="container  mx-auto  dark:text-gray-800 bg-white rounded-xl shadow-sm border border-gray-100"
      bis_skin_checked="1"
    >
      <div className="overflow-x-auto" bis_skin_checked="1">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <colgroup>
            <col className="w-5" />
            <col />
            <col />
            <col />
            <col />
            {/* <col /> */}
            {/* <col className="w-5" /> */}
          </colgroup>
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm w-full">
              <th className="p-3 hidden sm:table-cell">ID</th>
              <th className="p-3 hidden sm:table-cell">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3 hidden sm:table-cell  md:hidden lg:block">
                Details
              </th>

              <th className="p-3">
                <span className="">Auction</span>
              </th>
            </tr>
          </thead>
          <tbody className="border-b ">
            {messages?.map((user) => (
              <tr
                key={user._id}
                className="border-b border-gray-200 lg:text-sm "
              >
                <td className="px-3 py-8 font-medium dark:text-gray-600 hidden sm:table-cell">
                  {user._id}
                </td>
                <td className="px-3 py-8 hidden sm:table-cell">
                  <p>{user.name}</p>
                </td>
                <td className="px-3 py-8">
                  <p>{user.email}</p>
                </td>
                <td className="px-4 py-4 hidden sm:table-cell">
                  {/* Added max-width and line-clamp for a cleaner look */}
                  <p className="max-w-xs whitespace-normal line-clamp-2 text-gray-500">
                    {user.message}
                  </p>
                </td>

                <td className="px-3 py-8">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn bg-red-500 hover:bg-red-600 btn-sm border-0 text-white w-14 h-6 rounded"
                  >
                    Delete
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

export default Message;
