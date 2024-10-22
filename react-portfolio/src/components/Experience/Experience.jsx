import React from "react";

import styles from "./Experience.module.css";

export const Experience = () => {
    return (<section id= 'experience' className={styles.container}>
<h2 className={styles.title}>Experience</h2>
<div className={styles.content}>
    <div className={styles.skills}>
        <ul>
<li> 
    <h3> 
        HTML 
    </h3>
</li>
<li>
    CSS
</li>
<li>
    JavaScript
</li>
<li>
    React
</li>
<li>
    Node.js
</li>
        </ul>
    </div>
</div>

    </section>
    );
};
