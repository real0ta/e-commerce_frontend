import Product from "../Product/Product";
import styles from "../Products/Products.module.css";
import { useParams } from "react-router-dom";
import { useGetProductsByCategoryIdQuery } from "../../services/ecom";
import Loading from "../Loading/Loading";
type productTypes = {
  name: string;
  price: Number;
  image: string;
  id: string;
};

const Products = () => {
  const params = useParams();
  const id = params.name as string;
  const { data, error, isLoading } = useGetProductsByCategoryIdQuery(id);

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <div className={styles.error}>
        <span>Error! </span> Could not find products in {params.name} category
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {data.map(({ name, price, image, id }: productTypes) => (
        <Product id={id} key={id} name={name} price={price} image={image} />
      ))}
    </div>
  );
};

export default Products;
