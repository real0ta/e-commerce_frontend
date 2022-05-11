import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import styles from "../AddProduct/AddProduct.module.css";
import Button from "../Button/Button";
import useAxios from "../../utils/useAxios";

const AddCategory = () => {
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);
    const [created, setCreated] = useState(false);
    const api = useAxios();
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setError(false);
        try {
            const response = await api.post("/category/", {
                name: category,
            });
            setCreated(true);
        } catch (err) {
            setError(true);
        }
    };
    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            {created ? <p>Category created successfuly</p> : null}
            {error ? (
                <p>
                    <span>Error!</span> Could not add product
                </p>
            ) : null}
            <FormInput
                required
                value={category}
                onChange={(e) => setCategory(e.currentTarget.value)}
                name="category"
                label="Category"
                inputType="text"
                placeholder="Category name"
            />
            <Button>Add Category</Button>
        </form>
    );
};

export default AddCategory;
