import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <img src="./assets/about/hero/avatar.webp" alt="avatar" className={styles.avatar} />
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Chris</h1>
                <p className={styles.description}>I'm a recent graduate of USYD coding bootcamp. Reach out if you'd like to learn more!</p>
                <a href="mailto:Chris.Reynolds0508@gmail.com" className={styles.contactBtn}>Contact me</a>
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
}