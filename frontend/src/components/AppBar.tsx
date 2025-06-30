import { useEffect, useState } from "react";
import { Avatar } from "./Avatar"
import { Link } from "react-router-dom"
import axios from "axios";
import type { AxiosResponse, AxiosError } from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const AppBar = () => {
  const [authorName, setAuthorName] = useState("")

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/user/me`, { 'headers': { 'Authorization': localStorage.getItem('token') } })
      .then((response: AxiosResponse) => {
        setAuthorName(response.data.user.name)
      })
        .catch((error: AxiosError) => {
          console.log(error);
        });
  }, [])

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
        <Avatar authorName={authorName} />
      </div>
    </div>
  );
}
