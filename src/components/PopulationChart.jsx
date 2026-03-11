import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: 2000, population: 105657554 },
  { year: 2005, population: 114760992 },
  { year: 2010, population: 123428117 },
  { year: 2015, population: 131015239 },
  { year: 2020, population: 138000438 },
  { year: 2025, population: 1474766824 }
];

function PopulationChart() {
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>📊 Population Trend Analysis</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="population"
            stroke="#4f46e5"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PopulationChart;