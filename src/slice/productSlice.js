import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     return response.json();
//   }
// );

// const productSlice = createSlice({
//   name: "products",
//   initialState: { products: [] },
//   reducers: {},

//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.products = action.payload;
//     });
//   },
// });

// export const selectProducts = (state) => state.products.products;
// export default productSlice.reducer;

import productsArr from "../containers/data.json";

const productSlice = createSlice({
  name: "products",
  initialState: { products: productsArr },
  reducers: {},
});

export const selectProducts = (state) => state.products.products;
export default productSlice.reducer;
