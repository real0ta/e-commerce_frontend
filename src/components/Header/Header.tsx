import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav_item}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.items}>
            <div>Search</div>
            <div>Cart</div>
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
  )
}

export default Header;

