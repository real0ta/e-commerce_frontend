import styles from "../AdminCategories/AdminCategories.module.css";
import { useDeleteCategoryMutation } from "../../services/ecom";

type Props = {
  id: number;
  name: string;
};
const AdminCategory = ({ id, name }: Props) => {
  const [deleteCategory, { isError, isSuccess }] = useDeleteCategoryMutation();

  const handleDelete = async () => {
    deleteCategory(id);
  };
  if (isSuccess) {
    return (
      <article className={styles.container}>
        <p className={styles.success}>Category deleted successfuly</p>
      </article>
    );
  }
  return (
    <article
      className={`${styles.container} ${isError ? styles.error : null}`}
      key={id}
    >
      <p>{name}</p>
      <p>{id}</p>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

export default AdminCategory;
