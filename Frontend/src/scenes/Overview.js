import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

function Overview() {
  let h = window.innerHeight
  const [view, setView] = useState("units");
  return (
    <Box m="1.5rem 2.5rem" height={h}  >
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="70%">
        <FormControl sx={{ mt: "1rem", color: "white" }}>
          <InputLabel sx={{
            color: "white"
          }}>View</InputLabel>
          <Select
            sx={{
              color: "white"
            }}
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem color="white" value="sales">Sales</MenuItem>
            <MenuItem color="white" value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  )
}

export default Overview