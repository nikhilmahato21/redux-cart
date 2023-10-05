import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItems,
    amount: cartItems.length,
    total: 0,
    isLoading: true,
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
