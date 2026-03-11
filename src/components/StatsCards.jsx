import React, { useEffect, useState } from "react";
import axios from "axios";

function StatsCards() {
  const [stats, setStats] = useState({
    countries: 0,
    totalPopulation: 0,
    avgPopulation: 0,
    maxCountry: ""
  });

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,population")
      .then((res) => {
        const countries = res.data;

        const totalPop = countries.reduce(
          (sum, c) => sum + c.population,
          0
        );

        const maxCountry = countries.reduce((a, b) =>
          a.population > b.population ? a : b
        );

        setStats({
          countries: countries.length,
          totalPopulation: totalPop,
          avgPopulation: Math.floor(totalPop / countries.length),
          maxCountry: maxCountry.name.common
        });
      });
  }, []);

  return (
    <div style={{display:"flex", justifyContent:"center", gap:"30px", margin:"40px 0", flexWrap:"wrap"}}>

      <div style={cardStyle}>
        <h3>🌍 Countries</h3>
        <p>{stats.countries}</p>
      </div>

      <div style={cardStyle}>
        <h3>👥 World Population</h3>
        <p>{stats.totalPopulation.toLocaleString()}</p>
      </div>

      <div style={cardStyle}>
        <h3>📈 Avg Population</h3>
        <p>{stats.avgPopulation.toLocaleString()}</p>
      </div>

      <div style={cardStyle}>
        <h3>🏆 Most Populated</h3>
        <p>{stats.maxCountry}</p>
      </div>

    </div>
  );
}

const cardStyle = {
  background:"#1e1e1e",
  padding:"20px",
  borderRadius:"12px",
  width:"220px",
  textAlign:"center",
  boxShadow:"0px 0px 10px rgba(0,0,0,0.5)"
};

export default StatsCards;