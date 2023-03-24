import styles from "./AdminProduct.module.css";
import { useDeleteProductMutation } from "../../services/ecom";
type Props = {
  name: string;
  price: number;
  category: string;
  id: number;
};

const AdminProduct = ({ id, name, price, category }: Props) => {
  const [deleteProduct, { isError, isSuccess }] = useDeleteProductMutation();

  const handleDelete = async () => {
    deleteProduct(id);
  };

  if (isSuccess) {
    return (
      <article className={styles.container}>
        <p className={styles.success}>Product was deleted successfully</p>
      </article>
    );
  }
  return (
    <article className={`${styles.container} ${isError ? styles.error : null}`}>
      <div className={styles.info}>
        <p>{name}</p>
        <p>{category}</p>
        <p>{price}$</p>
      </div>
      <div className={styles.btns}>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
};

export default AdminProduct;
