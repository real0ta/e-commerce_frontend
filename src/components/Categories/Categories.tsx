import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Categories = () => {
  const categories = useSelector(
    (state: RootState) => state.products.categories
  );

  if (!categories) {
    return <Loading />;
  }

  if (categories === null || categories?.length === 0) {
    return (
      <>
        <p>Could not find categories</p>
      </>
    );
  }
  return (
    <>
      {categories?.map(({ _id, name }) => {
        return (
          <Link key={_id} to={`/category/${name}`} className={styles.link}>
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default Categories;
