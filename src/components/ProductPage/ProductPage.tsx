import { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
import instance from "../../utils/axios";

type productType = {
    _id: string,
    name: string,
    photo: string,
    category: string,
    categoryName: string,
    description: string,
    price: number,
    quantity: number,

}
const ProductPage = () => {
    const [error, setError] = useState(false);
    const [product, setProduct] = useState<productType>()
    const params = useParams();

    useEffect(() => {
        setError(false)
        const getData = async () => {
            try {
                const response = await instance({
                    method: "get",
                    url: `/product/${params.id}`,
                });
                setProduct(response.data[0])
            } catch (er) {
                setError(true);
            }
        };

        getData()
    }, []);

    if(!error) return (
        <div className={styles.error}>
            <span>Error!</span> could not load product
        </div>
    )

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.image_container}>
                    <img
                        alt="product"
                        className={styles.img}
                        src={`http://localhost:3001/${product?.photo}`}
                    />
                </div>
                <div className={styles.product_info}>
                    <h3 className={styles.name}>{product?.name}</h3>
                    <h4 className={styles.price}>{product?.price}</h4>
                    <div className={styles.info}>
                        <div className={styles.hor}>
                            <h4>Avaliability</h4> <h4>In Stock</h4>
                        </div>
                        <div className={styles.hor}>
                            <h4>Category</h4> <h4>{product?.categoryName}</h4>
                        </div>
                    </div>
                    <article className={styles.description}>
                        <p>{product?.description}</p>
                    </article>
                    <div className={styles.cart}>
                        <div className={styles.quantity}>
                            <h3>-</h3>
                            <h3>2</h3>
                            <h3>+</h3>
                        </div>
                        <div className={styles.add}>Add To Cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
