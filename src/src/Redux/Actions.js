import axios from 'axios';

// Action tipleri
export const FETCH_CART_ITEMS_SUCCESS = 'FETCH_CART_ITEMS_SUCCESS';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';

// Cart items'ları fetch etmek  action
export const fetchCartItems = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/cart-items'); //API endpoint
    dispatch({
      type: FETCH_CART_ITEMS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    throw error; // Xeta veziyetini handle etmek için duzeltmeliyem
  }
};

// Kullanıcı profili fetch etmek için action
export const fetchUserProfile = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/user-profile'); //  API endpoint
    dispatch({
      type: FETCH_USER_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    throw error; // Xeta durumunu handle etmek için  duzeltmeliyem
  }
};
