import { useState } from "react";
import Search from "../Search/Search";
import styles from "./Header.module.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const Header = () => {
    const [cart, setCart] = useState(false);
    const user = useSelector((state: RootState) => state.user);
    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.nav_item}>
                    <div className={styles.logo}>Logo</div>
                    <Search />
                    <div className={styles.items}>
                        <div
                            className={styles.cart}
                            onClick={() => setCart((prevState) => !prevState)}
                        >
                            Cart
                        </div>
                        {cart ? <Cart /> : null}
                        {user.authenticated ? (
                            <p>logout</p>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </div>
                </div>
                <div className={styles.links_container}>
                    <div className={styles.links}>
                        <Link to="/">Home</Link>
                        <Link to="/">Products</Link>
                        <Link to="/">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
