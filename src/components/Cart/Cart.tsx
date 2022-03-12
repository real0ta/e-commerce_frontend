import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.products}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className={styles.btn_container}>
                <button className={styles.btn}>CHECKOUT</button>
            </div>
        </div>
    );
};

export default Cart;
