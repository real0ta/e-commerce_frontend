import { useState } from "react";
import Search from "../Search/Search";
import styles from "./Header.module.css";

import Cart from "../Cart/Cart";

const Header = () => {
    const [cart, setCart] = useState(false);
    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.nav_item}>
                    <div className={styles.logo}>Logo</div>
                    <Search />
                    <div className={styles.items}>
                        <div onClick={() => setCart((prevState) => !prevState)}> Cart</div>
                        {cart ? <Cart /> : null}
                        <div>Login</div>
                    </div>
                </div>
                <div className={styles.links_container}>
                    <div className={styles.links}>
                        <a href="/">Home</a>
                        <a href="">Products</a>
                        <a href="">About us</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
