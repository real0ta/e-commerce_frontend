import styles from "./Categories.module.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useGetCategoriesQuery } from "../../services/ecom";
const Categories = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <p>Could not find categories</p>
      </>
    );
  }

  return (
    <>
      {data.categories.map(({ id, name }: { id: number; name: string }) => {
        return (
          <Link key={id} to={`/category/${name}`} className={styles.link}>
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default Categories;
