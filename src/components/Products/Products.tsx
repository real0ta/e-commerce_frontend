import Product from "../Product/Product";
import styles from "./Products.module.css";
import Loading from "../Loading/Loading";
import { useGetProductsQuery } from "../../services/ecom";
type productTypes = {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  description: string;
  price: number;
  quantity: number;
  image: any;
};

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!data || error) {
    return (
      <div className={styles.error}>
        <span>Error! </span> Could not load products
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {data.products.map(({ name, price, image, id }: productTypes) => (
        <Product id={id} key={id} name={name} price={price} image={image} />
      ))}
    </div>
  );
};

export default Products;
