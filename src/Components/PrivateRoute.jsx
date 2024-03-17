// PrivateRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  if (currentUser !== null && currentUser !== undefined) {
    return children;
  } else {
    // Handle the loading state or redirect to login
    return <Navigate to={"/login"} />;
  }
};

export default PrivateRoute;
