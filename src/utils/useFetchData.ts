import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../app/store'

import {
  addProducts,
} from "../features/products/productsSlice";
import instance from "./axios";

const useGetProducts = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const products = useSelector((state: RootState) => state.products.products)
  const getData = async (url: string) => {
    try {
      const res = await instance({ method: "get", url: url });
      console.log(res.data);
      dispatch(addProducts(res.data.products));
    } catch (er) {
      setError(true);
    }
  };

  useEffect(() => {
    if (error) setError(false);
    if (products.length === 0) getData('/product')
  }, []);

  return error;
};

export default useGetProducts;
