import { AppBar } from "../components/AppBar"
import { useState } from "react";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Publish = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return <div className="flex flex-col items-center">
        <AppBar />
        <div className="w-screen pr-10 pl-10 flex flex-col items-center gap-3 mt-10">
            <input onChange={(e) => {
                setTitle(e.target.value)
            }} className="block p-2.5 md:w-3xl w-full text-2xl rounded-lg outline-none font-semibold text-gray-600 border border-gray-200 h-17" placeholder="Title" />
            <textarea onChange={(e) => {
                setContent(e.target.value)
            }} className="block p-2.5 md:w-3xl w-full text-md rounded-lg outline-none font-semibold text-gray-600 border border-gray-200 h-32" placeholder="Tell your story..." />
            <button onClick={() => {
                axios.post(`${BACKEND_URL}/api/v1/blog`, {
                    title,
                    content,
                }, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                })
                    .then(async function (response) {
                        if (response.status === 200) {
                            toast.success('Blog created successfully!')
                            await new Promise((r) => setTimeout(r, 1.5 * 1000))
                            navigate(`/blog/${response.data.id}`)
                        }
                    })
                    .catch(function () {
                        toast.error("That didn't work.")
                    });
            }} className="inline-flex  justify-center items-center py-2.5 px-4 text-md font-medium text-center text-white bg-green-600 rounded-lg  hover:bg-green-700 w-32">
                Post blog
            </button>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    </div>
}

export default Publish