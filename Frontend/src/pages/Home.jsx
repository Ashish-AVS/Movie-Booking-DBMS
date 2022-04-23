import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import NavBar from "../components/NavBar";
import MovieScreen from "../components/MovieScreen";
import BasicTabs from "../components/MovieTabs";
import { MoviesContext } from "../App";
import axios from "axios";
import { url } from "../movies";
import hash53 from "../string_hash";
const Home = () => {
  const { movies } = React.useContext(MoviesContext);
  const { user, isAuthenticated } = useAuth0();
  const {screenSections, setScreenSections} = React.useState([]);
  //API
  useEffect(() => {
    if (isAuthenticated)
      axios
        .post(`${url}/api/users/add`, {
          first_name: user.name,
          last_name: "",
          email: user.email,
          // uid: hash53(user.email),
        })
        .then((data) => {
          console.log("data " ,  data.data.insertId);
          localStorage.setItem("uid", data.data.insertId);
        })
        .catch((err) => {
          console.log(err);
        })

  },[]);
  let screens = 5;
  // movies.forEach((m) => {
  //   if (m.screen > screens) screens = m.screen;
  // });


  // setScreenSections(prevState => {
  //   let newArrr = [...prevState];
  //   for (let i = 1; i <= screens; i++) {
  //     newArrr.push(
  //       <BasicTabs screenNo={i} movies={movies.filter((m) => m.screen = i)} />
  //     );
  //   }
  //   return newArrr;
  // });

  
  console.log('screenSections', screenSections);

  return (
    isAuthenticated && (
      <>
        <NavBar p={movies} />
        {screenSections}
        {/* <MovieScreen screenNo={1} /> */}
        <BasicTabs screenNo={1} movies={[movies.filter(m=>m.screen === 1)]} />
        <BasicTabs screenNo={2} movies={[movies.filter(m=>m.screen === 2)]} />
        <BasicTabs screenNo={3} movies={[movies.filter(m=>m.screen === 3)]} />
        <BasicTabs screenNo={4} movies={[movies.filter(m=>m.screen === 4)]} />
        <BasicTabs screenNo={5} movies={[movies.filter(m=>m.screen === 5)]} />

      </>
    )
  );
};
export default Home;
