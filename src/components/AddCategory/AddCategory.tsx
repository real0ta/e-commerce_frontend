import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import styles from "../AddProduct/AddProduct.module.css";
import Button from "../Button/Button";
import {
  useAddCategoryMutation,
  useRefreshTokenMutation,
} from "../../services/ecom";

const AddCategory = () => {
  const [addCategory, { isError, isSuccess }] = useAddCategoryMutation();
  const [refreshToken] = useRefreshTokenMutation();
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError(false);

    try {
      if (token) {
        const data = await refreshToken(token).unwrap();
        addCategory({ name: category, token: data.token });
      }
    } catch (err) {
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      {isSuccess ? <p>Category created successfuly</p> : null}
      {isError ? (
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
