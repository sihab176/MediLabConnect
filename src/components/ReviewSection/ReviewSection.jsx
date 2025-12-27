"use client";

import React, { useEffect, useState } from "react";

import StarRating from "./StarRating";
import { AiTwotoneDislike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ReviewSection = ({ doctorId }) => {
  // form state
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const { data: session, status } = useSession();
  const [pageReload, setPageReload] = useState(false);
  const [reviewData, setReviewData] = useState([]);

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
    };
    reviewFun();
  }, [pageReload]);

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
      likedBy: [],
      dislikedBy: [],
    };
    try {
      const res = await fetch("/api/feedbackReviews", {
        method: "POST",
        body: JSON.stringify(finalData),
      });
      const response = await res.json();
      toast.success("successfully added ");
      setPageReload(!pageReload);
    } catch (error) {
      console.log("the feedback can not post", error);
    }

    // reset
    setReview("");
    setTitle("");
    setRating(0);
  };

  // Like/Dislike Handler
  const handleLikeDislike = async (reviewId, action) => {
    if (!session?.user?.email) {
      toast.error("Please login to like/dislike");
      return;
    }

    // console.log(reviewId, action);

    try {
      const res = await fetch("/api/feedbackReviews", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewId,
          action, // 'like' or 'dislike'
          userEmail: session.user.email,
        }),
      });

      const response = await res.json();

      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success(response.message);
        setPageReload(!pageReload);
      }
    } catch (error) {
      // console.log("Error:", error);
      toast.error("Something went wrong");
    }
  };

  // Check if user has liked/disliked
  const hasUserLiked = (item) => {
    return item.likedBy?.includes(session?.user?.email);
  };

  const hasUserDisliked = (item) => {
    return item.dislikedBy?.includes(session?.user?.email);
  };

  // Check if review is user's own
  const isOwnReview = (item) => {
    return item.userEmail === session?.user?.email;
  };

  return (
    <section className="max-w-7xl lg:mx-auto grid grid-cols-1 lg:grid-cols-12   gap-10  my-5 mx-5 ">
      {/* Header */}
      <div className="lg:col-span-6 col-span-1 bg-white shadow-2xl p-3 rounded-2xl lg:h-[460px] h-auto lg:sticky lg:top-20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Reviews</h3>
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
      <div className="lg:col-span-6 col-span-1 space-y-6  pt-10  pl-4 bg-white shadow-2xl p-3 rounded-2xl">
        {reviewData.length === 0 ? (
          <div className="text-center text-xl text-gray-400">
            No Reviews Yet... <br /> Share Your Thoughts. Be The First To <br />{" "}
            Leave a Review.
          </div>
        ) : (
          <div>
            {reviewData.map((item) => (
              <div
                key={item._id}
                className=" pt-4 border-b border-gray-200 pb-2"
              >
                <div className="flex items-center gap-3">
                  <div className=" ">
                    <Image
                      className="rounded-full"
                      src={item?.userImage || "/user.png"}
                      alt="user image"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-sm">{item.userName}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(item.time).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-2">
                  <StarRating rating={item.rating} readOnly />
                </div>

                <h4 className="font-semibold mt-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.review}</p>

                {/*======================== ACTION BUTTON===================== */}
                <div className="flex items-center gap-4  text-gray-500 mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleLikeDislike(item._id, "like")}
                      disabled={isOwnReview(item)}
                      className={`text-xl transition-all active:scale-75 ${
                        hasUserLiked(item) ? "text-blue-600" : ""
                      } ${
                        isOwnReview(item)
                          ? " cursor-not-allowed opacity-50"
                          : "hover:text-blue-600 cursor-pointer"
                      }`}
                    >
                      <AiFillLike />
                    </button>
                    <span className="text-sm">{item.likes || 0}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleLikeDislike(item._id, "dislike")}
                      disabled={isOwnReview(item)}
                      className={`text-xl transition active:scale-75 ${
                        hasUserDisliked(item) ? "text-blue-600" : ""
                      } ${
                        isOwnReview(item)
                          ? "cursor-not-allowed opacity-50"
                          : "hover:text-blue-600 cursor-pointer"
                      }`}
                    >
                      <AiFillDislike />
                    </button>
                    <span className="text-sm">{item.dislikes || 0}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
