import styles from "./CartItem.module.css";

const CartItem = () => (
    <article className={styles.product}>
        <img
            src="https://images.pexels.com/photos/1958587/pexels-photo-1958587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="product"
        />
        <div className={styles.info}>
            <p>Product Name</p>
            <p>3X20$</p>
        </div>
    </article>
);

export default CartItem;
