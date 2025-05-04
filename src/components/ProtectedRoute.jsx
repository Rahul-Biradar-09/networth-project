import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};


const ProtectedAuthRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export { ProtectedRoute, ProtectedAuthRoute };
