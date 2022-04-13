import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <Products />
        </div>
    );
};

export default Home;
