import { createSlice } from "@reduxjs/toolkit";
import { createPostThunk, deletePostThunk, fetchPostsThunk, updatePostThunk } from "../thunks/PostThunk";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Post
      .addCase(createPostThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.unshift(action.payload);
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Posts
      .addCase(fetchPostsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
// 🟡 Delete Post
    .addCase(deletePostThunk.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(deletePostThunk.fulfilled, (state, action) => {
    state.loading = false;
    state.successMessage = "Post deleted successfully";
    const deletedId = action.payload.postId; // because you're returning { postId }
    state.posts = state.posts.filter((post) => post._id !== deletedId);
  })
  .addCase(deletePostThunk.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  })
 // ✅ UPDATE THUNK CASES HERE
      .addCase(updatePostThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePostThunk.fulfilled, (state, action) => {
        state.loading = false;
        const updatedPost = action.payload;
        state.posts = state.posts.map((post) =>
          post._id === updatedPost._id ? updatedPost : post
        );
      })
      .addCase(updatePostThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

export default postSlice.reducer;


