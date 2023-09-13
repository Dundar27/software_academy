"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { auth } from "@/database/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { redirect } from "next/navigation";

export default function LoginF() {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const Login = async (e) => {
    e.preventDefault();

    const _error = document.getElementById("alert");

    await signInWithEmailAndPassword(auth, fields.email, fields.password)
      .then(() => {
        setTimeout(function () {
          redirect("/");
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);

        _error.style.display = "block";

        setTimeout(function () {
          _error.style.display = "none";
        }, 3000);
      });
  };

  const LoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const google_error_alert = document.getElementById("google-error-alert");

    await signInWithPopup(auth, provider)
      .then(() => {
        redirect("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);

        google_error_alert.style.display = "block";
      });
  };

  return (
    <div className="mt-5">
      <button
        type="button"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        onClick={LoginWithGoogle}
      >
        <Image
          src="/svg/google.svg"
          width={18}
          height={18}
          alt="Google Svg is not found"
        />
        Login with Google
      </button>

      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
        Or
      </div>

      {/* <!-- Form --> */}
      <form onSubmit={Login} method="POST">
        <div className="grid gap-y-4">
          {/* <!-- Form Group --> */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2 dark:text-white"
            >
              Email address
            </label>
            <div className="block">
              <input
                type="email"
                id="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                className="outline-none py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                required
                aria-describedby="email-error"
              />
            </div>
          </div>
          {/* <!-- End Form Group --> */}

          {/* <!-- Form Group --> */}
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm mb-2 dark:text-white"
              >
                Password
              </label>
              <Link
                className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                href="/password-reset"
              >
                Forgot password?
              </Link>
            </div>
            <div className="block">
              <input
                type="password"
                id="password"
                name="password"
                value={fields.password}
                onChange={handleChange}
                className="outline-none py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                required
                aria-describedby="password-error"
                pattern="[a-zA-Z0-9.]{8,24}"
                minLength={8}
                maxLength={24}
              />
            </div>
          </div>
          {/* <!-- End Form Group --> */}

          {/* <!-- Checkbox --> */}
          {/* <div className="flex items-center">
            <div className="flex">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="remember-me" className="text-sm dark:text-white">
                Remember me
              </label>
            </div>
          </div> */}
          {/* <!-- End Checkbox --> */}

          <button
            type="submit"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          >
            Login
          </button>
        </div>
      </form>
      {/* <!-- End Form --> */}
      <div
        className="w-1/4 fixed top-5 left-0 right-0 mx-auto bg-red-50 border border-red-200 text-sm text-red-600 rounded-md p-4"
        role="alert"
        id="alert"
        style={{ display: "none" }}
      >
        <span className="font-bold">Info</span> Email address or password is
        incorrect. Make sure you entered correctly
      </div>
      <div
        className="w-1/4 fixed top-5 left-0 right-0 mx-auto bg-red-50 border border-red-200 text-sm text-red-600 rounded-md p-4"
        role="alert"
        id="google-error-alert"
        style={{ display: "none" }}
      >
        <span className="font-bold">Error</span> An error occurred while this
        operation was in progress, please try again later.
      </div>
    </div>
  );
}
