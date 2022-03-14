import CheckoutItem from "../CheckoutItem/CheckoutItem";
import styles from "./Checkout.module.css";

const Checkout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h3>Product</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Remove</h3>
            </div>
            <CheckoutItem />
        </div>
    );
};

export default Checkout;
