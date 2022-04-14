import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProducts,
  addProductsByCategory,
} from "../features/products/productsSlice";
import { RootState } from "../app/store";
import instance from "./axios";

const useGetProducts = (categoryName: string | undefined) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const products = useSelector((state: RootState) => state.products);
  const categories = useSelector(
    (state: RootState) => state.products.categories
  );

  let categoryId: string | undefined;

  if (categoryName) {
    const category = categories?.find(
      (category) => category.name === categoryName
    );

    categoryId = category?._id;
  }

  const getData = async (url: string) => {
    console.log("get data");
    try {
      const res = await instance({ method: "get", url: url });
      console.log(res.data);
      if (categoryName) {
        dispatch(addProductsByCategory(res.data));
      } else {
        dispatch(addProducts(res.data.products));
      }
    } catch (er) {
      setError(true);
    }
  };

  useEffect(() => {
    if (error) setError(false);

    if (categoryName) {
      getData(`/category/${categoryId}`);
    } else {
      getData("/product");
    }
  }, [categoryName, categories]);

  return error;
};

export default useGetProducts;
