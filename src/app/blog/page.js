"use client";
/* import BlogHeader from "@/components/blog/blogHeader"; */
import BorderedCards from "@/components/blog/cards/borderedCards";
import SearchB from "@/components/forms/searchB";
import MorePostButton from "@/components/blog/morePB";

export default function Blog() {
  return (
    <div className="w-full px-4 py-10 mx-auto">

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
      <MorePostButton />
      {/* <!-- End More Card Button --> */}
    </div>
  );
}
