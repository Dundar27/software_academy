import Link from "next/link";
import UserMenu from "./dropdown/userMenu";

export default function StaticNavbar() {
  return (
    <nav className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b text-sm py-2.5 sm:py-4 dark:bg-slate-900 dark:border-gray-700">
      <div
        className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="mr-5 md:mr-8 w-full">
          <Link
            className="flex-none text-xl font-bold dark:text-white"
            href="/"
            aria-label="Brand"
          >
            Software Academy
          </Link>
        </div>

        <div className="w-full flex items-center justify-end ml-auto sm:gap-x-3 sm:order-3">
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
