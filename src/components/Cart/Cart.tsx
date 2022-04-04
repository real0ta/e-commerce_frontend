import { Link } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.products}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className={styles.btn_container}>
                <Link className={styles.btn} to="/chekout">
                    CHECKOUT
                </Link>
            </div>
        </div>
    );
};

export default Cart;
