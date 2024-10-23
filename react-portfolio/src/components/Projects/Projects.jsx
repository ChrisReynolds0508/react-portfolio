import React from "react";
import styles from "./Projects.module.css";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.project}>
                <img src="./assets/projects/recipesavour.png" alt="project" className={styles.projectImg} />
                <div className={styles.projectInfo}>
                    <h2>Recipe Savour</h2>
                    <ul>
                        <li>This was our first frontend group project which utilised HTML, CSS, JavaScript, and third party API's.</li>
                        <li>The project was a recipe search engine that allowed users to search for recipes based on ingredients they had at home.</li>
                        <li>The project was a great learning experience and allowed us to work in a team environment.</li>
                    </ul>
                    <div>
                        <p>
                            <a href="https://github.com/ChrisReynolds0508/recipe-book" target="_blank" rel="noreferrer">GitHub Repository <FaGithub /></a>
                            <br />
                            <a href="https://chrisreynolds0508.github.io/recipe-book/" target="_blank" rel="noreferrer">Live Site</a>
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <div className={styles.project}>
                <img src="./assets/projects/taskboard.png" alt="project" className={styles.projectImg2} />
                <div className={styles.projectInfo}>
                    <h2>Task Board</h2>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore corporis, tenetur quo voluptatibus et quidem reprehenderit debitis vitae accusantium qui quas maiores pariatur esse laboriosam, adipisci quaerat impedit. Harum, consequuntur?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.</li>
                    </ul>
                    <div>
                        <p>
                            <a href="https://github.com/ChrisReynolds0508/task-board" target="_blank" rel="noreferrer">GitHub Repository <FaGithub /></a>
                            <br />
                            <a href="https://chrisreynolds0508.github.io/task-board/">Live Site</a>
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <div className={styles.project}>
                <img src="./assets/projects/weather.png" alt="project" className={styles.projectImg} />
                <div className={styles.projectInfo}>
                    <h2>Weather App</h2>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore corporis, tenetur quo voluptatibus et quidem reprehenderit debitis vitae accusantium qui quas maiores pariatur esse laboriosam, adipisci quaerat impedit. Harum, consequuntur?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.</li>
                    </ul>
                    <div>
                        <p>
                            <a href="https://github.com/ChrisReynolds0508/weather-dashboard" target="_blank" rel="noreferrer">GitHub Repository <FaGithub /></a>
                            <br />
                            <a href="https://chrisreynolds0508.github.io/weather-dashboard/">Live Site</a>
                        </p>
            
                    </div>
                </div>
            </div>
            <br />
            <div className={styles.project}>
                <img src="./assets/projects/jate.png" alt="project" className={styles.projectImg4} />
                <div className={styles.projectInfo}>
                    <h2>JATE Code editor</h2>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore corporis, tenetur quo voluptatibus et quidem reprehenderit debitis vitae accusantium qui quas maiores pariatur esse laboriosam, adipisci quaerat impedit. Harum, consequuntur?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.</li>
                    </ul>
                    <div>
                        <p>
                            <a href="https://github.com/ChrisReynolds0508/pwa-text-editor" target="_blank" rel="noreferrer">GitHub Repository <FaGithub /></a>
                            <br />
                            <a href="https://chrisreynolds0508.github.io/pwa-text-editor/">Live Site</a>
                        </p>
                        </div>
                </div>
            </div>
            <br />
            <div className={styles.project}>
                <img src="./assets/projects/payroll.png" alt="project" className={styles.projectImg5} />
                <div className={styles.projectInfo}>
                    <h2>Employee Payroll Tracker</h2>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore corporis, tenetur quo voluptatibus et quidem reprehenderit debitis vitae accusantium qui quas maiores pariatur esse laboriosam, adipisci quaerat impedit. Harum, consequuntur?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.</li>
                    </ul>
                    <div>
                        <p>
                            <a href="https://github.com/ChrisReynolds0508/employee-payroll-tracker" target="_blank" rel="noreferrer">GitHub Repository <FaGithub /></a>
                            <br />
                            <a href="https://chrisreynolds0508.github.io/employee-payroll-tracker/">Live Site</a>
                        </p>
                        </div>
                </div>
            </div>
            <br />
            <div className={styles.project}>
                <img src="./assets/projects/epicescapes.png" alt="project" className={styles.projectImg6} />
                <div className={styles.projectInfo}>
                    <h2>Epic Escapes</h2>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore corporis, tenetur quo voluptatibus et quidem reprehenderit debitis vitae accusantium qui quas maiores pariatur esse laboriosam, adipisci quaerat impedit. Harum, consequuntur?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.</li>
                    </ul>
                    <div>
                        <p>
                            <a href="https://github.com/ChrisReynolds0508/epic-escapes"
                                target="_blank" rel="noreferrer">GitHub Repository <FaGithub /></a>
                            <br />
                            <a href="https://chrisreynolds0508.github.io/epic-escapehttps://travel-planner-r3fr.onrender.com">Live Site</a>
                        </p>
                        </div>
                </div>
            </div>
        </section>
    );
};
