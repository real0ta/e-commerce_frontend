import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import React from "react";

type Props = {
    name: string;
    price: Number;
    image: string;
    id: string;
};

const Product = ({ id, name, price, image }: Props) => (
    <article className={styles.item}>
        <div className={styles.img_container}>
            <Link to={`/products/${id}`}>
                <img
                    alt="product"
                    className={styles.img}
                    src={`http://localhost:3001/${image}`}
                />
            </Link>
        </div>
        <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <p>{price}</p>
        </div>
    </article>
);

export default Product;
