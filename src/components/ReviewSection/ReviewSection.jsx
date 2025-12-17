"use client";

import React, { useEffect, useState } from "react";

import StarRating from "./StarRating";
import { AiTwotoneDislike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ReviewSection = ({ doctorId }) => {
  // console.log("id", doctorId.id);
  // form state
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const { data: session, status } = useSession();
  const [pageReload, setPageReload] = useState(false);
  const [reviewData, setReviewData] = useState([]);
  console.log(session);
  useEffect(() => {
    const reviewFun = async () => {
      const response = await fetch(
        "http://localhost:3000/api/feedbackReviews",
        {
          cache: "no-cache",
        }
      );
      const reviewData = await response.json();
      const filterReview = reviewData.filter(
        (item) => item.doctorId === doctorId?.id
      );
      setReviewData(filterReview);
      console.log("filter data", filterReview);
    };
    reviewFun();
  }, [pageReload]);

  const reviews = [
    {
      id: 1,
      name: "SteveTheSweaty",
      time: "3 days ago",
      rating: 1,
      title: "Too Hot to Handle",
      comment:
        "I thought this would be a cozy experience, but within five minutes my cheeks were medium-well...",
    },
  ];

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      review,
      title,
      rating,
      doctorId: doctorId.id,
      userName: session?.user?.name,
      userImage: session?.user?.image,
      userEmail: session?.user?.email,
      time: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
    };
    try {
      const res = await fetch("/api/feedbackReviews", {
        method: "POST",
        body: JSON.stringify(finalData),
      });
      const response = await res.json();
      toast.success("successfully added ");
      setPageReload(!pageReload);
      console.log(response);
    } catch (error) {
      console.log("the feedback can not post", error);
    }

    // reset
    setReview("");
    setTitle("");
    setRating(0);
  };

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-12 gap-10  my-10">
      {/* Header */}
      <div className="col-span-6 bg-white shadow-2xl p-3 rounded-2xl h-[460px] sticky top-20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">2 Reviews</h3>
          <button className="text-blue-600 text-sm">✏️ Write a review</button>
        </div>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8 ">
          {/* Review Text */}
          <div>
            {/* Rating */}
            <div>
              <p className="text-sm mb-1">Rating</p>

              <StarRating rating={rating} setRating={setRating} />
              <span className="text-sm text-gray-500">({rating})</span>
            </div>
            <textarea
              placeholder="Your review"
              value={review}
              required
              onChange={(e) => setReview(e.target.value)}
              className="w-full border p-3 rounded-md"
              rows={4}
            />
            {/* {!review && (
              <p className="text-red-500 text-xs">
                *This field is required or not valid
              </p>
            )} */}
          </div>

          {/* Review Title */}
          <div>
            <input
              type="text"
              placeholder="Title of your review"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-3 rounded-md"
            />
            {/* {!title && (
              <p className="text-red-500 text-xs">
                *This field is required or not valid
              </p>
            )} */}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 text-sm">
            <button type="button" className="text-gray-400 btn">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>

      {/*------------------------------------ Review List------------------------------------ */}
      <div className="space-y-6 col-span-6 pt-10  pl-4 bg-white shadow-2xl p-3 rounded-2xl">
        {reviewData.map((item) => (
          <div key={item._id} className=" pt-4 border-b border-gray-200 pb-2">
            <div className="flex items-center gap-3">
              <div className=" ">
                {/* <FaCircleUser /> */}
                <Image
                  className="rounded-full"
                  src={item?.userImage || "/doctor3.png"}
                  alt="user image"
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <p className="font-semibold text-sm">{item.userName}</p>
                <p className="text-xs text-gray-500">{item.time}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-2">
              <StarRating rating={item.rating} readOnly />
            </div>

            <h4 className="font-semibold mt-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.review}</p>

            {/* Actions */}
            <div className="flex items-center gap-4  text-gray-500 mt-2">
              <div className="flex items-center gap-2">
                <button className="text-xl transition-all active:scale-65">
                  <AiTwotoneLike />
                </button>
                <span className="text-sm">0</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xl transition active:scale-65">
                  <AiTwotoneDislike />
                </button>
                <span className="text-sm">0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
