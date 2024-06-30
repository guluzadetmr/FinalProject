// Redux/Reducers.js dosyasında
import { combineReducers } from 'redux';
import {
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_USER_PROFILE_SUCCESS,
} from './Actions.js';

// Örnek cart reducer
const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

// Örnek user reducer
const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  // Diğer reducer'ları buraya ekleyin
});

export default rootReducer;
