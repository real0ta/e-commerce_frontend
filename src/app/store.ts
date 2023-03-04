import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";
import userReducer from "../features/user/userSlice";
import { ecomApi } from "../services/ecom";
export const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
    [ecomApi.reducerPath]: ecomApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecomApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
