import styles from "./AdminPage.module.css";

const AdminPage = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li>See Products</li>
                <li>Add Product</li>
                <li>See Categories</li>
                <li>Add Category</li>
                <li>See Products</li>
            </ul>
            <article>
                <div>image </div>
                <p>name</p>
                <p>price</p>
                <p>category</p>
                <div className={styles.option}>
                    <p>D</p>
                    <p>C</p>
                </div>
            </article>
        </div>
    );
};

export default AdminPage;
