import { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import styles from '../AddProduct/AddProduct.module.css'
const AddCategory = () => {
    const [category, setCategory] = useState("")
    return <form className={styles.container}>
        <FormInput
            required
            value={category}
            onChange={e => setCategory(e.currentTarget.value)}
            name="category"
            label="Category"
            inputType="text"
            placeholder="Category name"
        />
        <button type="submit">Add Category</button>
    </form>
}

export default AddCategory
