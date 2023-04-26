import styles from "../Products/Products.module.css";
import Product from "../Product/Product";
import Loading from '../Loading/Loading'
import { useParams } from "react-router-dom";
import { useGetProductsByNameQuery}  from '../../services/ecom'
  
type productTypes = {
  name: string;
  price: Number;
  image: string;
  id: string;
};

const SearchResults = () => {
  const params = useParams();
  const {data, error, isLoading} = useGetProductsByNameQuery(params.string as string)

    if (isLoading) {
    return <Loading />
      }
  
    if (error) {
      return (
        <div className={styles.error}>
          <span>Error! </span> Could not find products
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

export default SearchResults;
