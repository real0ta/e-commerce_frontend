import styles from "./ProductPage.module.css";
const ProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.image_container}>
                    <img
                        alt="product"
                        className={styles.img}
                        src="https://images.pexels.com/photos/1958587/pexels-photo-1958587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                </div>
                <div className={styles.product_info}>
                    <h3 className={styles.name}>Product name</h3>
                    <h4 className={styles.price}>Price</h4>
                    <div className={styles.info}>
                        <div className={styles.hor}>
                            <h4>Avaliability</h4> <h4>In Stock</h4>
                        </div>
                        <div className={styles.hor}>
                            <h4>Category</h4> <h4>Hats</h4>
                        </div>
                    </div>
                    <article className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur
                        </p>
                    </article>
                    <div className={styles.cart}>
                        <div className={styles.quantity}>
                            <h3>-</h3>
                            <h3>2</h3>
                            <h3>+</h3>
                        </div>
                        <div className={styles.add}>Add To Cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
