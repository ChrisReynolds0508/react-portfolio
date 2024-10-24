import React, {useState} from "react";
import styles from "./Navbar.module.css";


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <nav className={styles.navbar}>
        <a className={styles.title} href = '/'>Portfolio</a>
        <div className={styles.menu}>
          
            
            <ul className= {styles.menuItems}>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#Contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>;

}