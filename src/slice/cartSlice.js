//cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemInCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },

    deleteItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product !== action.payload
      );
    },
  },
});

export const { addItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
