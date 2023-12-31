"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { Zap, User, Settings, LogOut, LogIn } from "react-feather";
import { AuthContext } from "@/context/auth";
import { auth } from "@/database/firebase";
import SignOut from "@/components/forms/signOut";
import { AppContext } from "@/context/app";

export default function UserMenu() {
  const [showDropDown, setSDD] = useState(false);
  const [mShow, setMShow] = useState(false);

  const { user } = useContext(AuthContext);
  const { notification } = useContext(AppContext);

  const LinkClass =
    "w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-50 hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 hover:ring-offset-white";


  const links = [
    {
      url: `/profile/${user ? user.displayName : null}`,
      icon: <User />,
      text: "Profile"
    },
    {
      url: "/account",
      icon: <Settings />,
      text: "Settings"
    },
  ]

  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <div
        className="hs-dropdown relative inline-flex"
        data-hs-dropdown-placement="bottom-right"
      >
        {user ? (
          <Link href={"/account"} className="mx-3 p-2 text-blue-600 rounded-xl hover:bg-gray-100 hover:text-blue-800">
            <Zap /> <span className="absolute top-5 left-10 font-bold">{notification}</span>
          </Link>
        ) : null}
        <button
          id="hs-dropdown-with-trigger"
          type="button"
          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 hover:outline-none hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 hover:ring-offset-white transition-all text-xs"
          onClick={() => setSDD(!showDropDown)}
        >
          <Image
            className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white"
            src={
              auth.currentUser
                ? user.photoURL
                  ? user.photoURL
                  : "/svg/next.svg"
                : "https://cdn-icons-png.flaticon.com/128/848/848043.png"
            }
            alt="User Profile"
            width={128}
            height={128}
            quality={100}
            priority
          />
        </button>

        <div
          className="absolute top-10 right-0 hs-dropdown-menu transition-[margin] duration min-w-[15rem] z-10 bg-white shadow-md rounded-lg p-2"
          aria-labelledby="hs-dropdown-with-header"
          style={showDropDown ? { display: "block" } : { display: "none" }}
        >
          {auth.currentUser ? (
            <>
              <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
                <p className="text-sm text-gray-500">Signed in as</p>
                <p className="text-sm font-medium text-gray-800">
                  {user.displayName}
                </p>
              </div>
              <div className="mt-2 py-2 first:pt-0 last:pb-0">
                {links.map((link, index) => (
                  <button type="button" onClick={() => setSDD(false)} key={index} className="w-full">
                    <Link className={LinkClass} href={link.url}>
                      {link.icon} {link.text}
                    </Link>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => { setMShow(true); setSDD(false) }}
                  className={LinkClass}
                >
                  <LogOut /> Logout
                </button>
              </div>
            </>
          ) : (
            <div className="mt-2 py-2 first:pt-0 last:pb-0">
              <button type="button" onClick={() => setSDD(false)} className="w-full">
                <Link className={LinkClass} href="/login">
                  <LogIn /> Login
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>

      <SignOut mShow={mShow} setMShow={setMShow} />
    </div>
  );
}
