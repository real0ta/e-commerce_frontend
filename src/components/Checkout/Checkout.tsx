import { useState, useEffect } from 'react'
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import styles from "./Checkout.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Checkout = () => {
    const items = useSelector((state: RootState) => state.products.cart);

    const getTotal = () => {
        let temp = 0;
        items.forEach(item => {
            temp += item.amount * item.price
        })
        return temp
    }
    const total = getTotal()

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h3 className={styles.product}>Product</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Remove</h3>
            </div>
            {items.map(({ id, name, amount, image, price }) => (
                <CheckoutItem
                    key={id}
                    id={id}
                    name={name}
                    amount={amount}
                    image={image}
                    price={price}
                />
            ))}
            {items.length !== 0 ? (<div className={styles.total}>
                <h3>Total: <span>{total}$</span></h3></div>
            ) : null}

            {items.length === 0 ? (
                <p className={styles.error}>Add products to cart</p>
            ) : null}
        </div>
    );
};

export default Checkout;
