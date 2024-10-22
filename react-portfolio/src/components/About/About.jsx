import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
<div className={styles.content}>
  <ul className={styles.aboutItems}>
    <li className={styles.aboutItem}>
        <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
           <p> I am a Frontend Developer with a passion for creating beautiful and functional user interfaces. I have experience with HTML, CSS, JavaScript, and React. I am always looking to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects and collaborate with other developers. 
            </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p> I am a Backend Developer with experience in Node.js, Express, and MongoDB. I have built RESTful APIs and worked on projects that require database management and server-side logic. I am always looking to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects and collaborate with other developers.
            </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
            <h3>UI Developer</h3>
            <p> I am a UI Developer with a passion for creating beautiful and functional user interfaces. I have experience with HTML, CSS, and JavaScript. I have worked on projects that require responsive design and cross-browser compatibility. I am always looking to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects and collaborate with other developers.
            </p>
            </div>
            </li>
            </ul>
            </div>
        </section>
    );
}