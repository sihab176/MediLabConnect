"use client"
import React from "react";

const LikeButton = () => {

  const handleLike = async (id, reviewUserEmail) => {
    if (reviewUserEmail === session?.user?.email) {
      return toast.error("You can't like your own review");
    }

    const res = await fetch(`/api/feedbackReviews/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        userEmail: session?.user?.email,
      }),
    });
    const data = await res.json();

    setReviewData((prev) =>
      prev.map((item) => (item._id === data._id ? data : item))
    );
  };

  const handleDislike = async (id, reviewUserEmail) => {
    if (reviewUserEmail === session?.user?.email) {
      return toast.error("You can't dislike your own review");
    }

    const res = await fetch(`/api/feedbackReviews/${id}/dislike`, {
      method: "PUT",
      body: JSON.stringify({
        userEmail: session?.user?.email,
      }),
    });

    const data = await res.json();

    setReviewData((prev) =>
      prev.map((item) => (item._id === data._id ? data : item))
    );
  };

  return (
    <div className="flex items-center gap-4 text-gray-500 mt-2">
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleLike(item._id, item.userEmail)}
          className={`text-xl transition-all active:scale-95 ${
            item.likes.includes(session?.user?.email) ? "text-blue-500" : ""
          }`}
        >
          <AiTwotoneLike />
        </button>
        <span className="text-sm">{item.likes.length}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handleDislike(item._id, item.userEmail)}
          className={`text-xl transition-all active:scale-95 ${
            item.dislikes.includes(session?.user?.email) ? "text-blue-500" : ""
          }`}
        >
          <AiTwotoneDislike />
        </button>
        <span className="text-sm">{item.dislikes.length}</span>
      </div>
    </div>
  );
};

export default LikeButton;
