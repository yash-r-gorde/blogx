export const BlogSkeleton = () => {
    return <div className="flex flex-col items-center animate-pulse">
        <div className="grid grid-cols-10 md:w-6xl w-screen pr-10 pl-10 md:pr-0 md:pl-0 mt-21 gap-21">
            <div className="col-span-6 flex flex-col gap-3">
                <div className="h-10 bg-gray-200 rounded-full w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                <div className="h-21 bg-gray-200 rounded-2xl"></div>
            </div>
            <div className="col-span-4 flex flex-col gap-7">
                <div className="h-5 bg-gray-200 rounded-full w-1/3"></div>
                <div className="flex gap-3">
                    <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
                    <div className="flex flex-col gap-2">
                        <div className="h-3 w-32 bg-gray-200 rounded-full"></div>
                        <div className="h-3 w-83 bg-gray-200 rounded-full"></div>
                        <div className="h-3 w-21 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}