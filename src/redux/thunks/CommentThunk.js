import { createAsyncThunk } from "@reduxjs/toolkit";

// 🟢 Create a new comment
export const createCommentThunk = createAsyncThunk(
  "comments/createComment",
  async ({ content, postId, userId, token }, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,  // ✅ UNCOMMENT THIS LINE
        },
        credentials: "include", // optional if you're using cookies, but not needed here
        body: JSON.stringify({ content, postId, userId }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to post comment");
      }

      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
)
// get comments for a specific post
export const getPostCommentsThunk = createAsyncThunk(
  "comments/getPostComments",
  async (postId, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:5000/api/comment/getPostComments/${postId}`);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to fetch comments");
      }

      const data = await res.json();
      return { postId, comments: data }; // ✅ Return both postId and data
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


// // 🔵 Fetch all comments for a specific post
// export const getPostCommentsThunk = createAsyncThunk(
//   "comments/getPostComments",
//   async (postId, { rejectWithValue }) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/comment/getPostComments/${postId}`);

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Failed to fetch comments");
//       }

//       const data = await res.json();
//       return data; // Make sure backend returns comments array
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );


// // 🟢 Get all comments of a post
// export const getPostCommentsThunk = createAsyncThunk(
//   "comments/getPostComments",
//   async (postId, { rejectWithValue }) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/comment/getPostComments/${postId}`);

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Failed to fetch comments");
//       }

//       const data = await res.json();
//       return { postId, comments: data };
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
