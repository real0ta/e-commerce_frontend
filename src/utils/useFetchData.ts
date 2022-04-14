import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../features/products/productsSlice";
import { RootState } from "../app/store";
import instance from "./axios";

const useGetProducts = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  useEffect(() => {
    if (products.products.length === 0) {
      instance
        .get("/product")
        .then((res: any) => {
          if (error) setError(false);
          dispatch(addProducts(res.data.products));
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [dispatch, error, products]);

  return error
};

export default useGetProducts;
