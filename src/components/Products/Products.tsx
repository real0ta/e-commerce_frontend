import { useState } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import useGetProducts from "../../utils/useFetchData";
type productTypes = {
    name: string;
    price: Number;
    photo: string;
    _id: string;
};

const Products = () => {
    const products = useSelector((state: RootState) => state.products);
    const error = useGetProducts()
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
