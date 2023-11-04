import Article from "@/components/blog/article";
import Sidebar from "@/components/blog/sidebar";

export default function Post() {
    return (
        <>
            {/* Article */}
            <div className="max-w-[85rem] p-4 mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    <Article />
                    <Sidebar />
                </div>
            </div>
            {/* End Article */}
        </>

    )
}