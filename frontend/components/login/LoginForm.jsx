import { login } from "./actions";
import React from "react";

export default function LoginForm() {
  return (
    <div className="bg-neutral-950 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-neutral-800 rounded-lg shadow border-neutral-600 dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <p className="text-xl font-bold">Login to your account</p>
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Username</label>
              <input
                type="email"
                name="email"
                id="email"
                required=""
                className="border-2 p-2 rounded-md"
              />
            </div>
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
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-neutral-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-neutral-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-white">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-neutral-600 hover:underline dark:text-white"
              >
                Forgot password?
              </a>
            </div>
            <button
              formAction={login}
              className="w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
            >
              Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-white">
              Don&apos;t have an account yet?{" "}
              <a
                href="/signup"
                className="font-medium text-neutral-600 hover:underline dark:text-white"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
