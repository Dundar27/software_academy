"use client";
import BlogHeader from "@/components/blog/blogHeader";
import BorderedCards from "@/components/blog/cards/borderedCards";
import { useContext } from "react";
import { PostContext } from "@/context/post";
import { ArrowRightCircle } from "react-feather";

export default function Blog() {
  let { state, setState } = useContext(PostContext);
  return (
    <div
      id="blog"
      className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      {/* <!-- Title --> */}
      <BlogHeader />
      {/* <!-- End Title --> */}

      {/* <!-- Grid --> */}
      <BorderedCards />
      {/* <!-- End Grid --> */}

      {/* <!-- More Card Button --> */}
      <div className="mt-12 text-center">
        <button
          type="button"
          className="inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-blue-600 hover:text-blue-700 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
          onClick={() => setState(state + 3)}
        >
          Read More <ArrowRightCircle />
        </button>
      </div>
      {/* <!-- End More Card Button --> */}
    </div>
  );
}
