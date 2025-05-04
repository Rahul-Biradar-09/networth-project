import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const temp = {};
    if (!form.email) temp.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Email is invalid.";
    if (!form.password) temp.password = "Password is required.";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const storedEmail = localStorage.getItem("authEmail");
    const storedPassword = localStorage.getItem("authPassword");

    if (form.email === storedEmail && form.password === storedPassword) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard");
    } else {
      setErrors({ general: "Invalid email or password." });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {errors.general && <p className="text-red-500 mb-2">{errors.general}</p>}

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border rounded pr-10"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <span
              className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>

        <div className="mt-4 text-center">
          Don't have an account?
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="ml-1 text-blue-600 hover:underline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;             

