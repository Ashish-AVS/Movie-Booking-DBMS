import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import TabPanel from "@mui/material/Tab";
const MovieScreen = ({ screenNo }) => {
  const [value, setValue] = React.setState(0);
  function handleChange(_, s) {
    setValue(s);
  }
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab label="Morning" value={0} />
          <Tab label="Afternoon" value={1} />
          <Tab label="Evening" value={2} />
        </Tabs>
      </Box>
      <TabPanel value={0} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={1} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={2} index={2}>
        Item Three
      </TabPanel>
    </>
  );
};
export default MovieScreen;
