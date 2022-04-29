import styles from "./AdminPage.module.css";
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import useFetchData from '../../utils/useFetchData'
import AdminProduct from './AdminProduct'
const AdminPage = () => {
    const error = useFetchData()
    const products = useSelector((state: RootState) => state.products.products)
    console.log(products)
    return (
        <div className={styles.container}>
            <ul>
                <li>See Products</li>
                <li>Add Product</li>
                <li>See Categories</li>
                <li>Add Category</li>
            </ul>
            {products.map(item => <AdminProduct name={item.name} price={item.price} category={item.categoryName} image={item.photo} key={item._id} id={item._id} />)}
        </div>
    );
};

export default AdminPage;
