import { Link, Outlet } from "react-router-dom";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <ul>
        <Link to="/admin">Products</Link>
        <Link to="/admin/add-product">Add Product</Link>
        <Link to="/admin/categories">Categories</Link>
        <Link to="/admin/add-category">Add Category</Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default AdminPage;
