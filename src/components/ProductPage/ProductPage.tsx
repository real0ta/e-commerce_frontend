import { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
import instance from "../../utils/axios";
import { addToCart } from "../../features/products/productsSlice";
import { useDispatch } from "react-redux";
import Loading from "../Loading/Loading";
type productType = {
  _id: string;
  name: string;
  image: {
    data: [];
  };
  category: string;
  categoryName: string;
  description: string;
  price: number;
  quantity: number;
};
const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(1);
  const [product, setProduct] = useState<productType>();
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const params = useParams();

  const handleAddingToCart = () => {
    const productToAdd = {
      id: product?._id,
      name: product?.name,
      price: product?.price,
      image: product?.image,
    };

    if (amount > 1) {
      for (let i = 0; i < amount; i++) {
        dispatch(addToCart(productToAdd));
      }
    } else {
      dispatch(addToCart(productToAdd));
    }
  };

  useEffect(() => {
    setError(false);
    setLoading(true);
    const getData = async () => {
      try {
        const response = await instance({
          method: "get",
          url: `/product/${params.id}`,
        });
        setLoading(false);
        setProduct(response.data[0]);
        const img = btoa(
          String.fromCharCode(...new Uint8Array(response.data.image.data))
        );
        setImage(img);
      } catch (er) {
        setLoading(false);

        setError(true);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
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
            src={`data:image/png;base64,${image}`}
          />
        </div>
        <div className={styles.product_info}>
          <h3 className={styles.name}>{product?.name}</h3>
          <h4 className={styles.category}>{product?.categoryName}</h4>
          <h4 className={styles.price}>${product?.price}</h4>
          <article className={styles.description}>
            <p>{product?.description}</p>
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
