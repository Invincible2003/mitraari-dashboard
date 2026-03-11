import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function PredictionChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse("/population_predictions.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const cleaned = result.data.map((row) => ({
          year: Number(row.year),
        population: Number(row.predicted_population)
        }));
        setData(cleaned);
      }
    });
  }, []);

  return (
    <div style={{ marginTop: "60px" }}>
      <h2>📈 AI Population Predictions</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="population"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PredictionChart;