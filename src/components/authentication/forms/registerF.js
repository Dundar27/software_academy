"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { auth } from "@/database/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function RegisterF() {
  const [fields, setFields] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const confirm_password_error = document.getElementById(
    "confirm_password-error"
  );
  const email_verify_alert = document.getElementById("alert");
  const email_error = document.getElementById("email-error");
  const verify_error_alert = document.getElementById("verify-error-alert");
  const profile_error_alert = document.getElementById("profile-error-alert");
  const google_error_alert = document.getElementById("google-error-alert");

  async function Register(e) {
    e.preventDefault();

    if (fields.password !== fields.confirm_password) {
      confirm_password_error.style.display = "block";
    } else {
      await createUserWithEmailAndPassword(auth, fields.email, fields.password)
        .then(async () => {
          await updateProfile(auth.currentUser, {
            displayName: fields.username,
            photoURL: "https://cdn-icons-png.flaticon.com/128/848/848043.png",
          }).catch((error) => {
            profile_error_alert.style.display = "block";
            console.log(error);
          });

          await sendEmailVerification(auth.currentUser)
            .then(() => {
              email_verify_alert.style.display = "block";
              setTimeout(function () {
                router.push("/");
              }, 3000);
            })
            .catch((error) => {
              verify_error_alert.style.display = "block";
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode, errorMessage);

          email_error.style.display = "block";
        });
    }
  }

  const RegisterWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider)
      .then(async () => {
        await updateProfile(auth.currentUser, {
          displayName: fields.username,
          photoURL: "https://cdn-icons-png.flaticon.com/128/848/848043.png",
        }).catch((error) => {
          profile_error_alert.style.display = "block";
          console.log(error);
        });

        await sendEmailVerification(auth.currentUser)
          .then(() => {
            email_verify_alert.style.display = "block";
            setTimeout(function () {
              router.push("/");
            }, 3000);
          })
          .catch((error) => {
            verify_error_alert.style.display = "block";
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);

        google_error_alert.style.display = "block";
      });
  };

  return (
    <div>
      <button
        type="button"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
        onClick={RegisterWithGoogle}
      >
        <Image
          src="/svg/google.svg"
          width={18}
          height={18}
          alt="Google Svg is not found"
        />
        Register with Google
      </button>

      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6">
        Or
      </div>

      {/* <!-- Form --> */}
      <form onSubmit={Register} method="POST">
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
            <p
              className="text-xs text-red-600 mt-2"
              id="email-error"
              style={{ display: "none" }}
            >
              This email address has already been used
            </p>
          </div>
          {/* <!-- End Form Group --> */}

          {/* <!-- Form Group --> */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm mb-2"
            >
              Username
            </label>
            <div className="block">
              <input
                type="text"
                id="username"
                name="username"
                value={fields.username}
                onChange={handleChange}
                className="outline-none py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-describedby="username-error"
                pattern="[a-zA-Z0-9.]{3,16}"
                minLength={3}
                maxLength={16}
              />
            </div>
            <p className="text-xs text-gray-600 mt-2" id="username-error">
              You can use uppercase, lowercase letters and periods. <br /> Min 3
              Max 16 character, character count: {fields.username.length}
            </p>
          </div>
          {/* <!-- End Form Group --> */}

          {/* <!-- Form Group --> */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm mb-2"
            >
              Password
            </label>
            <div className="block">
              <input
                type="password"
                id="password"
                name="password"
                value={fields.password}
                onChange={handleChange}
                className="outline-none py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-describedby="password-error"
                pattern="[a-zA-Z0-9.]{8,24}"
                minLength={8}
                maxLength={24}
              />
            </div>
            <p className="text-xs text-gray-600 mt-2">
              You can use uppercase, lowercase letters and periods. <br /> Min 8
              Max 24 character, character count: {fields.password.length}
            </p>
          </div>
          {/* <!-- End Form Group --> */}

          {/* <!-- Form Group --> */}
          <div>
            <label
              htmlFor="confirm_password"
              className="block text-sm mb-2"
            >
              Confirm Password
            </label>
            <div className="block">
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={fields.confirm_password}
                onChange={handleChange}
                className="outline-none py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-describedby="confirm_password-error"
                pattern="[a-zA-Z0-9.]{8,24}"
                minLength={8}
                maxLength={24}
              />
            </div>
            <p
              className="text-xs text-red-600 mt-2"
              id="confirm_password-error"
              style={{ display: "none" }}
            >
              Password does not match the password
            </p>
          </div>
          {/* <!-- End Form Group --> */}

          {/* <!-- Checkbox --> */}
          <div className="flex items-center">
            <div className="flex">
              <input
                id="accept_policy"
                name="accept_policy"
                type="checkbox"
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                required
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="accept_policies"
                className="text-sm"
              >
                I accept the{" "}
                <Link
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>
          </div>
          {/* <!-- End Checkbox --> */}

          <button
            type="submit"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            Register
          </button>
        </div>
      </form>
      {/* <!-- End Form --> */}
      <div
        className="w-1/4 fixed top-5 left-0 right-0 mx-auto bg-blue-50 border border-blue-200 text-sm text-blue-600 rounded-md p-4"
        role="alert"
        id="alert"
        style={{ display: "none" }}
      >
        <span className="font-bold">Info</span> We have sent you an email to
        verify your email
      </div>
      <div
        className="w-1/4 fixed top-5 left-0 right-0 mx-auto bg-red-50 border border-red-200 text-sm text-red-600 rounded-md p-4"
        role="alert"
        id="verify-error-alert"
        style={{ display: "none" }}
      >
        <span className="font-bold">Info</span> We did not send you a
        verification email.
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
      <div
        className="w-1/4 fixed top-5 left-0 right-0 mx-auto bg-red-50 border border-red-200 text-sm text-red-600 rounded-md p-4"
        role="alert"
        id="profile-error-alert"
        style={{ display: "none" }}
      >
        <span className="font-bold">Error</span> An error occurred while
        creating your profile
      </div>
    </div>
  );
}
