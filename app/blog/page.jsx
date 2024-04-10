'use client'
import { useState, useEffect } from "react"
import {getBlog} from "@/services"
import PostCard from "@/components/postCard/postCard"
import styles from "./blog.module.css"

function BlogPage() {
    const [Blog, setBlog] = useState([])

    useEffect(() => {
        blogList()
    },[setBlog])

    const blogList = async () => {
        const result = await getBlog();
        setBlog(result?.blogLists)
    }

    return (
        <div className={styles.container}>  
            <PostCard Blog={Blog} />
        </div>
    )
}

export default BlogPage