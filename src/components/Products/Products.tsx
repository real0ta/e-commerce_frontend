import { useState, useEffect } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import instance from "../../utils/axios";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../../features/products/productsSlice";
type productTypes = {
    name: string;
    price: Number;
    photo: string;
    _id: string;
};

const Products = () => {
    const [error, setError] = useState(false);
    const products = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        if (products.products.length == 0) {
            instance
                .get("/product")
                .then((res) => {
                    if (error) setError(false);
                    dispatch(addProducts(res.data.products));
                })
                .catch((err) => {
                    setError(true);
                });
        }
    }, [products]);

    if (error) {
        return (
            <div className={styles.error}>
                <span>Error! </span> Could not load products
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {products.products.map(({ name, price, photo, _id }: productTypes) => (
                <Product id={_id} key={_id} name={name} price={price} image={photo} />
            ))}
        </div>
    );
};

export default Products;
