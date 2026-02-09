import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/images/logo.jpg";
import login from "../assets/images/login.png";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome, admin!",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        navigate("/financial-reports");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid username or password",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="py-6 px-4">
        <div className="grid lg:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          <div className="border border-slate-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-lg:mx-auto">
            <div className="mb-12">
              <h1 className="text-slate-900 text-3xl font-semibold flex flex-row items-center gap-3">
                <img src={logo} className="w-14" alt="" />
                Log in
              </h1>
              <p className="text-slate-600 text-[15px] mt-6 leading-relaxed">
                Log in to your account to access Precious Gems Elementary School
                Web-Based Billing System
              </p>
            </div>

            <div className="mb-4">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                User name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-red-600"
                placeholder="Enter user name"
              />
            </div>

            <div className="mb-4">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-red-600"
                placeholder="Enter password"
              />
            </div>

            <div className="!mt-12">
              <button
                type="button"
                onClick={handleLogin}
                className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none cursor-pointer"
              >
                Sign in
              </button>
              
            </div>
          </div>

          <div className="max-lg:mt-8">
            <img
              src={login}
              className="w-full aspect-[71/50] max-lg:w-4/5 mx-auto block object-cover"
              alt="login img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
