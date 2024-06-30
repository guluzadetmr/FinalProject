import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for asynchronous actions
export const updateProfilePicture = createAsyncThunk(
  'auth/updateProfilePicture',
  async (file, { getState }) => {
    const { user } = getState().auth;
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`/api/users/${user.id}/profile-picture`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (password, { getState }) => {
    const { user } = getState().auth;
    const response = await axios.post(`/api/users/${user.id}/change-password`, { password });

    return response.data;
  }
);

const initialState = {
  user: null,
  isAdmin: false,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAdmin = action.payload?.role === 'admin';
    },
    clearUser: (state) => {
      state.user = null;
      state.isAdmin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfilePicture.fulfilled, (state, action) => {
        state.user.profilePicture = action.payload.profilePicture;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        // Handle successful password change
      })
      .addCase(updateProfilePicture.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
