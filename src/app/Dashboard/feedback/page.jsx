"use client";
import { useEffect, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import Swal from "sweetalert2";

const ReviewTable = () => {
  const [pageLoad, setPageLoad] = useState(false);
  const [ratingFilter, setRatingFilter] = useState("Any rating");
  const [searchText, setSearchText] = useState("");
  const [showCount, setShowCount] = useState(20);
  const [reviewData, setReviewData] = useState([]);

  // 🔹 Fetch reviews
  useEffect(() => {
    const reviewFun = async () => {
      const res = await fetch("http://localhost:3000/api/feedbackReviews", {
        cache: "no-cache",
      });
      const data = await res.json();
      setReviewData(data);
    };
    reviewFun();
  }, [pageLoad]);

  // 🔹 Stars render
  const renderStars = (rating) =>
    [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  // 🔹 SEARCH + FILTER + LIMIT (CORE LOGIC)
  const filteredReviews = useMemo(() => {
    let data = [...reviewData];

    // ⭐ Rating filter
    if (ratingFilter !== "Any rating") {
      const star = Number(ratingFilter[0]); // "5 stars" → 5
      data = data.filter((item) => item.rating === star);
    }

    // 🔍 Search filter
    if (searchText.trim()) {
      const text = searchText.toLowerCase();
      data = data.filter(
        (item) =>
          item.title?.toLowerCase().includes(text) ||
          item.review?.toLowerCase().includes(text) ||
          item.userName?.toLowerCase().includes(text)
      );
    }

    // 📉 Latest first + show count
    return data
      .sort((a, b) => new Date(b.time) - new Date(a.time))
      .slice(0, showCount);
  }, [reviewData, ratingFilter, searchText, showCount]);

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
          const res = await fetch(`/api/feedbackReviews/${id}`, {
            method: "DELETE",
          });
          const data = await res.json();
          if (data.success) {
            setPageLoad(!pageLoad);
            Swal.fire("Deleted!", "Review removed successfully.", "success");
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
    <div className="w-full bg-gray-50 p-6 min-h-screen">
      {/* 🔹 Filter Section */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* Rating filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Show reviews with</span>
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-teal-500  px-3 py-1.5 text-sm"
            >
              <option>Any rating</option>
              <option>5 stars</option>
              <option>4 stars</option>
              <option>3 stars</option>
              <option>2 stars</option>
              <option>1 star</option>
            </select>
          </div>

          {/* Search */}
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search reviews..."
            className="flex-1 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-teal-500 px-3 py-1.5 text-sm"
          />

          <button
            onClick={() => {
              setSearchText("");
              setRatingFilter("Any rating");
            }}
            className="text-blue-600 text-sm hover:underline"
          >
            Clear
          </button>
        </div>
      </div>

      {/* 🔹 Show Count */}
      <div className="flex justify-end items-center gap-2 mb-2">
        <span className="text-sm">Show</span>
        <select
          value={showCount}
          onChange={(e) => setShowCount(Number(e.target.value))}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <span className="text-sm">reviews</span>
      </div>

      {/* 🔹 Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs">Date</th>
              <th className="px-4 py-3 text-left text-xs">Attribution</th>
              <th className="px-4 py-3 text-left text-xs">Rating</th>
              <th className="px-4 py-3 text-left text-xs">Review</th>
              <th className="px-4 py-3 text-left text-xs">Tags</th>
            </tr>
          </thead>

          <tbody className="divide-y border-gray-200">
            {filteredReviews.map((review) => (
              <tr key={review._id} className="hover:bg-gray-50 border-gray-300">
                <td className="px-4 py-4 text-sm">
                  {new Date(review.time).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>

                <td className="px-4 py-4">
                  <div className="flex flex-col items-center">
                    <Image
                      src={review.userImage || "/user.png"}
                      alt="user"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <span className="text-xs text-gray-600 mt-1">
                      {review.userName}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <div className="flex gap-1">{renderStars(review.rating)}</div>
                </td>

                <td className="px-4 py-4 max-w-md">
                  <p className="text-sm font-semibold">{review.title}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {review.review}
                  </p>
                </td>

                <td className="px-4 py-4">
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="text-2xl hover:text-red-500 cursor-pointer"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}

            {filteredReviews.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No reviews found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewTable;
