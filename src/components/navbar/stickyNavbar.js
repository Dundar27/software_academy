import Link from "next/link";
import { defaultNavigation } from "./Navigation";

export default function StickyNavbar() {
  return (
    <nav
      className="sticky -top-px bg-white text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 py-2 -mt-px"
      aria-label="Jump links"
    >
      <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto scrollbar-x px-4 py-2 mx-auto">
        {defaultNavigation.map((link) => (
          <div
            className="snap-center shrink-0 pr-5"
            key={link.id}
          >
            <Link
              className="inline-flex items-center gap-x-2 hover:text-gray-500"
              href={link.url}
            >
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
