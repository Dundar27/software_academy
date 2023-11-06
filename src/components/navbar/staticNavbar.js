import Link from "next/link";
import UserMenu from "./dropdown/userMenu";

export default function StaticNavbar() {
  return (
    <nav className="flex flex-wrap justify-start flex-nowrap z-50 w-full bg-white border-b text-sm py-2.5">
      <div
        className="max-w-7xl flex basis-full items-center w-full mx-auto px-4"
        aria-label="Global"
      >
        <div className="mr-5">
          <Link
            className="flex-none text-xl font-bold text-blue-500"
            href="/"
            aria-label="Brand"
          >
            WTA
          </Link>
        </div>

        <div className="flex items-center justify-end ml-auto">
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
