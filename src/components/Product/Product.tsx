import styles from "./Product.module.css";
import React from "react";

type Props = {
    name: string;
    price: Number;
    image: string;
};

const Product = ({ name, price, image }: Props) => (
    <article className={styles.item}>
        <div className={styles.img_container}>
            <img
                alt="product"
                className={styles.img}
                src={`http://localhost:3001/${image}`}
            />
        </div>
        <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <p>{price}</p>
        </div>
    </article>
);

export default Product;
