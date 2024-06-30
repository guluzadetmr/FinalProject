// // src/redux/wishlistSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeFromWishlist: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     addToCart: (state, action) => {
//       // Sepete ekleme işlemi burada olabilir, sepete ekleme yönetimi ayrıca yapılabilir
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist, addToCart } = wishlistSlice.actions;

// export default wishlistSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';
import { addToCart as addToCartAction } from './CartSlice'; // CartSlice'tan addToCart action'ını import ediyoruz

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
    // addToCart action'ını güncelliyoruz
    addToCart: (state, action) => {
      const itemToAddToCart = state.items.find(item => item.id === action.payload);
      if (itemToAddToCart) {
        // Sepete ekleme işlemi için addToCart action'ını dispatch ediyoruz
        addToCartAction(itemToAddToCart);
        // Favori listesinden silme işlemi
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist, addToCart } = wishlistSlice.actions;

export default wishlistSlice.reducer;
