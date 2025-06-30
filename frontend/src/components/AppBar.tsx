import { Avatar } from "./Avatar"
import { Link } from "react-router-dom"

export const AppBar = () => {
  return (
    <div className="flex items-center justify-between border-b-1 border-gray-200 w-screen pt-3 pb-3 pr-10 pl-10">
      <Link to="/blogs">
        <div className="text-2xl font-semibold cursor-pointer">BlogX</div>
      </Link>
      <div className="flex">
        <Link to="/publish">
          <button
            type="button"
            className="text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
          >
            Publish
          </button>
        </Link>
        <Avatar authorName={"Yash Gorde"} size={10} />
      </div>
    </div>
  );
}
