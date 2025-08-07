
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deletePostThunk,
//   fetchPostsThunk,
// } from "../../redux/thunks/PostThunk";

// const AllPost = () => {
//   const dispatch = useDispatch();

//   const { posts, loading, error } = useSelector((state) => state.post);
//   const { user } = useSelector((state) => state.auth); // Logged-in user

//   // ✅ Fetch all posts on component mount
//   useEffect(() => {
//     dispatch(fetchPostsThunk());
//   }, [dispatch]);

//   const handleDelete = async (postId, userId) => {
//   if (!userId) return alert("Login required.");
//   const confirm = window.confirm("Confirm delete?");
//   if (!confirm) return;

//   try {
//     await dispatch(deletePostThunk({ postId, userId })).unwrap();
//     alert("Post deleted!");
//     dispatch(fetchPostsThunk()); // Refresh posts
//   } catch (err) {
//     alert(err.message || "Failed to delete post");
//   }
// };




//   return (
//     <div className="p-6 bg-white rounded-xl shadow-md">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
//         All Posts
//       </h2>

//       {loading && (
//         <p className="text-blue-500 font-medium animate-pulse">
//           Loading posts...
//         </p>
//       )}

//       {error && <p className="text-red-500 font-medium">Error: {error}</p>}

//       {!loading && !error && posts.length === 0 && (
//         <p className="text-gray-600 italic">No posts available.</p>
//       )}

//       {!loading && !error && posts.length > 0 && (
//         <div className="overflow-x-auto rounded-md border border-gray-200">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
//               <tr>
//                 <th className="px-4 py-3">Title</th>
//                 <th className="px-4 py-3">Category</th>
//                 <th className="px-4 py-3">Created At</th>
//                 <th className="px-4 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
//               {posts.map((post) => (
//                 <tr
//                   key={post._id}
//                   className="hover:bg-gray-50 transition-colors duration-200"
//                 >
//                   <td className="px-4 py-3">{post.title}</td>
//                   <td className="px-4 py-3">{post.category}</td>
//                   <td className="px-4 py-3">
//                     {new Date(post.createdAt).toLocaleString()}
//                   </td>
//                   <td className="px-4 py-3">
//                     <div className="flex space-x-2">
//                       <button
//                         className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-xs"
//                         disabled={loading}
//                       >
//                         Edit
//                       </button>
//                       <button
//                        onClick={() => handleDelete(post._id, post.userId || post.user?._id || user._id)}

//                         className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
//                         disabled={loading}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllPost;







import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostThunk,
  fetchPostsThunk,
  updatePostThunk,
} from "../../redux/thunks/PostThunk";

const AllPost = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    category: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);

  const handleDelete = async (postId, userId) => {
    if (!userId) return alert("Login required.");
    const confirm = window.confirm("Confirm delete?");
    if (!confirm) return;

    try {
      await dispatch(deletePostThunk({ postId, userId })).unwrap();
      alert("Post deleted!");
      dispatch(fetchPostsThunk());
    } catch (err) {
      alert(err.message || "Failed to delete post");
    }
  };

  const handleEditClick = (post) => {
    setEditId(post._id);
    setEditForm({
      title: post.title || "",
      category: post.category || "",
      content: post.content || "",
      image: post.image || "",
    });
  };

  const handleEditChange = (e) => {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSave = async (postId) => {
  const post = posts.find((p) => p._id === postId);
  if (!post) return alert("Post not found.");

  const userId = post.userId || post.user?._id; // ✅ this is the required ID for backend check

  if (!userId) return alert("Invalid user ID");

  try {
    await dispatch(
      updatePostThunk({
        postId,
        userId,
        updatedData: editForm,
      })
    ).unwrap();

    setEditId(null);
    dispatch(fetchPostsThunk());
  } catch (err) {
    alert(err.message || "Update failed");
  }
};


  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
        All Posts
      </h2>

      {loading && <p className="text-blue-500 font-medium animate-pulse">Loading posts...</p>}
      {error && <p className="text-red-500 font-medium">Error: {error}</p>}
      {!loading && !error && posts.length === 0 && (
        <p className="text-gray-600 italic">No posts available.</p>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="overflow-x-auto rounded-md border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Content / Image</th>
                <th className="px-4 py-3">Created At</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {posts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">
                    {editId === post._id ? (
                      <input
                        type="text"
                        name="title"
                        value={editForm.title}
                        onChange={handleEditChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : (
                      post.title
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {editId === post._id ? (
                      <input
                        type="text"
                        name="category"
                        value={editForm.category}
                        onChange={handleEditChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : (
                      post.category
                    )}
                  </td>
                  <td className="px-4 py-3 space-y-1">
                    {editId === post._id ? (
                      <>
                        <input
                          type="text"
                          name="content"
                          value={editForm.content}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded w-full mb-1"
                          placeholder="Content"
                        />
                        <input
                          type="text"
                          name="image"
                          value={editForm.image}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded w-full"
                          placeholder="Image URL"
                        />
                      </>
                    ) : (
                      <>
                        <div className="text-sm text-gray-600 truncate">
                          {post.content}
                        </div>
                        {post.image && (
                          <img
                            src={post.image}
                            alt="post"
                            className="w-12 h-12 object-cover rounded"
                          />
                        )}
                      </>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(post.createdAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      {editId === post._id ? (
                        <>
                          <button
                            onClick={() => handleSave(post._id)}
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
                            disabled={loading}
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditId(null)}
                            className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleEditClick(post)}
                          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-xs"
                          disabled={loading}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() =>
                          handleDelete(post._id, post.userId || post.user?._id || user._id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                        disabled={loading}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllPost;
