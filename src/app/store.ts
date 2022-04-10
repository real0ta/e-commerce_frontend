import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
