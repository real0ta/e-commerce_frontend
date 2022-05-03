import { useState } from 'react'
import styles from '../AdminCategories/AdminCategories.module.css'
import instance from '../../utils/axios'
type Props = {
    _id: string
    name: string
}
const AdminCategory = ({ _id, name }: Props) => {
    const [error, setError] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const handleDelete = async () => {
        setError(false)
        setDeleted(false)
        try {
            const response = await instance.delete(`/category/${_id}`)
            setDeleted(true)
        } catch (err) {
            setError(true)
        }
    }
    if (deleted) {
        return (
            <article className={styles.container}>
                <p className={styles.success} >Category deleted successfuly</p>
            </article>
        )

    }
    return (
        <article className={`${styles.container} ${error ? styles.error : null}`} key={_id} >
            <p>{name}</p>
            <p>{_id}</p>
            <button onClick={handleDelete}>Delete</button>
        </article >
    )

}

export default AdminCategory
