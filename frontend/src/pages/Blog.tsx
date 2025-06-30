import { useParams } from "react-router"
import { AppBar } from "../components/AppBar";
import { useBlog } from "../hooks";
import { Avatar } from "../components/Avatar";
import { BlogSkeleton } from "../components/BlogSkeleton";

const Blog = () => {
    const { id } = useParams();

    const { loading, blog } = useBlog({
        id: id || ""
    })



    return <div className="flex flex-col items-center">
        <AppBar />
        {loading ? <div className="flex h-[90vh] w-auto justify-center">
            <BlogSkeleton />
        </div> :
            <div className="grid grid-cols-10 md:w-6xl w-screen pr-10 pl-10 md:pr-0 md:pl-0 mt-21 gap-6">
                <div className="col-span-6 flex flex-col gap-3">
                    <div className="text-4xl font-bold">{blog?.title}</div>
                    <div className="text-gray-500 font-semibold">Posted on December 3, 2023</div>
                    <div className="font-semibold text-gray-600">{blog?.content}</div>
                </div>
                <div className="col-span-4 flex flex-col gap-3">
                    <div className="font-semibold text-lg">Author</div>
                    <div className="flex gap-3">
                        <div className="flex flex-col justify-center"><Avatar authorName={blog?.author.name || "Anonymous User"} /></div>
                        <div className="flex flex-col">
                            <div className="text-2xl font-bold">{blog?.author.name}</div>
                            <div className="text-sm font-semibold text-gray-600">Master of mirth, purveyer of puns, and the funniest person in the kingdom</div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
}

export default Blog;


