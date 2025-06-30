import { Avatar } from "./Avatar";
import { Circle } from "./Circle";
import { Link } from "react-router";

interface BlogCardProps {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishDate: string;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}><div className="border-b-1 border-gray-200 pb-10 mt-7 cursor-pointer">
        <div className="flex items-center gap-2 mb-1">
            <div className="">
                <Avatar authorName={authorName} />
            </div>
            <div className="font-medium">
                {authorName}
            </div>
            <div className="">
                <Circle />
            </div>
            <div className="text-gray-500 font-medium">
                {publishDate}
            </div>
        </div>
        <div className="text-xl font-bold">
            {title}
        </div>
        <div className="text-base text-gray-600 font-medium mb-4">
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
        </div>
        <div className="text-gray-500 text-sm font-medium">
            {Math.ceil(content.length / 100) + " min(s) read"}
        </div>
    </div>
    </Link>
}
