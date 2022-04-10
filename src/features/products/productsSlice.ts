import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductsState {
  products: any[];
}
const initialState: ProductsState = {
  products: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<object[]>) => {
      state.products = action.payload;
    },
  },
});
export const { addProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
