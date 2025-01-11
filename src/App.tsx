import React, { useState } from "react";
import businesses from "./data/businesses.json";
import Sidebar from "./components/Sidebar";
import MapView from "./components/MapView";
import { Stack } from "./components/Stack";
import { IBusiness } from "./data/type";

const App: React.FC = () => {
  const [filteredBusinesses, setFilteredBusinesses] =
    useState<IBusiness[]>(businesses);

  return (
    <Stack
      className="app"
      sx={{
        border: "1px solid red",
        width: "100%",
        height: "100vh",
        padding: "16px",
        gap: "8px",
      }}
    >
      <Stack
        className="content"
        sx={{
          flexDirection: "column",
        }}
      >
        <Sidebar businesses={filteredBusinesses} key={"sidebar"} />
        <MapView
          businesses={businesses}
          setFilteredBusinesses={setFilteredBusinesses}
        />
      </Stack>
    </Stack>
  );
};

export default App;
