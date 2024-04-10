import Image from "next/image";
import styles from "./about.module.css";

export const metadata = { 
    title: "About Page", 
    description: "About description" 
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>
                We create digital ideas that are bigger, bolder, braver and better.
            </h1>
            <p className={styles.desc}>
                We create digital ideas that are bigger, bolder, braver and better. We
                believe in good ideas flexibility and precission We’re world’s Our
                Special Team best consulting & finance solution provider. 
            </p>
        </div>
        <div className={styles.imgContainer}>
            <Image src="/about.png" alt="About Image" fill className={styles.img} />
        </div>
    </div>
  )
}

export default AboutPage