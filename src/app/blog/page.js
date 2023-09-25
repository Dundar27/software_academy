import BlogHeader from "@/components/blog/blogHeader";
import BorderedCards from "@/components/blog/cards/borderedCards";
import Link from "next/link";
import { ArrowRightCircle } from "react-feather";

export default function Blog() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Title --> */}
      <BlogHeader />
      {/* <!-- End Title --> */}

      {/* <!-- Grid --> */}
      <BorderedCards />
      {/* <!-- End Grid --> */}

      {/* <!-- More Card Button --> */}
      <div className="mt-12 text-center">
        <Link
          className="inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-blue-600 hover:text-blue-700 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
          href="#"
        >
          Read More <ArrowRightCircle />
        </Link>
      </div>
      {/* <!-- End More Card Button --> */}
    </div>
  );
}
