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
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
