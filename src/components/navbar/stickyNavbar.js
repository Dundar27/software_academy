import Link from "next/link";
import { defaultNavigation } from "./Navigation";
import { Info } from "react-feather";

export default function StickyNavbar() {
  return (
    <nav
      className="sticky w-full -top-px -mt-px bg-white text-black text-sm font-medium border-y border-gray-200 shadow-sm shadow-gray-200 py-2"
      aria-label="Jump links"
    >
      <div className="flex basis-full items-center mx-auto px-4">
        <div className="basis-1/2 snap-x flex items-center overflow-x-auto scrollbar-x px-4 py-2 mx-auto">
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
        <div className="basis-1/2">
          <div className="flex items-center p-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
            <Info className="mr-2"/>
            <div>
              <span className="font-medium">Info alert!</span> We have updated the app, contact us if you encounter problems.
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
