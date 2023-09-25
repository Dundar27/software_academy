"use client";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/database/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordRF() {
  const [fields, setFields] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const PasswordReset = (e) => {
    e.preventDefault();

    const success_alert = document.getElementById("s-alert");
    const error_alert = document.getElementById("e-alert");

    sendPasswordResetEmail(auth, fields.email)
      .then(() => {
        success_alert.style.display = "block";
        setTimeout(function () {
          success_alert.style.display = "none";
          router.push("/login");
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        error_alert.style.display = "block";
        setTimeout(function () {
          error_alert.style.display = "none";
        }, 3000);
      });
  };

  return (
    <div className="mt-5">
      {/* <!-- Form --> */}
      <form onSubmit={PasswordReset} method="POST">
        <div className="grid gap-y-4">
          {/* <!-- Form Group --> */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2"
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
                className="outline-none py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-describedby="email-error"
              />
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="email-error">
              Please include a valid email address so we can get back to you
            </p>
          </div>
          {/* <!-- End Form Group --> */}

          <button
            type="submit"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            Reset password
          </button>
        </div>
      </form>
      {/* <!-- End Form --> */}

      <div
        className="w-1/4 fixed top-5 left-0 right-0 mx-auto bg-blue-50 border border-blue-200 text-sm text-blue-600 rounded-md p-4"
        role="alert"
        id="s-alert"
        style={{ display: "none" }}
      >
        <span className="font-bold">Info</span> Email sent to reset password
      </div>
      <div
        className="w-1/4 fixed top-5 left-0 right-0 mx-auto bg-red-50 border border-red-200 text-sm text-red-600 rounded-md p-4"
        role="alert"
        id="e-alert"
        style={{ display: "none" }}
      >
        <span className="font-bold">Erro</span> An error occurred while sending
        the email, try again later
      </div>
    </div>
  );
}
