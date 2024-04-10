import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = (props) => {
    return (
        <div className={styles.container}>
            {props.Blog.map((blog, index) => (
                <div key={index}>
                    <div className={styles.top}>
                        {blog.image && <div className={styles.imgContainer}>
                            <Image src={blog.image?.url} alt="" fill className={styles.img} />
                        </div>}
                    </div>
                    <div className={styles.bottom}>
                        <h1 className={styles.title}>{blog.title}</h1>
                        <span className={styles.date}>01.01.2024</span>
                        <p className={styles.desc}>{blog.description.text}</p>
                        <Link className={styles.link} href={`/blog/${blog.slug}`}>READ MORE</Link>
                    </div>
                </div>        
            ))} 
        </div>
    )
}

export default PostCard