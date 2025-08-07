
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersThunk, deleteUserThunk, getUserByIdThunk } from '../thunks/UserThunk';

const initialState = {
  users: [],
  loading: false,
  error: null,
  isAdmin: false,
  selectedUser: null, // ✅ For viewing a single user
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔄 Fetch all users
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ❌ Delete user
      .addCase(deleteUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(user => user._id !== action.payload);
      })
      .addCase(deleteUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 👁️ Get user by ID
      .addCase(getUserByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedUser = null;
      })
      .addCase(getUserByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload;
          console.log("User fetched:", action.payload);
      })
      .addCase(getUserByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
  },
});

export default usersSlice.reducer;
