import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import login from "../assets/images/login.png";
function Login() {
  return (
    <div class="min-h-screen flex fle-col items-center justify-center">
      <div class="py-6 px-4">
        <div class="grid lg:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          <div class="border border-slate-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-lg:mx-auto">
            <form class="space-y-6">
              <div class="mb-12">
                <h1 class="text-slate-900 text-3xl font-semibold flex flex-row items-center gap-3">
                  <img src={logo} className="w-14" alt="" />
                  Log in
                </h1>
                <p class="text-slate-600 text-[15px] mt-6 leading-relaxed">
                  Log in to your account to access Precious Gems Elementary
                  School Web-Based Billing System
                </p>
              </div>

              <div>
                <label class="text-slate-900 text-sm font-medium mb-2 block">
                  User name
                </label>
                <div class="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    class="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-red-600"
                    placeholder="Enter user name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <label class="text-slate-900 text-sm font-medium mb-2 block">
                  Password
                </label>
                <div class="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    class="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-red-600"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              <div class="!mt-12">
                <button
                  type="button"
                  class="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none cursor-pointer"
                >
                  <Link to={"/financial-reports"}>Sign in </Link>
                </button>
                <p class="text-sm !mt-6 text-center text-slate-600">
                  Don't have an account{" "}
                  <a
                    href="javascript:void(0);"
                    class="text-red-600 font-medium hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div class="max-lg:mt-8">
            <img
              src={login}
              class="w-full aspect-[71/50] max-lg:w-4/5 mx-auto block object-cover"
              alt="login img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
