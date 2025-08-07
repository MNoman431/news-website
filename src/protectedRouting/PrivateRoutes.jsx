// src/routes/PrivateRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth); // from authSlice

  return user ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
