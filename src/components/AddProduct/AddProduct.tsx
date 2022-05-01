import React, { useState, useEffect } from "react";
import styles from "./AddProduct.module.css";
import FormInput from "../FormInput/FormInput";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import instance from "../../utils/axios";

const AddProduct = () => {
  const categories = useSelector(
    (state: RootState) => state.products.categories
  );
  const [name, setName] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [price, setPrice] = useState<string | undefined>("");
  const [categoryId, setCategoryId] = useState<string | undefined>("");
  const [image, setImage] = useState<any>();
  const [created, setCreated] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (categories !== null) {
      setCategoryId(categories[0]._id);
    }
  }, []);

  let formData = new FormData();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCreated(false);
    setError(false);
    formData.append("photo", image[0]);
      if(price && description && categoryId && name) {
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", categoryId);
    formData.append("price", price);
}

    try {
      const response = await instance.post("/product/", formData);
      if (response.status === 201) {
        setCreated(true);
      }
      console.log(response);
    } catch (err: any) {
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      {created ? <p>Product created successfuly</p> : null}
      {error ? <p>Could not create product</p> : null}
      <FormInput
        required
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setName(e.currentTarget.value)
        }
        value={name}
        name="name"
        label="Name"
        inputType="text"
        placeholder="Product name"
      />
      <FormInput
        required
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setDescription(e.currentTarget.value)
        }
        value={description}
        name="description"
        label="Description"
        inputType="text"
        placeholder="Product description"
      />
      <FormInput
        required
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setPrice(e.currentTarget.value)
        }
        value={price}
        name="price"
        label="Price"
        inputType="number"
        placeholder="10$"
      />
      <FormInput
        required
        onChange={(e) => setImage(e.currentTarget.files)}
        accept="image/*"
        name="image"
        label="Product image"
        inputType="file"
      />

      <select
        name="categories"
        onChange={(e) => setCategoryId(e.currentTarget.value)}
      >
        {categories?.map(({ _id, name }) => (
          <option key={_id} value={_id}>
            {name}
          </option>
        ))}
      </select>

      <button type="submit">Add product</button>
    </form>
  );
};

export default AddProduct;
