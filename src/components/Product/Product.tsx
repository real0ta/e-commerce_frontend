import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import React from "react";
import { addToCart } from "../../features/products/productsSlice";
import { useDispatch } from "react-redux";

type Props = {
  name: string;
  price: Number;
  image: string;
  id: string;
};

const Product = ({ id, name, price, image }: Props) => {
  const dispatch = useDispatch();
  const addProduct = () => {
    const product = {
      id,
      name,
      price,
      image,
    };
    dispatch(addToCart(product));
  };
  return (
    <article className={styles.item}>
      <div>
        <Link to={`/products/${id}`}>
          <img
            alt="product"
            className={styles.img}
            src={`localhost:3001/${image}`}
          />
        </Link>
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p>${price}</p>
        <button onClick={addProduct} className={styles.btn}>
          ADD TO CART
        </button>
      </div>
    </article>
  );
};
export default Product;
