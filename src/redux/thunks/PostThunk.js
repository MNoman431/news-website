import { createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Create Post Thunk using fetch and cookie-based auth
export const createPostThunk = createAsyncThunk(
    "post/createPost",
    async (postData, { rejectWithValue }) => {
        try {
            const res = await fetch("http://localhost:5000/api/post/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // ✅ very important for cookies
                body: JSON.stringify(postData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Post creation failed");
            }

            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
// export const fetchPostsThunk = createAsyncThunk("post/fetchAll", async (_, thunkAPI) => {
//     try {
//         const res = await fetch("http://localhost:5000/api/post/getposts", {
//             method: "GET",
//             credentials: "include",
//         });

//         const data = await res.json();
//         return data.posts;
//     } catch (err) {
//         return thunkAPI.rejectWithValue(err.message);
//     }
// });

// gpt filter////////////////////
export const fetchPostsThunk = createAsyncThunk(
  "post/fetch",
  async ({ searchTerm = "", category = "", sort = "desc" } = {}, thunkAPI) => {
    try {
      const queryParams = new URLSearchParams();

      if (searchTerm) queryParams.append("searchTerm", searchTerm);
      if (category) queryParams.append("category", category);
      if (sort) queryParams.append("sort", sort);

      const res = await fetch(`http://localhost:5000/api/post/getposts?${queryParams}`, {
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to fetch posts");

      return data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Delete a Post Thunk
export const deletePostThunk = createAsyncThunk(
  "post/delete",
  async ({ postId, userId }, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/post/deletepost/${postId}/${userId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete post");
      }

      return { postId }; // Important: return an object!
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// src/redux/thunks/PostThunk.js

export const updatePostThunk = createAsyncThunk(
  "post/update",
  async ({ postId, userId, updatedData }, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/post/updatepost/${postId}/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(updatedData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update post");
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
