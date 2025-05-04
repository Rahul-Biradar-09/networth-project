import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    //localStorage.removeItem("authEmail");
    //localStorage.removeItem("authPassword");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-300 shadow z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1
          className="text-xl font-bold cursor-pointer text-blue-600"
          onClick={() => navigate("/dashboard")}
        >
          CrediKhaata
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

