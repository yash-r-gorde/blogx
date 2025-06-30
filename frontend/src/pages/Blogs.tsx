import { BlogCard } from "../components/BlogCard"
import { AppBar } from "../components/AppBar"
import { useBlogs } from "../hooks"
import { BlogsSkeleton } from "../components/BlogsSkeleton"

const Blogs = () => {
    const { loading, blogs } = useBlogs()
    return <div className="flex items-center w-[96vw] flex-col">
        <AppBar />
        {loading ? <div className="max-w-4xl lg:pl-0 lg:pr-0 pl-10 pr-10">
            <BlogsSkeleton/>
            <BlogsSkeleton/>
            <BlogsSkeleton/>
            <BlogsSkeleton/>
            <BlogsSkeleton/>
        </div> :
            <div className="max-w-4xl lg:pl-0 lg:pr-0 pl-10 pr-10">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id}
                        id={blog.id}
                        authorName={blog.author.name}
                        title={blog.title}
                        content={blog.content}
                        publishDate={"Dec 3, 2023"}
                    />
                ))}
            </div>
        }
    </div>
}

export default Blogs

