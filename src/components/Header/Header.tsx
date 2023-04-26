import { useState } from "react";
import Search from "../Search/Search";
import styles from "./Header.module.css";
import Cart from "../Cart/Cart";
import Categories from "../Categories/Categories";
import { Link, useNavigate } from "react-router-dom";
import {
  IoLogOutOutline,
  IoCartOutline,
  IoLogInOutline,
} from "react-icons/io5";

const Header = () => {
  const [cart, setCart] = useState(false);
  const cookie = document.cookie;
  const navigate = useNavigate();

  const logoutUser = () => {
    const Cookies = document.cookie.split(";");
    for (let i = 0; i < Cookies.length; i++) {
      document.cookie = Cookies[i] + "=; expires=" + new Date(0).toUTCString();
    }

    navigate("/");
  };


  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav_item}>
          <Link to="/" className={styles.logo}>
            E-Comm
          </Link>
          <Search />
          <div className={styles.items}>
            <button
              className={styles.cart}
              onClick={() => setCart((prevState) => !prevState)}
            >
              <IoCartOutline />
            </button>

            {cart ? <Cart /> : null}
            {cookie.startsWith("signedIn") ? (
              <button onClick={logoutUser} className={styles.logout}>
                <IoLogOutOutline />
              </button>
            ) : (
              <Link className={styles.login} to="/login">
                <IoLogInOutline />
              </Link>
            )}
          </div>
        </div>
        <div className={styles.links_container}>
          <div className={styles.links}>
            <Categories />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
