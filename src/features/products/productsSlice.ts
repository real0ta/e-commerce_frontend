import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

export interface ProductsState {
  products: any[];
  cart: {
    amount: number;
    id: string;
    image: string;
    price: number;
    name: string;
  }[];
}

const initialState: ProductsState = {
  products: [],
  cart: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<object[]>) => {
      state.products = action.payload;
    },
    addToCart: (state, action: PayloadAction<any>) => {
      if (state.cart.length === 0) {
        state.cart.push({ amount: 1, ...action.payload });
        return;
      }
      let product = current(state.cart).find(
        (el) => el.id === action.payload.id
      );
      const newArr = current(state.cart).filter(
        (el, _) => el.id !== action.payload.id
      );
      if (product) {
        state.cart = newArr;
        state.cart.push({ ...product, amount: product?.amount + 1 });
      } else {
        state.cart.push({ amount: 1, ...action.payload });
      }

      console.log(action.payload.id);
    },
  },
});
export const { addProducts, addToCart } = ProductsSlice.actions;
export default ProductsSlice.reducer;