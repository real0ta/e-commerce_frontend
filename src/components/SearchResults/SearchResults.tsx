import { useState, useEffect } from "react";
import styles from "../Products/Products.module.css";
import Product from "../Product/Product";
import { useParams } from "react-router-dom";
import instance from "../../utils/axios";
type productTypes = {
  name: string;
  price: Number;
  image: {
    data: [];
  };
  _id: string;
};

const SearchResults = () => {
  const [products, setProducts] = useState<[]>();
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    setError(false);
    const getData = async () => {
      try {
        const res = await instance({
          method: "get",
          url: `/product/?name=${params.string}`,
        });
        setProducts(res.data.products);
      } catch (err: any) {
        setError(true);
      }
    };

    getData();
  }, [params.string]);

  if (products?.length === 0 || error) {
    return (
      <div className={styles.error}>
        <span>Error! </span> Could not find products
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {products?.map(({ name, price, image, _id }: productTypes) => (
        <Product id={_id} key={_id} name={name} price={price} image={image} />
      ))}
    </div>
  );
};

export default SearchResults;
