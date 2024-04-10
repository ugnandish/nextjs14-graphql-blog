'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from './singlePost.module.css';
import { Suspense } from "react";
import {getSingleBlog} from "@/services";

function SinglePostPage({params}) {
    const [blogDetail, setBlogDetail] = useState(null);

    const getBlogDetail = async () => {
        const blogDetail = await getSingleBlog(params.slug);
        setBlogDetail(blogDetail);
        return;
    };

    useEffect(() => {
        getBlogDetail();
    }, []);

    return (
        <div className={styles.container}>
            {blogDetail && (
                <div>
                    <h1 className={styles.title}>{blogDetail.blogList.title}</h1>
                    <div className={styles.imgContainer}>
                        <Image src={blogDetail.blogList.image.url} alt="slug image" fill className={styles.img} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.detail}>
                            {blogDetail && (
                                <Suspense fallback={<div>Loading...</div>}></Suspense>
                            )}
                            <div className={styles.detailText}>
                                <span className={styles.detailTitle}>Published</span>
                                <span className={styles.detailValue}>10.04.2024</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            {blogDetail.blogList.description.text}
                        </div>
                    </div>
                </div>    
            )}
        </div>
    )
}
  
export default SinglePostPage