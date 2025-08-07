
// src/redux/slices/commentSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { createCommentThunk, getPostCommentsThunk } from "../thunks/CommentThunk";
const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    loading: false,
    error: null,
    successMessage: null,
      commentsByPost: {}, // ✅ change: store comments by postId
  },
  reducers: {
    clearCommentMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    // 🟢 CREATE COMMENT
    builder
      .addCase(createCommentThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCommentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Comment added successfully";
        state.comments.push(action.payload.comment); // or adjust based on actual response
      })
      .addCase(createCommentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPostCommentsThunk.fulfilled, (state, action) => {
  state.loading = false;

  const { postId, comments } = action.payload;

  state.commentsByPost[postId] = comments; // ✅ store per-post
})

  },
});

export const { clearCommentMessages } = commentSlice.actions;
export default commentSlice.reducer;
