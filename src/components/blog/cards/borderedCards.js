import { PostContext } from "@/context/post";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function BorderedCards() {
  let { state, posts } = useContext(PostContext);
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* <!-- Card --> */}
      {posts.slice(0, state).map((post) => (
        <Link
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
          href={post.postUrl}
          key={post.id}
        >
          <div className="aspect-w-16 aspect-h-11">
            <Image
              className="w-full object-cover rounded-xl"
              src={post.imageSrc}
              alt={post.imageAlt}
              title={post.imageTitle}
              width={500}
              height={300}
              priority
              style={{height: 300}}
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h3>
            <p className="mt-5 text-gray-600">{post.description}</p>
          </div>
          <div className="mt-auto flex flex-row justify-between items-center gap-x-3 p-1">
            <div className="flex items-center justify-between">
              <Image
                className="w-8 h-8 rounded-full"
                src={post.authorProfileUrl}
                alt="Author Profile Photo"
                width={300}
                height={300}
                priority
              />
              <h5 className="text-sm text-gray-800 p-2">{post.authorName}</h5>
            </div>
            <span className="text-sm text-gray-700 p-2">{post.date}</span>
          </div>
        </Link>
      ))}

      {/*  <!-- End Card --> */}
    </div>
  );
}
