import React from "react";

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

      <h1 style={{ fontSize: "42px" }}>
        MitraAri Global Analytics Dashboard 🌍
      </h1>

      <p style={{ marginBottom: "40px" }}>
        Country Demographics & Trend Prediction System
      </p>
      <p style={{color:"#aaa", marginBottom:"30px"}}>
  MADE BY ARYAN PANDEY
</p>

      {/* GLOBAL STATS */}

      <StatsCards />

      <hr style={{ margin: "50px 0" }} />

      {/* GLOBAL MAP */}

      <h2>🌍 Global Population Map</h2>

      <WorldMap />

      <hr style={{ margin: "50px 0" }} />

      {/* POPULATION ANALYTICS */}

      <h2>📊 Population Analytics</h2>

      <PopulationChart />

      <PredictionChart />

      <hr style={{ margin: "50px 0" }} />

      {/* COUNTRY INTELLIGENCE */}

      <h2>🔎 Country Intelligence</h2>

      <CountrySearch />

      <GDPChart />

      <hr style={{ margin: "50px 0" }} />

      {/* COUNTRY COMPARISON */}

      <h2>🌎 Country Comparison</h2>

      <CountryComparison />

      <hr style={{ margin: "50px 0" }} />

      {/* GLOBAL RANKINGS */}

      <h2>🏆 Global Population Rankings</h2>

      <TopCountriesChart />

      <CountryRanking />

    </div>

  );

}

export default App;