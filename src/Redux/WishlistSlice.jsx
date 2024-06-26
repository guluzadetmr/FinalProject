// src/redux/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addToCart: (state, action) => {
      // Sepete ekleme işlemi burada olabilir, sepete ekleme yönetimi ayrıca yapılabilir
    },
  },
});

export const { addToWishlist, removeFromWishlist, addToCart } = wishlistSlice.actions;

export default wishlistSlice.reducer;
