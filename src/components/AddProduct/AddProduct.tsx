import { useState } from 'react'
import styles from './AddProduct.module.css'
import FormInput from '../FormInput/FormInput'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'


const AddProduct = () => {
    const [name, setName] = useState<string | undefined>()
    const [description, setDescription] = useState<string | undefined>()
    const [price, setPrice] = useState<string | undefined>()

    const categories = useSelector((state: RootState) => state.products.categories)

    return (
        <form className={styles.container}>
            <FormInput
                required
                onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
                value={name}
                name="name"
                label="Name"
                inputType="text"
                placeholder="Product name"
            />
            <FormInput
                required
                onChange={(e: React.FormEvent<HTMLInputElement>) => setDescription(e.currentTarget.value)}
                value={description}
                name="description"
                label="Description"
                inputType="text"
                placeholder="Product description"
            />
            <FormInput
                required
                onChange={(e: React.FormEvent<HTMLInputElement>) => setPrice(e.currentTarget.value)}
                value={price}
                name="price"
                label="Price"
                inputType="number"
                placeholder="10$"
            />
            <FormInput
                required
                name="image"
                label="Product image"
                inputType="file"
            />

            <select name="categories">
                {categories?.map(({ _id, name }) => <option value={_id}>{name}</option>
                )}
            </select>

            <button type="submit">Add product</button>
        </form>
    )
}

export default AddProduct
