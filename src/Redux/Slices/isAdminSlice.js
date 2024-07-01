import { createSlice } from '@reduxjs/toolkit';

const initialState = false; // Başlangıç durumu false olarak ayarlana biler

const isAdminSlice = createSlice({
  name: 'isAdmin',
  initialState,
  reducers: {
    setIsAdmin: (state, action) => action.payload,
  },
});

export const { setIsAdmin } = isAdminSlice.actions;
export default isAdminSlice.reducer;
