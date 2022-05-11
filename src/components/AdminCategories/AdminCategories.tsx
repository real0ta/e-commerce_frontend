import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import styles from './AdminCategories.module.css'
import AdminCategory from '../AdminCategory/AdminCategory'
const AdminCategories = () => {
    const categories = useSelector((state: RootState) => state.products.categories)

    return (
        <>
            {categories?.map(({ _id, name }) => <AdminCategory _id={_id} name={name} />)}
        </>
    )
}

export default AdminCategories
