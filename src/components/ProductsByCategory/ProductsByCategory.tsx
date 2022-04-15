import Product from "../Product/Product";
import styles from "../Products/Products.module.css";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import useFetchDataByCategory from "../../utils/useFetchDataByCategory";
import { useParams } from "react-router-dom";
type productTypes = {
    name: string;
    price: Number;
    photo: string;
    _id: string;
};

const Products = () => {
    const params = useParams();
    const productsByCategory = useSelector(
        (state: RootState) => state.products.productsByCategory
    );
    const error = useFetchDataByCategory(params.name);

    if (error) {
        return (
            <div className={styles.error}>
                <span>Error! </span> Could not find products in {params.name} category
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {productsByCategory?.map(({ name, price, photo, _id }: productTypes) => (
                <Product id={_id} key={_id} name={name} price={price} image={photo} />
            ))}
        </div>
    );
};

export default Products;
