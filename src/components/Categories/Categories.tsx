import { useState } from "react";
import styles from "./Categories.module.css";

const Categories = () => {
    return (
        <article className={styles.container}>
            <h1>Hats</h1>
            <h1>Shirts</h1>
            <h1>Shorts</h1>
            <h1>Glassess</h1>
        </article>
    );
};

export default Categories;
