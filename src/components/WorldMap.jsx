import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function WorldMap() {
  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>🌍 Global Population Map</h2>

      <div style={{ width: "100%", maxWidth: "900px", margin: "auto" }}>
        <ComposableMap projectionConfig={{ scale: 150 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#4f46e5"
                  stroke="#ffffff"
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
}

export default WorldMap;