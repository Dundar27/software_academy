import { PostContext } from "@/context/post";
import Link from "next/link";
import { useContext } from "react";
import { Database, Globe, Layers, Search, Sidebar, Star, Zap } from "react-feather";

export default function SearchB({ title, description, areThereTags = true }) {

    const tagClass = `m-1 p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle 
                hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm`;

    const tags = [
        {
            class: tagClass,
            href: "/blog/category/guide",
            icon: <Star />,
            text: "Guide"
        },
        {
            class: tagClass,
            href: "/blog/category/front-end",
            icon: <Sidebar />,
            text: "Front End"
        },
        {
            class: tagClass,
            href: "/blog/category/back-end",
            icon: <Layers />,
            text: "Back End"
        },
        {
            class: tagClass,
            href: "/blog/category/fullstack",
            icon: <Globe />,
            text: "Fullstack"
        },
        {
            class: tagClass,
            href: "/blog/category/api",
            icon: <Zap />,
            text: "Api"
        },
        {
            class: tagClass,
            href: "/blog/category/data-base",
            icon: <Database />,
            text: "Data Base"
        },
    ]

    let { query, setQuery } = useContext(PostContext);

    return (
        <>
            {/* <!-- Hero --> */}
            <div className="overflow-hidden">
                <div className="max-w-[85rem] mx-auto px-6 py-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-gray-800">
                            {title}
                        </h1>

                        <p className="mt-3 text-gray-600">
                            {description}
                        </p>

                        <div className="mt-10 mx-auto max-w-xl">
                            {/* <!-- Form --> */}
                            <form>
                                <div className="z-10 flex space-x-3 p-1 bg-white border rounded-lg shadow-lg shadow-gray-100">
                                    <div className="flex-[1_0_0%]">
                                        <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium"><span className="sr-only">Search article</span></label>
                                        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" name="hs-search-article-1" id="hs-search-article-1" className="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 outline-none" placeholder="Search article" />
                                    </div>
                                    <div className="flex-[0_0_auto]">
                                        <button type="button" className="p-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                                            <Search />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- End Form --> */}
                        </div>

                        {areThereTags ? (
                            <div className="mt-6">
                                {tags.map((tag, i) => (
                                    <Link key={i} className={tag.class} href={tag.href}>
                                        {tag.icon}{tag.text}
                                    </Link>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            {/* <!-- End Hero --> */}
        </>
    )
}