"use client";
/* import BlogHeader from "@/components/blog/blogHeader"; */
import BorderedCards from "@/components/blog/cards/borderedCards";
import { useContext } from "react";
import { PostContext } from "@/context/post";
import { ArrowRightCircle } from "react-feather";
import SearchB from "@/components/forms/searchB";

export default function Blog() {
  let { state, setState } = useContext(PostContext);
  return (
    <div
      id="blog"
      className="w-full px-4 py-10 mx-auto"
    >
      {/* <!-- Title --> */}
      {/* <BlogHeader /> */}
      {/* <!-- End Title --> */}

      <SearchB
        title="The Blog"
        description={`Hello, welcome to our Web Technologies Academy blog page! It is a resource      
                    platform full of information that appeals to beginners and experienced
                    professionals in the software world. Here you can find many interesting
                    articles that will inform you about various programming languages,
                    frameworks, software development processes and more.`}
        areThereTags={true}
      />

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
