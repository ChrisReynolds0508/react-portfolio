import React from "react";
import styles from "./Contact.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        if (!name || !email || !message) {
            alert("All required fields must be filled in");
            return;
        }

        // Handle form submission logic here
        console.log("Form submitted", { name, email, message });
    };

    return (
        <footer id='Contact' className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.text}>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <div className={styles.contact}>
                <ul>
                    <li><a href="mailto:Chris.Reynolds0508@Gmail.com"><MdOutlineMailOutline /></a></li>
                    <li><a href="tel:+61478043814"><FaPhoneFlip /></a></li>
                    <li><a href="https://github.com/ChrisReynolds0508"><FaGithub /></a></li>
                </ul>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </footer>
    );
};