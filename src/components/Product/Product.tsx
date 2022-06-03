import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import React from "react";
import { addToCart } from "../../features/products/productsSlice";
import { useDispatch } from "react-redux";

type Props = {
  name: string;
  price: Number;
  image: {
    data: [];
  };
  id: string;
};

const Product = ({ id, name, price, image }: Props) => {
  const dispatch = useDispatch();
  const img = btoa(String.fromCharCode(...new Uint8Array(image.data)));

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
            src={`data:image/png;base64,${img}`}
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
