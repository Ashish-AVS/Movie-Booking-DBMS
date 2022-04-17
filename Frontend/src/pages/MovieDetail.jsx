import React, { useContext, useState } from "react";
import "./movie-detail.css";
import NavBar from "../components/NavBar";
import { MoviesContext } from "../App";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import axios from "axios";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MovieDetailsPage() {
  const { movie, setMovie, movies, setBooking } =
    React.useContext(MoviesContext);
  const [loading, load] = useState(false);
  const n = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    load(true);
    axios
      .get(`https://google.com`)
      .then((res) => {
        load(false);
        const persons = res.data;
        this.setState({ persons });
        n("/booking");
      })
      .catch((e) => {
        load(false);
        n("/booking");
      });
  };
  return (
    <>
      <NavBar />
      <main
        className="md"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("${movie?.img}")`,
        }}
      >
        <Typography variant="h2">
          {movie?.title} (Screen {movie?.screen})
        </Typography>
        {/* <h2>
          {movie?.title} (Screen {movie?.screen})
        </h2> */}
        <div>
          {movie?.tags.map((t) => (
            <span>{t}</span>
          ))}
          {/* <span>{movie?.tags}</span> */}
          <span className="time">1h47m</span>
        </div>
        <p>{movie?.desc}</p>

        {loading ? (
          <CircularProgress
            sx={{
              color: "white",
            }}
          />
        ) : (
          <a href="#!" onClick={handleClick} className="btn btn-flat">
            Book Ticket
          </a>
        )}
      </main>
    </>
  );
}
