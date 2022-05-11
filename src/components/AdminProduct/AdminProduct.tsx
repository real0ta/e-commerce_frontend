import { useState } from 'react'
import styles from "./AdminProduct.module.css";
import instance from '../../utils/axios'

type Props = {
    name: string,
    image: string,
    price: number,
    category: string,
    id: string,
}

const AdminProduct = ({ id, name, image, price, category }: Props) => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleDelete = async () => {
        setSuccess(false)
        setError(false)
        try {
            const res = await instance.delete(`/product/${id}`)
            setSuccess(true)
        } catch (err) {
            setError(true)
        }
    }

    if (success) {
        return (
            <article className={styles.container}>
                <p className={styles.success}>Product was deleted successfully</p>
            </article>
        )
    }
    return (
        <article className={`${styles.container} ${error ? styles.error : null}`}>
            <div className={styles.info}>
                <p>{name}</p>
                <p>{category}</p>
                <p>{price}$</p>
            </div>
            <div className={styles.btns}>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </article >
    )
}

export default AdminProduct
