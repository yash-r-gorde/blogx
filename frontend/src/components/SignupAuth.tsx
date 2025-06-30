import { useState } from "react"
import { InputLabel } from "./InputLabel"
import { Link, useNavigate } from "react-router-dom"
import type { Signup } from "@yash-r-gorde/blogx-common"
import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import toast, { Toaster } from 'react-hot-toast';

export const SignupAuth = () => {
    const navigate = useNavigate()
    const [postInput, setPostInputs] = useState<Signup>({
        name: "",
        email: "",
        password: ""
    })

    function sendRequest() {
        axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInput)
            .then(async function (response) {
                localStorage.setItem('token', `Bearer ${response.data.jwt}`)
                toast.success('Successfully toasted!')
                await new Promise(resolve => setTimeout(resolve, 1 * 1000));
                navigate('/blogs')
            })
            .catch(function (error) {
                console.error(error)
                toast.error("That didn't work.")
            });
    }
    return <div className="flex flex-col gap-4 h-screen justify-center items-center">
        <div className="flex flex-col items-center mb-3">
            <h1 className="text-4xl font-bold">Create an account</h1>
            <h2 className="text-lg font-lg text-gray-400">
                Already have an account?
                <Link to="/signin" className="underline ml-1">Sign in</Link>
            </h2>
        </div>
        <InputLabel onChange={e => (setPostInputs(c => ({ ...c, name: e.target.value })))} label="Name" placeholder="Enter your username" />
        <InputLabel onChange={e => (setPostInputs(c => ({ ...c, email: e.target.value })))} label="Email" placeholder="yashgorde@example.com" />
        <InputLabel onChange={e => (setPostInputs(c => ({ ...c, password: e.target.value })))} label="Password" placeholder="12345678" type="password" />
        <button onClick={sendRequest} type="button" className="text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5  dark:focus:ring-gray-700 dark:border-gray-700 w-sm">Sign up</button>
        <Toaster />
    </div>
}