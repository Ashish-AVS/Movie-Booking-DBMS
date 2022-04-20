import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';


function ProtectedRoute({ component: Component, ...restOfProps }) {
    const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;

// https://www.youtube.com/watch?v=re3OIOr9dJI