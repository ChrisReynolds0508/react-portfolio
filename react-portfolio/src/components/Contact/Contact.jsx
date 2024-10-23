import React from "react";
import styles from "./Contact.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
    return (
       <footer id='contact' className={styles.container}>
        <div className={styles.text}>
              <h2 className={styles.text}>Contact</h2>

              <p>Feel free to reach out!</p>
              </div>
              <div className={styles.contact}>
                <ul>
                     <li><a href="mailto:Chris.Reynolds0508@Gmail.com"><MdOutlineMailOutline /></a>
                        </li>
                        <li><a href="tel:+61478043814"><FaPhoneFlip /></a>
                        </li>
                        <li><a href="https://github.com/ChrisReynolds0508"><FaGithub /></a>
                        </li>
                    </ul>
                </div>
                
       </footer>
       )
};