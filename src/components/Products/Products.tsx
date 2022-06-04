import Product from "../Product/Product";
import styles from "./Products.module.css";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import useFetchData from "../../utils/useFetchData";
import Loading from "../Loading/Loading";
type productTypes = {
  _id: string;
  name: string;
  category: string;
  categoryName: string;
  description: string;
  price: number;
  quantity: number;
  image: any;
};

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const error = useFetchData();

  if (error || products.length === 0) {
    return <Loading />;
  }

  if (error || products.length === 0) {
    return (
      <div className={styles.error}>
        <span>Error! </span> Could not load products
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {products.map(
        ({
          name,
          price,
          image,
          _id,
          categoryName,
          description,
        }: productTypes) => (
          <Product id={_id} key={_id} name={name} price={price} image={image} />
        )
      )}
    </div>
  );
};

export default Products;
