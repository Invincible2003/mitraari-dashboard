import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function TopCountriesChart() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchCountries = async () => {

      try {

        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,population"
        );

        const countries = res.data
          .map(country => ({
            name: country.name.common,
            population: country.population
          }))
          .sort((a, b) => b.population - a.population)
          .slice(0, 10);

        setData(countries);

      } catch (error) {
        console.error("Error fetching countries:", error);
      }

    };

    fetchCountries();

  }, []);

  return (
    <div style={{ marginTop: "60px" }}>

      <h2>🏆 Top 10 Most Populated Countries</h2>

      <ResponsiveContainer width="100%" height={400}>

        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="population" fill="#22c55e" />
        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default TopCountriesChart;