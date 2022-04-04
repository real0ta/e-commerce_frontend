import styles from "./Product.module.css";
import React from 'react'

const Product = () => (
    <article className={styles.item}>
        <div className={styles.img_container}>
            <img
                alt="product"
                className={styles.img}
                src="https://images.pexels.com/photos/1958587/pexels-photo-1958587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </div>
        <div className={styles.info}>
            <p className={styles.name}>name</p>
            <p>price</p>
        </div>
    </article>
);

export default Product;
