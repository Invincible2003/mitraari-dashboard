import React, { useState } from "react";
import axios from "axios";

function CountrySearch() {

  const [country, setCountry] = useState("");
  const [data, setData] = useState(null);

  const searchCountry = async () => {

    try {

      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${country}`
      );

      setData(res.data[0]);

    } catch {
      alert("Country not found");
    }
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <h2>🔎 Country Insights</h2>

      <input
        type="text"
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      <button
        onClick={searchCountry}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        Search
      </button>

      {data && (
        <div style={{ marginTop: "20px" }}>
          <h3>{data.name.common}</h3>

          <p>Population: {data.population.toLocaleString()}</p>

          <p>Region: {data.region}</p>

          <p>Capital: {data.capital}</p>

          <p>Currency: {Object.values(data.currencies)[0].name}</p>

        </div>
      )}
    </div>
  );
}

export default CountrySearch;