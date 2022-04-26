import React from "react";
import "./Ticket.css";
import { movies } from "../movies";
import { MoviesContext } from "../App";
import { Typography } from "@mui/material";
/**
 *
 * @param {Object} booking
 * @param {String} booking.title
 * @param {String} booking.img Image url
 * @param {number | String} booking.seat_id
 * @param {number|string} booking.price
 * @param {string} booking.book_date
 * @param {string} booking.time
 * @param {string} booking.slot Morning/afternoon/evening
 */
export default function Ticket() {
  let { booking } = React.useContext(MoviesContext);
  console.log('booking', booking)
  // let booking = localStorage.ticketData;
  if (!booking.seat_id) {
    booking = movies[0];
    booking.seat_id = 15;
    booking.slot = "A";
    booking.price = 140;
    booking.time = "9:00 am";
  }
  let slot = ""
  const time = Number.parseInt(booking.start_time.substring(0,2));
  if(time < 12) slot = "M";
  else if(time < 18) slot = "A";
  else slot = "E"
  return (
    <div class="ticket card">
      <div
        class="cover-image"
        style={{
          backgroundImage: `url('${booking.img}')`,
        }}
      >
        <p>{booking?.title}</p>
      </div>
      <div class="row">
        <div class="col">
          <h4>Screen</h4>
          <p>{booking?.sid}</p>
          <h4>PRICE</h4>
          <p>{booking?.cost}</p>
        </div>
        <div class="col">
          <h4>Slot</h4>
          <p>{slot}</p>
          <h4>DATE</h4>
          <p>{booking?.book_date ?? "24/4/22"}</p>
        </div>
        <div class="col">
          <h4>Seat</h4>
          <p>{booking?.seat_id}</p>
          <h4>TIME</h4>
          <p>{booking?.start_time.substring(0, 5)}</p>
        </div>
      </div>
      <Typography variant="caption">Ticket booked successfully!</Typography>
    </div>
  );
}
