"use client";
import Link from "next/link"
import Image from "next/image"
import { useContext } from "react"
import { PostContext } from "@/context/post"

export default function Sidebar() {
    let { posts } = useContext(PostContext);
    return (
        <>
            {/* Sidebar */}
            <div className="col-span-1 w-full h-full bg-gradient-to-r from-gray-50 via-transparent to-transparent">
                <div className="py-8 pl-6">

                    <div className="space-y-6">
                        {/* <!-- Media --> */}
                        {posts.map((post) => (
                            <Link className="group flex items-center gap-x-6" href={post.postUrl} key={post.id}>
                                <div className="grow">
                                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                                        {post.title}
                                    </span>
                                </div>

                                <div className="flex-shrink-0 rounded-lg overflow-hidden w-20 h-20">
                                    <Image width={100} height={100} className="w-full h-full object-cover rounded-lg" src={post.imageSrc} alt={post.imageAlt} />
                                </div>
                            </Link>
                        ))}
                        {/* <!-- End Media --> */}
                    </div>
                </div>
            </div>
            {/* End Sidebar */}
        </>
    )
}