import styles from "./Footer.module.css";
const Footer = () => (
    <footer className={styles.container}>
        <div className={styles.item}>
            <h3>Contact</h3>
            <p>111-222-333-444</p>
            <p>e-commerce@ecom.com</p>
        </div>
        <div className={styles.item}>
            <h3>Sitemap</h3>
            <p>about us</p>
            <p>contact</p>
        </div>
    </footer>
);

export default Footer;
