import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Cart = (): JSX.Element => {
    const cartItems = useSelector((state: RootState) => state.products.cart);
    console.log(cartItems);
    return (
        <div className={styles.container}>
            <div className={styles.products}>
                {cartItems.length > 0 ? (
                    cartItems.map(({ id, amount, image, price, name }) => (
                        <CartItem
                            id={id}
                            key={id}
                            amount={amount}
                            image={image}
                            price={price}
                            name={name}
                        />
                    ))
                ) : (
                    <p className={styles.noItem}>Add items to cart</p>
                )}
            </div>
            <div className={styles.btn_container}>
                <Link className={styles.btn} to="/checkout">
                    CHECKOUT
                </Link>
            </div>
        </div>
    );
};

export default Cart;
