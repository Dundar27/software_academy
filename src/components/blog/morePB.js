
import { PostContext } from "@/context/post";
import { useContext } from "react";
import { ArrowRightCircle } from "react-feather";

export default function MorePostButton() {

    let { state, setState } = useContext(PostContext);

    return (
        <div className="mt-12 text-center">
            <button
                type="button"
                className="inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-blue-600 hover:text-blue-700 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                onClick={() => setState(state + 3)}
            >
                Read More <ArrowRightCircle />
            </button>
        </div>
    )
}