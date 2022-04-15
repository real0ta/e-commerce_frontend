import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductsByCategory
} from "../features/products/productsSlice";
import { RootState } from "../app/store";
import instance from "./axios";

const useGetProductsByCategory = (categoryName: string | undefined) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
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
    try {
      const res = await instance({ method: 'get', url: url })
      dispatch(addProductsByCategory(res.data))
    } catch (er) {
      setError(true)
    }
  }

  useEffect(() => {
    setError(false)
    getData(`/category/${categoryId}`);

  }, [categoryName, categories]);

  return error;
};

export default useGetProductsByCategory;
