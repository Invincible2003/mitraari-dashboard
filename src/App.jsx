import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import StatsCards from "./components/StatsCards";
import WorldMap from "./components/WorldMap";
import PopulationChart from "./components/PopulationChart";
import PredictionChart from "./components/PredictionChart";
import CountrySearch from "./components/CountrySearch";
import CountryComparison from "./components/CountryComparison";
import GDPChart from "./components/GDPChart";
import TopCountriesChart from "./components/TopCountriesChart";
import CountryRanking from "./components/CountryRanking";

function App() {

  const navStyle = {
    margin: "10px",
    padding: "10px 18px",
    background: "#222",
    borderRadius: "6px",
    textDecoration: "none",
    color: "white"
  };

  return (

    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial",
        background: "#111",
        color: "white",
        minHeight: "100vh"
      }}
    >

      <h1>MitraAri Global Analytics Dashboard 🌍</h1>

      <p>Country Demographics & Trend Prediction System</p>

      <p style={{color:"#aaa"}}>MADE BY ARYAN PANDEY</p>

      {/* Navigation */}

      <div style={{margin:"30px"}}>

        <Link style={navStyle} to="/">Dashboard</Link>
        <Link style={navStyle} to="/map">Global Map</Link>
        <Link style={navStyle} to="/analytics">Population Analytics</Link>
        <Link style={navStyle} to="/intelligence">Country Intelligence</Link>
        <Link style={navStyle} to="/comparison">Country Comparison</Link>
        <Link style={navStyle} to="/rankings">Global Rankings</Link>

      </div>


      {/* Routes */}

      <Routes>

        <Route path="/" element={<StatsCards />} />

        <Route path="/map" element={<WorldMap />} />

        <Route path="/analytics" element={
          <>
            <PopulationChart/>
            <PredictionChart/>
          </>
        }/>

        <Route path="/intelligence" element={
          <>
            <CountrySearch/>
            <GDPChart/>
          </>
        }/>

        <Route path="/comparison" element={<CountryComparison/>} />

        <Route path="/rankings" element={
          <>
            <TopCountriesChart/>
            <CountryRanking/>
          </>
        }/>

      </Routes>

    </div>

  );
}

export default App;