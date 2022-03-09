import styles from "./Search.module.css";

const Search = () => (
    <div className={styles.container}>
        <input className={styles.search} type="search" />
    </div>
);

export default Search;
