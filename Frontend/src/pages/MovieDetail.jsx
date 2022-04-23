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
import { url } from "../movies";

export default function MovieDetailsPage() {
  const { movie, setMovie, movies, setBooking } =
    React.useContext(MoviesContext);
  const [loading, load] = useState(false);
  const n = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    load(true);
    //API
    axios
      .post(`${url}/api/booking`, {
        uid: localStorage.getItem("uid"),
        mid: movie.mid,
        cost: movie.cost,
        seat_id: 0,
        sid: movie.screen,
        book_date: new Date()
          .toLocaleDateString()
          .replace("/", "")
          .split("")
          .reverse()
          .join(""),
      })
      .then((res) => {
        load(false);
        // const persons = res.data;
        setBooking(res);
        // this.setState({ persons });
        n("/booking");
      })
      .catch((e) => {
        load(false);
        // n("/booking");
      });
  };
  const fallback = 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/shang-chi-and-the-legend-of-the-ten-rings_otm2d4ub_480x.progressive.jpg?v=1631198179'
  return (
    <>
      <NavBar />
      <main
        className="md"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("${movie?.img ?? fallback}")`,
        }}
      >
        <Typography variant="h2">
          {movie?.name} (Screen {movie?.screen})
        </Typography>
        {/* <h2>
          {movie?.title} (Screen {movie?.screen})
        </h2> */}
        <div>
          {movie?.tags?.map((t) => (
            <span>{t}</span>
          ))}
          {/* <span>{movie?.tags}</span> */}
          <span className="time">{Math.floor(movie.duration/60)}h{movie.duration%60}m</span>
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
