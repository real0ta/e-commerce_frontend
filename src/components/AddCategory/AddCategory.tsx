import { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import styles from '../AddProduct/AddProduct.module.css'
import Button from '../Button/Button'
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
        <Button>Add Category</Button>
    </form>
}

export default AddCategory
