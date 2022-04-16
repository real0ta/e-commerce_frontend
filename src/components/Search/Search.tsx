import styles from "./Search.module.css";

const Search = () => (
    <form className={styles.container}>
        <input className={styles.search} type="search" placeholder="Search products" />
        <p>X</p>
    </form>
);

export default Search;
