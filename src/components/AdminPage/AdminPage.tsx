import { Outlet } from 'react-router-dom'
import styles from "./AdminPage.module.css";
import useFetchData from '../../utils/useFetchData'

const AdminPage = () => {
    const error = useFetchData()
    return (
        <div className={styles.container}>
            <ul>
                <li>See Products</li>
                <li>Add Product</li>
                <li>See Categories</li>
                <li>Add Category</li>
            </ul>
            <Outlet />
        </div>
    );
};

export default AdminPage;
