import Image from "next/image"
import styles from "./Home.module.css";
import Link from "next/link";

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Creative Thoughts</h1>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                    blanditiis adipisci minima reiciendis a autem assumenda dolore.
                </p>
                <div className={styles.buttons}>
                    <Link href="/blog" className={styles.button}>Learn More</Link>
                    <Link href="/contact" className={styles.button}>Contact</Link>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
            </div>
        </div>  
    );
}
