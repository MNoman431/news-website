
import { createAsyncThunk } from '@reduxjs/toolkit';
// GET users thunk (protected route)
 export const fetchUsersThunk = createAsyncThunk("user/fetchAll", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:5000/api/user/getusers", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    return data.users; // ✅ return only the array
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});


// ✅ DELETE user thunk
export const deleteUserThunk = createAsyncThunk("user/delete", async (userId, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:5000/api/user/delete/${userId}`, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to delete user");
    }

    return userId; // ✅ return ID of deleted user
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});



export const getUserByIdThunk = createAsyncThunk("user/getOne", async (userId, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:5000/api/user/${userId}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    console.log("getUserByIdThunk response:", data); // should show user object directly

    if (!res.ok || !data._id) {
      throw new Error(data.message || "User not found");
    }

    return data; // ✅ return whole user object
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});


// ✳️ UPDATE user thunk
export const updateUserThunk = createAsyncThunk(
  "user/update",
  async ({ userId, updatedData }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:5000/api/user/update/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();
      console.log("Update response:", data);

      if (!res.ok) {
        throw new Error(data.message || "Failed to update user");
      }

      return data; // return updated user
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
