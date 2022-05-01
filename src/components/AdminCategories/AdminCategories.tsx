import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import styles from './AdminCategories.module.css'
const AdminCategories = () => {
    const categories = useSelector((state: RootState) => state.products.categories)
    return (
        <>
            {categories?.map(({ _id, name }) => {
                return (
                    <article className={styles.container} key={_id}>
                        <p>{name}</p>
                        <p>{_id}</p>
                        <button>Delete</button>
                    </article>
                )
            })}
        </>
    )
}

export default AdminCategories
