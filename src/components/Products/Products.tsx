import { useState, useEffect } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import instance from "../../utils/axios";
type productTypes = {
    name: string;
    price: Number;
    photo: string;
    id: string;
};

const Products = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        instance
            .get("/product")
            .then((res) => {
                console.log(res.data.products);
                setData((prevData) => res.data.products);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className={styles.container}>
            {data.map(({ name, price, photo, id }: productTypes) => (
                <Product key={id} name={name} price={price} image={photo} />
            ))}
        </div>
    );
};

export default Products;
