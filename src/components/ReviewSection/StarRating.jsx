"use client";

import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, setRating, size = 22, readOnly = false }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={size}
          className={`cursor-pointer ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => !readOnly && setRating(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
