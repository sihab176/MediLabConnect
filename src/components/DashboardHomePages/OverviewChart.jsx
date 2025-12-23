"use client";

import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const OverviewChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/book-blood?limit=6")
      .then((res) => res.json())
      .then((data) => {
        // 🔥 Recharts compatible format
        const formattedData = data.map((item) => ({
          patientName: item.patientName.split(" ")[0],
          units: item.units,
        }));

        setChartData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Chart data fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading chart...</p>;
  }

  return (
    <div >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Blood Booking Overview
        </h3>
        <p className="text-sm text-gray-500">Patient-wise booked blood units</p>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorUnits" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />

          <XAxis
            dataKey="patientName"
            stroke="#9CA3AF"
            style={{ fontSize: "12px" }}
          />

          <YAxis
            stroke="#9CA3AF"
            style={{ fontSize: "12px" }}
            allowDecimals={false}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="units"
            stroke="#EF4444"
            strokeWidth={2}
            fill="url(#colorUnits)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
