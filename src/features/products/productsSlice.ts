import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

export interface ProductsState {
  products: {
    _id: string;
    name: string;
    image: Object;
    category: string;
    categoryName: string;
    description: string;
    price: number;
    quantity: number;
  }[];
  cart: {
    amount: number;
    id: string;
    image: string;
    price: number;
    name: string;
  }[];
  categories: { _id: string; name: string }[] | null;
  productsByCategory: any[] | undefined;
}

const initialState: ProductsState = {
  products: [],
  cart: [],
  categories: null,
  productsByCategory: undefined,
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ProductsState["products"]>) => {
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
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const newState = state.cart.filter((item) => item.id !== action.payload);
      state.cart = newState;
    },
    addCategories: (state, action: PayloadAction<any>) => {
      state.categories = action.payload;
    },
    addProductsByCategory: (state, action: PayloadAction<object[]>) => {
      state.productsByCategory = action.payload;
    },
  },
});
export const {
  addProducts,
  addToCart,
  addCategories,
  addProductsByCategory,
  removeFromCart,
} = ProductsSlice.actions;
export default ProductsSlice.reducer;
