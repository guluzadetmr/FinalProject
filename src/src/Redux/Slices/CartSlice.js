// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const newItem = action.payload;
//       const existingItem = state.cartItems.find(item => item.id === newItem.id);

//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         state.cartItems.push({ ...newItem, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       const idToRemove = action.payload;
//       state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);
//     },
//     updateCartItemQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const itemToUpdate = state.cartItems.find(item => item.id === id);

//       if (itemToUpdate) {
//         itemToUpdate.quantity = quantity;
//       }
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find(item => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      } else {
        console.error(`Item with id ${id} not found in cart.`);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
