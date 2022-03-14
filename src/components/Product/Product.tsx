import styles from "./Product.module.css";
const Product = () => (
    <div className={styles.item}>
        <div className={styles.img_container}>
            <img
                alt="product"
                className={styles.img}
                src="https://images.pexels.com/photos/1958587/pexels-photo-1958587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
        </div>
        <div className={styles.info}>
            <p>name</p>
            <p>price</p>
        </div>
        <a href="#">See more</a>
    </div>
);

export default Product;