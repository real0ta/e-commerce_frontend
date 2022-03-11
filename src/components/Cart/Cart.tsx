import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.products}>
                <CartItem />
            </div>
        </div>
    );
};

export default Cart;
