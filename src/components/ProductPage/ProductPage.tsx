import { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/products/productsSlice";
import { useDispatch } from "react-redux";
import Loading from "../Loading/Loading";
import { useGetProductByIdQuery } from "../../services/ecom";
type productType = {
  id: string;
  name: string;
  image: string;
  category: string;
  categoryName: string;
  description: string;
  price: number;
  quantity: number;
};
const ProductPage = () => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();

  const id = params.id as string;
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  /* const handleAddingToCart = () => {
   *   const productToAdd = {
   *     id: product?._id,
   *     name: product?.name,
   *     price: product?.price,
   *     image: product?.image,
   *   };

   *   if (amount > 1) {
   *     for (let i = 0; i < amount; i++) {
   *       dispatch(addToCart(productToAdd));
   *     }
   *   } else {
   *     dispatch(addToCart(productToAdd));
   *   }
   * };
   */

  if (isLoading) {
    return <Loading />;
  }

  if (error || !data) {
    return (
      <div className={styles.error}>
        <span>Error!</span> could not load product
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.image_container}>
          <img
            alt="product"
            className={styles.img}
            src={`http://localhost:3001/${data.image}`}
          />
        </div>
        <div className={styles.product_info}>
          <h3 className={styles.name}>{data.name}</h3>
          {/* <h4 className={styles.category}>{categoryName}</h4> */}
          <h4 className={styles.price}>${data.price}</h4>
          <article className={styles.description}>
            <p>{data.description}</p>
          </article>
          <div className={styles.cart}>
            <div className={styles.quantity}>
              <button
                onClick={() => {
                  if (amount > 1) setAmount((prevAmount) => prevAmount - 1);
                }}
              >
                -
              </button>
              <h3>{amount}</h3>
              <button onClick={() => setAmount((prevAmount) => prevAmount + 1)}>
                +
              </button>
            </div>
            <button onClick={handleAddingToCart} className={styles.addBtn}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
