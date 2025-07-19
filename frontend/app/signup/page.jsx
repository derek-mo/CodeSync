import { signup } from "./actions";
import React from "react";

export default function Login() {
  return (
    <div className="bg-neutral-950 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-neutral-800 rounded-lg shadow border-neutral-600 dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <p className="text-xl font-bold">Create an account</p>
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required=""
                className="border-2 p-2 rounded-md"
              />
            </div>
            {/* <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required=""
                className="border-2 p-2 rounded-md"
              />
            </div> */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required=""
                className="border-2 p-2 rounded-md"
              />
            </div>
            {/* <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                required=""
                className="border-2 p-2 rounded-md"
              />
            </div> */}
            <button
              formAction={signup}
              className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
