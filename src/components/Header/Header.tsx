import { useState } from "react";
import Search from "../Search/Search";
import styles from "./Header.module.css";
import Cart from "../Cart/Cart";
import Categories from "../Categories/Categories";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const Header = () => {
    const [cart, setCart] = useState(false);
    const [dropDown, setdropDown] = useState(false);
    const user = useSelector((state: RootState) => state.user);
    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.nav_item}>
                    <div className={styles.logo}>Logo</div>
                    <Search />
                    <div className={styles.items}>
                        <button
                            className={styles.cart}
                            onClick={() => setCart((prevState) => !prevState)}
                        >
                            Cart
                        </button>
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
                        <div className={styles.dropdown}>
                            <button onClick={() => setdropDown((prevState) => !prevState)}>
                                Categories
                            </button>
                            {dropDown ? <Categories /> : null}
                        </div>
                        <Link to="/">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
