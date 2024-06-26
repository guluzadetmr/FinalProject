// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './WishlistSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;
