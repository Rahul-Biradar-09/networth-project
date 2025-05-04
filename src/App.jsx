import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/Dashboard";
import CustomerDetail from "./components/CustomerDetail";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute, ProtectedAuthRoute } from "./components/ProtectedRoute";

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <div className={!isAuthPage ? "pt-16" : ""}>{children}</div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          
          <Route
            path="/login"
            element={
              <ProtectedAuthRoute>
                <Login />
              </ProtectedAuthRoute>
            }
          />
          
          <Route
            path="/signup"
            element={
              <ProtectedAuthRoute>
                <SignUp />
              </ProtectedAuthRoute>
            }
          />
          
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/customer/:id"
            element={
              <ProtectedRoute>
                <CustomerDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer position="top-right" />
      </Layout>
    </Router>
  );
}

export default App;


