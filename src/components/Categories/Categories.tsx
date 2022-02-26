import { useState } from "react";
import styles from "./Categories.module.css";

const Categories = () => {
    const [dropDown, setdropDown] = useState(false);
    const categories = (
        <>
            <div className={styles.item}>Hats</div>
            <div className={styles.item}>Shoes</div>
            <div className={styles.item}>Jackets</div>
            <div className={styles.item}>Sports</div>
            <div className={styles.item}>Jewelry</div>
        </>
    );
    return (
        <div className={styles.container}>
            <button
                onClick={(event) => setdropDown((prevState) => !prevState)}
                className={styles.btn}
            >
                Categories
            </button>
            <div className={dropDown ? "" : styles.list}>{categories}</div>
        </div>
    );
};

export default Categories;
