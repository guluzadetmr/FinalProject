// src/redux/Slices/isAdminSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = false; // Başlangıç durumu false olarak ayarlanabilir

const isAdminSlice = createSlice({
  name: 'isAdmin',
  initialState,
  reducers: {
    setIsAdmin: (state, action) => action.payload,
  },
});

export const { setIsAdmin } = isAdminSlice.actions;
export default isAdminSlice.reducer;
