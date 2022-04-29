import styles from "./AdminPage.module.css";
type Props = {
    name: string,
    image: string,
    price: number,
    category: string,
    id: string,
}

const AdminProduct = ({ id, name, image, price, category }: Props) => {
    return (
        <article>
            <img alt={name} src={`http://localhost:3001/${image}`} />
            <p>{name}</p>
            <p>{price}</p>
            <p>{category}</p>
            <button>Delete</button>
            <p>Edit</p>
        </article>
    )
}

export default AdminProduct
