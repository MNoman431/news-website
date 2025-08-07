// redux/thunk/authThunk.js

import { createAsyncThunk } from "@reduxjs/toolkit";

// Signup thunk using fetch
export const signupUserThunk = createAsyncThunk(
  "auth/signupUser",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // for cookies
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const signinUserThunk = createAsyncThunk(
  "auth/signinUser",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // for cookies
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signin failed");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);













