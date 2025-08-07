// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice"
import usersReducer from "./slices/UsersSlice";
import postReducer from "./slices/PostSlice";
import commentReducer from "./slices/CommentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    post: postReducer,
    comments: commentReducer,
  },
});

export default store;
