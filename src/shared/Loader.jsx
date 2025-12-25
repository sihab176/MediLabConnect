import React from "react";
import "../shared/Loadar.css";

const Loader = ({ size = 260 }) => {
    const c = size / 2;
  return (
      <div
      className="relative flex items-center justify-center loader-wrapper"
      style={{ width: size, height: size }}
    >
      {/* Outer segmented ring */}
      <svg
        className="absolute loader-ring-slow"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle
          cx={c}
          cy={c}
          r={c - 8}
          stroke="#00ffff"
          strokeWidth="4"
          strokeDasharray="40 22"
          strokeLinecap="round"
        />
      </svg>

      {/* Middle segmented ring */}
      <svg
        className="absolute loader-ring-medium"
        width={size - 50}
        height={size - 50}
        viewBox={`0 0 ${size - 50} ${size - 50}`}
        fill="none"
      >
        <circle
          cx={(size - 50) / 2}
          cy={(size - 50) / 2}
          r={(size - 50) / 2 - 6}
          stroke="#00ffff"
          strokeWidth="3"
          strokeDasharray="26 18"
          strokeLinecap="round"
        />
      </svg>

      {/* Yellow thin ring */}
      <svg
        className="absolute loader-ring-fast"
        width={size - 90}
        height={size - 90}
        viewBox={`0 0 ${size - 90} ${size - 90}`}
        fill="none"
      >
        <circle
          cx={(size - 90) / 2}
          cy={(size - 90) / 2}
          r={(size - 90) / 2 - 4}
          stroke="#facc15"
          strokeWidth="2"
          strokeDasharray="12 10"
        />
      </svg>

      {/* Inner tech arcs */}
      <svg
        className="absolute loader-ring-medium"
        width={size - 130}
        height={size - 130}
        viewBox={`0 0 ${size - 130} ${size - 130}`}
        fill="none"
      >
        <path
          d={`M ${c - 65} ${c} A 65 65 0 0 1 ${c} ${c - 65}`}
          stroke="#00ffff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d={`M ${c} ${c + 65} A 65 65 0 0 1 ${c + 65} ${c}`}
          stroke="#00ffff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Center dot */}
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse" />
    </div>
  );
};

export default Loader;
