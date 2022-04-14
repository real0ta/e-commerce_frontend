import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

const Categories = () => {
    const categories = useSelector(
        (state: RootState) => state.products.categories
    );
    return (
        <article className={styles.container}>
            {categories?.map(({ _id, name }) => {
                return <Link key={_id} to={`/category/${name}`}>{name}</Link>;
            })}
        </article>
    );
};

export default Categories;
