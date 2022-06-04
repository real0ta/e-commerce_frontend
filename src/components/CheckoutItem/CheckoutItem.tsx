import { useState } from "react";
import styles from "./CheckoutItem.module.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/products/productsSlice";

type Props = {
  price: number;
  name: string;
  amount: number;
  id: string;
};
const CheckoutItem = ({ id, price, amount, name }: Props) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <article className={styles.item}>
      <p>{name}</p>
      <p>{price}$</p>
      <p>{amount}</p>
      <div className={styles.btn_container}>
        <button onClick={handleRemove}>X</button>
      </div>
    </article>
  );
};

export default CheckoutItem;
