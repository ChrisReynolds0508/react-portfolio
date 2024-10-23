import React from "react";
import styles from "./Experience.module.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

export const Experience = () => {
    return (
        <section id='experience' className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <ul>
                        <li>
                            <h3>
                                <FaHtml5 className={styles.html} /> HTML
                            </h3>
                        </li>
                        <li>
                            <IoLogoCss3  className={styles.css}/> CSS
                        </li>
                        <li>
                            <SiJavascript className={styles.javascript}/> JavaScript
                        </li>
                        <li>
                            <FaReact className={styles.react} /> React
                        </li>
                        <li>
                            <FaNode className={styles.node}/> Node.js
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
