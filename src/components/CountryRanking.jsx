import React, { useEffect, useState } from "react";
import axios from "axios";

function CountryRanking() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {

    axios
      .get("https://restcountries.com/v3.1/all?fields=name,population")
      .then((res) => {

        const sorted = res.data
          .map(c => ({
            name: c.name.common,
            population: c.population
          }))
          .sort((a, b) => b.population - a.population)
          .slice(0, 10);

        setCountries(sorted);

      });

  }, []);

  return (
    <div style={{marginTop:"60px"}}>

      <h2>🏅 Country Population Ranking</h2>

      <table style={{
        margin:"auto",
        borderCollapse:"collapse",
        width:"70%",
        marginTop:"20px"
      }}>

        <thead>
          <tr style={{background:"#333"}}>
            <th style={cell}>Rank</th>
            <th style={cell}>Country</th>
            <th style={cell}>Population</th>
          </tr>
        </thead>

        <tbody>

          {countries.map((country, index) => (

            <tr key={index} style={{borderBottom:"1px solid #444"}}>

              <td style={cell}>{index + 1}</td>
              <td style={cell}>{country.name}</td>
              <td style={cell}>
                {country.population.toLocaleString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

const cell = {
  padding:"12px",
  textAlign:"center"
};

export default CountryRanking;