import React, { useState, useEffect } from "react";
import styles from "./AddProduct.module.css";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import {
  useAddProductMutation,
  useGetCategoriesQuery,
} from "../../services/ecom";

const AddProduct = () => {
  const { data } = useGetCategoriesQuery();
  const [addProduct, { isError, isSuccess }] = useAddProductMutation();
  const [name, setName] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [price, setPrice] = useState<string | undefined>("");
  const [categoryId, setCategoryId] = useState<string | undefined>("");
  const [image, setImage] = useState<any>();
  const [quantity, setQuantity] = useState<string>("");

  useEffect(() => {
    if (data) {
      setCategoryId(data.categories[0].id);
    }
  }, [data]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (name && description && price && categoryId && image && quantity) {

      addProduct({ name, description, categoryId, price, quantity, image: image[0] })
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      {isSuccess ? <p>Product created successfuly</p> : null}
      {isError ? (
        <p>
          <span>Error!</span> Could not create product
        </p>
      ) : null}
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
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setQuantity(e.currentTarget.value)
        }
        value={quantity}
        name="quantity"
        label="Quantity"
        inputType="number"
        placeholder="0"
      />

      <select
        name="categories"
        onChange={(e) => setCategoryId(e.currentTarget.value)}
      >
        {data
          ? data.categories.map(
            ({ id, name }: { id: number; name: string }) => (
              <option key={id} value={id}>
                {name}
              </option>
            )
          )
          : null}
      </select>

      <FormInput
        required
        onChange={(e) => setImage(e.currentTarget.files)}
        accept="image/*"
        name="image"
        label="Product image"
        inputType="file"
      />

      <Button>Add Product</Button>
    </form>
  );
};

export default AddProduct;
