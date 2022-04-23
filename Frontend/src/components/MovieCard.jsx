import * as React from "react";
import Card from "@mui/material/Card";
import './card.css'
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { MoviesContext } from "../App";
import { useNavigate } from "react-router-dom";
/**
 *
 * @param {Object} m Movie details
 * @param {String} m.img Image url
 * @param {String} m.name Movie title
 * @param {String} m.desc Movie description
 * @param {Number} m.cost Movie price
 * @param {Number} m.duration Movie duration
 * @param {Array<String>} m.tags Movie tags/genres
 * @param {String | Number} m.mid Movie ID
 * @returns
 */
export default function MovieCard(m) {
  const { movie, setMovie, movies } = React.useContext(MoviesContext);
  console.log("movie-card",m.name);
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    setMovie(m);
    navigate("/movie");
    // history.push("/movie");
  }
  return (
    <div className="">
      <div className="col s6 m3">
        <div className="card">
          <div className="card-image">
            <img src={m.img ?? "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/shang-chi-and-the-legend-of-the-ten-rings_otm2d4ub_480x.progressive.jpg?v=1631198179"} alt={m.title} />
            <span className="card-title">{m.name}</span>
          </div>
          <div className="card-content">
            <p>{m.desc}</p>
            {/* {movie?.title} */}
          </div>
          <div className="card-action">
            <a href="#!" onClick={handleClick}>
              Book Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function MovieCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          // component="img"
          height="160"
          image="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
