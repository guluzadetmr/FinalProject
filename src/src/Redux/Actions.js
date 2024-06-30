// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchUserProfile = createAsyncThunk(
//   'user/fetchUserProfile',
//   async () => {
//     try {
//       const response = await axios.get('/api/user/profile'); // Örnek backend endpoint'i
//       return response.data; // Kullanıcı bilgilerini döndür
//     } catch (error) {
//       throw Error('Failed to fetch user profile.'); // Hata durumunda hata fırlat
//     }
//   }
// );

// export const fetchCartItems = createAsyncThunk(
//   'cart/fetchCartItems',
//   async () => {
//     try {
//       const response = await axios.get('/api/cart/items'); // Örnek backend endpoint'i
//       return response.data; // Sepet bilgilerini döndür
//     } catch (error) {
//       throw Error('Failed to fetch cart items.'); // Hata durumunda hata fırlat
//     }
//   }
// );


// Redux/Actions.js dosyasında
import axios from 'axios';

// Action tipleri
export const FETCH_CART_ITEMS_SUCCESS = 'FETCH_CART_ITEMS_SUCCESS';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';

// Cart items'ları fetch etmek için action
export const fetchCartItems = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/cart-items'); // Örnek API endpoint
    dispatch({
      type: FETCH_CART_ITEMS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    throw error; // Hata durumunu handle etmek için gerektiği gibi düzenleyin
  }
};

// Kullanıcı profili fetch etmek için action
export const fetchUserProfile = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/user-profile'); // Örnek API endpoint
    dispatch({
      type: FETCH_USER_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    throw error; // Hata durumunu handle etmek için gerektiği gibi düzenleyin
  }
};
