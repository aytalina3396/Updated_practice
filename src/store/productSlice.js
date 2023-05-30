import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async function (_, { rejectWithValue }) {
    try {
      console.log("asdasd");
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productsload: false,
    error: null,
    productsdata: [],
  },
  reducers: {
    addData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.productsload = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.productsdata = action.payload;
        state.productsload = false;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.productsload = false;
      });
  },
});

const { addData } = productSlice.actions;

export default productSlice.reducer;
