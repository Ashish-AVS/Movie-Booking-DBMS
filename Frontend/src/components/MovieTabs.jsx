import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MovieCard from "./MovieCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      class="row"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Times = { m: "m", a: "a", e: "e" };
/**
 *
 * @param {Object} props
 * @param {Array<Object>} props.movies Movies array
 * @param {Number | String} props.screenNo Screen number
 * @returns
 */
export default function BasicTabs({ movies, screenNo }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {});
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h2">Screen {screenNo}</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab label="Morning" {...a11yProps(0)} />
          <Tab label="Afternoon" {...a11yProps(1)} />
          <Tab label="Evening" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {movies
          .filter((m) => m.timeOfDay === Times.m)
          .map((movie) => (
            <MovieCard {...movie} key={movie.mid} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {movies
          .filter((m) => m.timeOfDay === Times.a)
          .map((movie) => (
            <MovieCard {...movie} key={movie.mid} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {movies
          .filter((m) => m.timeOfDay === Times.e)
          .map((movie) => (
            <MovieCard {...movie} key={movie.mid} />
          ))}
      </TabPanel>
    </Box>
  );
}
