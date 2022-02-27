import Product from "../Product/Product";
import styles from "./Products.module.css";
const Products = () => {
    return (
        <div className={styles.container}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );
};

export default Products;
