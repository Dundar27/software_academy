"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { Zap, User, Settings, LogOut, LogIn } from "react-feather";
import { AuthContext } from "@/context/auth";
import { auth } from "@/database/firebase";
import { signOut } from "firebase/auth";

export default function UserMenu() {
  const [showDropDown, setSDD] = useState(false);
  let { user, addUser } = useContext(AuthContext);
  console.log(user)
  const LinkClass =
    "w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300";

  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <div
        className="hs-dropdown relative inline-flex"
        data-hs-dropdown-placement="bottom-right"
      >
        <button
          id="hs-dropdown-with-header"
          type="button"
          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
          onClick={() => setSDD(!showDropDown)}
        >
          <Image
            className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
            src={
              auth.currentUser
                ? user.photoURL 
                : "https://cdn-icons-png.flaticon.com/128/848/848043.png"
            }
            alt="User Profile"
            width={128}
            height={128}
            quality={100}
          />
        </button>

        <div
          className="absolute top-10 right-0 hs-dropdown-menu transition-[margin] duration min-w-[15rem] z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
          aria-labelledby="hs-dropdown-with-header"
          style={showDropDown ? { display: "block" } : { display: "none" }}
        >
          {auth.currentUser ? (
            <>
              <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Signed in as
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  {user.displayName}
                </p>
              </div>
              <div className="mt-2 py-2 first:pt-0 last:pb-0">
                <Link className={LinkClass} href="/account">
                  <Zap /> Notifications
                </Link>
                <Link
                  className={LinkClass}
                  href={`/profile/${user.displayName}`}
                >
                  <User /> Profile
                </Link>
                <Link className={LinkClass} href="/account/settings">
                  <Settings /> Account Settings
                </Link>
                <button
                  type="button"
                  className={LinkClass}
                  onClick={() =>
                    signOut(auth)
                      .then(() => {
                        addUser(null);
                        window.location.reload();
                      })
                      .catch((e) => {
                        alert("Please try again because logout failed");
                        console.log(e);
                      })
                  }
                >
                  <LogOut /> Logout
                </button>
              </div>
            </>
          ) : (
            <div className="mt-2 py-2 first:pt-0 last:pb-0">
              <Link className={LinkClass} href="/login">
                <LogIn /> Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
