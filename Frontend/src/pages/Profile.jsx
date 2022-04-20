import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { url } from "../movies";
import { movies as m } from "../movies";
import MovieCard from "../components/MovieCard";
import { Box, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProfilePage() {
  const [movies, setMovies] = React.useState([]);
  const { user } = useAuth0();
  //API
  useEffect(() => {
    axios.get(`${url}/api/user/${user.email}`).then((data) => {
      setMovies(data);
      //remove
      setMovies(m);
    });
  });
  return (
    <>
      <NavBar />
      <Box sx={{ margin: "10px 8px" }}>
        <Typography variant="h2">Hello, {user.name}</Typography>
        <Typography variant="body2">Email: {user.email}</Typography>
        <Typography variant="h4">Movies Booked</Typography>
      </Box>
      <div>
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
      {movies.length === 0 && "No movies booked yet!"}
    </>
  );
}
