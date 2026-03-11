import React, { useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function CountryComparison() {

  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [data, setData] = useState([]);

  const compareCountries = async () => {

    try {

      const res1 = await axios.get(
        `https://restcountries.com/v3.1/name/${country1}`
      );

      const res2 = await axios.get(
        `https://restcountries.com/v3.1/name/${country2}`
      );

      const d1 = res1.data[0];
      const d2 = res2.data[0];

      setData([
        { name: d1.name.common, population: d1.population },
        { name: d2.name.common, population: d2.population }
      ]);

    } catch {
      alert("Country not found");
    }
  };

  return (
    <div style={{ marginTop: "60px" }}>

      <h2>🌎 Country Comparison</h2>

      <input
        placeholder="Country 1"
        value={country1}
        onChange={(e) => setCountry1(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <input
        placeholder="Country 2"
        value={country2}
        onChange={(e) => setCountry2(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <button onClick={compareCountries}>
        Compare
      </button>

      {data.length > 0 && (

        <ResponsiveContainer width="100%" height={400}>

          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="population" fill="#6366f1" />
          </BarChart>

        </ResponsiveContainer>

      )}

    </div>
  );
}

export default CountryComparison;