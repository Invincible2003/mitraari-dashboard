import React, { useState } from "react";
import axios from "axios";

function GDPChart() {

  const [country, setCountry] = useState("");
  const [data, setData] = useState(null);

  const fetchGDP = async () => {

    try {

      const res = await axios.get(
        `https://api.worldbank.org/v2/country/${country}/indicator/NY.GDP.MKTP.CD?format=json`
      );

      const latest = res.data[1].find(item => item.value !== null);

      setData(latest);

    } catch {
      alert("Country code not found (example: IN, US, CN)");
    }
  };

  return (

    <div style={{ marginTop: "60px" }}>

      <h2>💰 GDP Insights</h2>

      <input
        placeholder="Country code (IN, US, CN)"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{ padding: "10px" }}
      />

      <button
        onClick={fetchGDP}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        Get GDP
      </button>

      {data && (
        <div style={{ marginTop: "20px" }}>

          <h3>{data.country.value}</h3>

          <p>Year: {data.date}</p>

          <p>GDP: ${data.value?.toLocaleString()}</p>

        </div>
      )}

    </div>
  );
}

export default GDPChart;