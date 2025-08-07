import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostCommentsThunk,
  createCommentThunk,
} from "../redux/thunks/CommentThunk";

const Comments = ({ postId, user }) => {
  const dispatch = useDispatch();
  const { commentsByPost, loading } = useSelector((state) => state.comments);

  const [commentText, setCommentText] = useState("");

  const comments = commentsByPost[postId] || [];

  useEffect(() => {
    dispatch(getPostCommentsThunk(postId));
  }, [dispatch, postId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    dispatch(
      createCommentThunk({
        content: commentText,
        postId,
        userId: user?._id,
        token: user?.token,
      })
    );
    setCommentText("");
  };

  return (
    <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
      <h4 className="font-semibold text-sm mb-2">Comments:</h4>

      {loading && <p className="text-xs text-blue-400">Loading...</p>}
      {comments.length === 0 && !loading && (
        <p className="text-xs italic text-gray-500">No comments yet.</p>
      )}

      <ul className="mb-3 space-y-2">
        {comments.map((comment) => (
          <li key={comment._id} className="text-sm text-gray-700 dark:text-gray-200">
            <strong>{comment.user?.name || "User"}:</strong> {comment.content}
          </li>
        ))}
      </ul>

      {user ? (
        <form onSubmit={handleCommentSubmit} className="flex flex-col gap-2">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            rows={2}
            className="p-2 border rounded bg-white dark:bg-gray-800 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm self-end"
          >
            Post
          </button>
        </form>
      ) : (
        <p className="text-xs text-gray-400 italic">Login to comment</p>
      )}
    </div>
  );
};

export default Comments;
