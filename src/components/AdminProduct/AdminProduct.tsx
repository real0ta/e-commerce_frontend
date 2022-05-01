import styles from "./AdminProduct.module.css";

type Props = {
    name: string,
    image: string,
    price: number,
    category: string,
    id: string,
}

const AdminProduct = ({ id, name, image, price, category }: Props) => {
    return (
        <article className={styles.container}>
            <div className={styles.info}>
                <p>{name}</p>
                <p>{category}</p>
                <p>{price}$</p>
            </div>
            <div className={styles.btns}>
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </article>
    )
}

export default AdminProduct
