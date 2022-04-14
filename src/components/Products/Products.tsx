import Product from "../Product/Product";
import styles from "./Products.module.css";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import useGetProducts from "../../utils/useFetchData";
import { useParams } from "react-router-dom";
type productTypes = {
    name: string;
    price: Number;
    photo: string;
    _id: string;
};

const Products = () => {
    const params = useParams();
    const products = useSelector((state: RootState) => state.products.products);
    const productsByCategory = useSelector(
        (state: RootState) => state.products.productsByCategory
    );
    const error = useGetProducts(params.name);

    if (error) {
        return (
            <div className={styles.error}>
                <span>Error! </span> Could not load products
            </div>
        );
    }

    if (params?.name) {
        return (
            <div className={styles.container}>
                {productsByCategory?.map(
                    ({ name, price, photo, _id }: productTypes) => (
                        <Product
                            id={_id}
                            key={_id}
                            name={name}
                            price={price}
                            image={photo}
                        />
                    )
                )}
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {products.map(({ name, price, photo, _id }: productTypes) => (
                <Product id={_id} key={_id} name={name} price={price} image={photo} />
            ))}
        </div>
    );
};

export default Products;
