import styles from "./CheckoutItem.module.css";

const CheckoutItem = () => {
    return (
        <article className={styles.item}>
            <img
                src="https://images.pexels.com/photos/1958587/pexels-photo-1958587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="product"
            />
            <p>20$</p>
            <p>20</p>
            <p>X</p>
        </article>
    );
};

export default CheckoutItem;
