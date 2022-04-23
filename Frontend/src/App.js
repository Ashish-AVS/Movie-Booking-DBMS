import React, { useState } from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import { CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieDetailsPage from "./pages/MovieDetail"
import { movies as m, url } from "./movies"
import BookingPage from './pages/Booking';
import NavBar from './components/NavBar';
import ProfilePage from './pages/Profile';
import ProtectedRoute from './utils/ProtectedRoute';
import axios from 'axios';

export const MoviesContext = React.createContext({
  movie: {},
  movies: [],
  setMovie: () => { },
});

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const [movie, setMovie] = React.useState();
  const [movies, setMs] = React.useState([]);
  const [booking, setBooking] = React.useState({});
  const value = { movie, setMovie, movies, booking, setBooking };
  //API
  React.useEffect(() => {
    // setTimeout(() => {
    //   setMs(m);
    // }, 500);
    axios.get(`${url}/api/movies`).then(data => {
      setMs(data);
    }).catch(err => {
      setMs(m);
    })
  });
  if (isLoading) return <CircularProgress />//<div>Loading...</div>
  return (
    <MoviesContext.Provider value={value}>

      <BrowserRouter>
        {/* <LoginButton />
      <LogoutButton /> */}
        {/* <Profile /> */}
        <Routes>
          <ProtectedRoute path="/" element={<Home />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path="movie" element={<MovieDetailsPage />} />
          <Route path="booking" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
      {!isAuthenticated && <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><LoginButton /></div>}
    </MoviesContext.Provider>
  );
}

export default App;
