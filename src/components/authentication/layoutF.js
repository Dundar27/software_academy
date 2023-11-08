"use client";
import HeaderF from "./headerF";
import { usePathname } from "next/navigation";
import LoginF from "./forms/loginF";
import RegisterF from "./forms/registerF";
import PasswordRF from "./forms/passwordRF";

export default function LayoutF() {
  const params = usePathname();

  const WhichHeader = () => {
    switch (params) {
      case "/login":
        return (
          <HeaderF
            title="Login"
            text="Don't have an account yet?"
            link="/register#register"
            link_text="Register here"
          />
        );
      case "/register":
        return (
          <HeaderF
            title="Register"
            text="Already have an account?"
            link="/login#login"
            link_text="Login here"
          />
        );
      case "/password-reset":
        return (
          <HeaderF
            title="Forgot Password ?"
            text="Remember your password?"
            link="/login#login"
            link_text="Login here"
          />
        );
      default:
        return (
          <HeaderF
            title="Login"
            text="Don't have an account yet?"
            link="/register#register"
            link_text="Register here"
          />
        );
    }
  };

  const WhichForm = () => {
    switch (params) {
      case "/login":
        return <LoginF forward="/" />;
      case "/register":
        return <RegisterF forward="/" />;
      case "/password-reset":
        return <PasswordRF />;
      default:
        return <LoginF />;
    }
  };

  return (
    <main className="flex items-center">
      <div className="w-full max-w-md mx-auto p-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="p-4">
            {WhichHeader()}

            <div className="mt-5">{WhichForm()}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
