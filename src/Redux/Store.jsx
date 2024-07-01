import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './Slices/WishlistSlice';
import userReducer from './Slices/UserSlice';
import authReducer from './Slices/AuthSlice';
import isAdminReducer from './Slices/isAdminSlice';
import cartReducer from './Slices/CartSlice';
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    user: userReducer,
    cart: cartReducer,
    auth: authReducer,
    isAdmin: isAdminReducer,
  },
});

export default store;
