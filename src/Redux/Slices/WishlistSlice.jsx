import { createSlice } from '@reduxjs/toolkit';
import { addToCart as addToCartAction } from './CartSlice'; 

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
    // addToCart action'ını güncellemek
    addToCart: (state, action) => {
      const itemToAddToCart = state.items.find(item => item.id === action.payload);
      if (itemToAddToCart) {
        // Sepete ekleme işlemi için addToCart action'ını dispatch etmek
        addToCartAction(itemToAddToCart);
        // Favori listesinden silmek prosesi
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist, addToCart } = wishlistSlice.actions;

export default wishlistSlice.reducer;
