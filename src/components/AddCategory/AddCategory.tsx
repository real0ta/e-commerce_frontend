import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import styles from "../AddProduct/AddProduct.module.css";
import Button from "../Button/Button";
import { useAddCategoryMutation } from "../../services/ecom";

const AddCategory = () => {
  const [addCategory, { isError, isSuccess }] = useAddCategoryMutation();
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    addCategory(category);
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
