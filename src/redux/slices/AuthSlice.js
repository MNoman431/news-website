

import { createSlice } from "@reduxjs/toolkit";
import { signupUserThunk, signinUserThunk } from "../thunks/AuthThunk";
const userFromStorage = localStorage.getItem("user");

const initialState = {
  // user: userFromStorage ? JSON.parse(userFromStorage) : null,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Signup cases
      .addCase(signupUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
         localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ Save to localStorage
      })
      .addCase(signupUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Signin cases
      .addCase(signinUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
         localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ Save to localStorage
      })
      .addCase(signinUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
