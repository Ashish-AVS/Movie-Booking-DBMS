import React from "react";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
const NavBar = () => (
  <nav>
    <div class="nav-wrapper">
      {/* <a href="/" class="brand-logo">
        Movie Booking System
      </a> */}
      <Link to="/" className="brand-logo center">
        Movie Booking System
      </Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          {/* <a href="profile.html">Your Bookings</a> */}
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <LoginButton />
        </li>
        <AccountMenu />
      </ul>
    </div>
  </nav>
);
export default NavBar;
