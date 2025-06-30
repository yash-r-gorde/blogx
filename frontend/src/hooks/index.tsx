import { useEffect, useState } from "react"
import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface Blog {
    content: string;
    title: string;
    author: {
        name: string;
    };
    id: string;
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, { 'headers': { 'Authorization': localStorage.getItem('token') } })
            .then((response: AxiosResponse) => {
                setBlogs(response.data.posts)
                setLoading(false)
            })
            .catch((error: AxiosError) => {
                console.log(error);
            });
    }, [])

    return {
        loading,
        blogs
    }
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, { 'headers': { 'Authorization': localStorage.getItem('token') } })
            .then((response: AxiosResponse) => {
                setBlog(response.data.post)
                setLoading(false)
            })
            .catch((error: AxiosError) => {
                console.log(error);
            });
    }, [])

    return {
        loading,
        blog
    }
}