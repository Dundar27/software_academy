"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, /* Share, MessageCircle, Heart */ } from "react-feather";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { PostContext } from "@/context/post";

export default function Article() {

    const params = useParams();
    let { posts } = useContext(PostContext);

    const post = posts[params.id];

    return (
        <>
            {/* <!-- Content --> */}
            <div className="lg:col-span-2">
                <div className="p-6">
                    <div className="space-y-6">
                        <Link className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline" href="/blog">
                            <ArrowLeft />
                            Back to Blog
                        </Link>

                        <h2 className="text-4xl font-bold">{post.title}</h2>

                        <div className="flex items-center gap-x-5">
                            <Link className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href={`/blog/categories/${post.category}/${post.id}`}>
                                {post.category}
                            </Link>
                            <p className="text-sm text-gray-800">{post.date}</p>
                        </div>

                        <figure>
                            <Image width={600} height={100} className="w-full object-cover rounded-xl" src={post.imageSrc} alt={post.imageAlt} />
                            <figcaption className="mt-3 text-sm text-center text-gray-500">
                                {post.imageTitle}
                            </figcaption>
                        </figure>

                        <div className="text-lg text-justify text-gray-800">{post.content}</div>

                        {/* <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                            <div>
                                <Link className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
                                    Plan
                                </Link>
                                <Link className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
                                    Web development
                                </Link>
                                <Link className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
                                    Free
                                </Link>
                                <Link className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
                                    Team
                                </Link>
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                                <div className="hs-tooltip inline-block">
                                    <button type="button" className="hs-tooltip-toggle py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm">
                                        <Heart />
                                        875
                                        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm" role="tooltip">
                                            Like
                                        </span>
                                    </button>
                                </div>

                                <div className="hs-tooltip inline-block">
                                    <button type="button" className="hs-tooltip-toggle py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm">
                                        <MessageCircle />
                                        16
                                        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm" role="tooltip">
                                            Comment
                                        </span>
                                    </button>
                                </div>

                                <div className="block h-3 border-r border-gray-300 mx-1.5 dark:border-gray-600"></div>

                                <div className="hs-dropdown inline-flex">
                                    <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm">
                                        <Share />
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- End Content --> */}
        </>
    )
}