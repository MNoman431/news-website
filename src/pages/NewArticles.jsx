// import React from "react";


// const NewArticles = () => {
//   return (
//     <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 text-slate-700 dark:text-gray-300 min-h-screen">
//       {/* Sidebar */}
//       <aside className="p-6 md:w-1/4 bg-white dark:bg-gray-800 shadow-md border-r border-gray-300 dark:border-gray-700">
//         <form className="flex flex-col gap-6">
//           <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
//             Filters
//           </h2>

//           {/* Search Input */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="searchTerm" className="font-medium text-gray-600 dark:text-gray-400">
//               Search Term:
//             </label>
//             <input
//               type="text"
//               id="searchTerm"
//               placeholder="Search..."
//               className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-slate-700 dark:text-gray-300"
//             />
//           </div>

//           {/* Sort By */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="sortBy" className="font-medium text-gray-600 dark:text-gray-400">
//               Sort By:
//             </label>
//             <select
//               id="sortBy"
//               className="border border-slate-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-md px-3 py-2"
//             >
//               <option value="desc">Latest</option>
//               <option value="asc">Oldest</option>
//             </select>
//           </div>

//           {/* Category */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="category" className="font-medium text-gray-600 dark:text-gray-400">
//               Category:
//             </label>
//             <select
//               id="category"
//               className="border border-slate-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-md px-3 py-2"
//             >
//               <option value="worldnews">World News</option>
//               <option value="sportsnews">Sports News</option>
//               <option value="localnews">Local News</option>
//               <option value="entertainmentnews">Entertainment</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-red-600 hover:bg-red-700 transition text-white py-2 px-4 rounded-md shadow-lg"
//           >
//             Apply Filters
//           </button>
//         </form>
//       </aside>

//       {/* Main Content */}
//       <main className="w-full">
//         <h1 className="text-2xl font-semibold text-slate-700 dark:text-gray-300 p-3 mt-5">
//           News Articles:
//         </h1>

//         <div className="h-[1px] bg-slate-300 dark:bg-gray-700 mb-4 mx-4" />

//         <div className="p-7 flex flex-wrap gap-4">
//           {/* Dummy content - can be replaced with PostCards */}
//           <p className="text-xl text-gray-500 dark:text-gray-400">
//             Articles will appear here...
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default NewArticles;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPostsThunk } from "../redux/thunks/PostThunk";
// // import { fetchPostsThunk } from "../../redux/thunks/PostThunk";

// const NewArticles = () => {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state.post);

//   useEffect(() => {
//     dispatch(fetchPostsThunk());
//   }, [dispatch]);

//   return (
//     <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 text-slate-700 dark:text-gray-300 min-h-screen">
//       {/* Sidebar */}
//       <aside className="p-6 md:w-1/4 bg-white dark:bg-gray-800 shadow-md border-r border-gray-300 dark:border-gray-700">
//         <form className="flex flex-col gap-6">
//           <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
//             Filters
//           </h2>

//           {/* Search Input */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="searchTerm" className="font-medium">
//               Search Term:
//             </label>
//             <input
//               type="text"
//               id="searchTerm"
//               placeholder="Search..."
//               className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700"
//             />
//           </div>

//           {/* Sort By */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="sortBy" className="font-medium">
//               Sort By:
//             </label>
//             <select
//               id="sortBy"
//               className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700"
//             >
//               <option value="desc">Latest</option>
//               <option value="asc">Oldest</option>
//             </select>
//           </div>

//           {/* Category */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="category" className="font-medium">
//               Category:
//             </label>
//             <select
//               id="category"
//               className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700"
//             >
//               <option value="worldnews">World News</option>
//               <option value="sportsnews">Sports News</option>
//               <option value="localnews">Local News</option>
//               <option value="entertainmentnews">Entertainment</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md shadow"
//           >
//             Apply Filters
//           </button>
//         </form>
//       </aside>

//       {/* Main Content */}
//       <main className="w-full">
//         <h1 className="text-2xl font-semibold p-3 mt-5">
//           News Articles:
//         </h1>

//         <div className="h-[1px] bg-slate-300 dark:bg-gray-700 mb-4 mx-4" />

//         <div className="p-7 flex flex-wrap gap-6">
//           {loading && <p className="text-blue-500">Loading posts...</p>}
//           {error && <p className="text-red-500">Error: {error}</p>}
//           {!loading && posts.length === 0 && (
//             <p className="text-gray-500 italic">No articles found.</p>
//           )}

//           {!loading &&
//             posts.map((post) => (
//               <div
//                 key={post._id}
//                 className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-4 w-full md:w-[48%] lg:w-[30%]"
//               >
//                 {post.image && (
//                   <img
//                     src={post.image}
//                     alt="Post"
//                     className="w-full h-40 object-cover rounded mb-3"
//                   />
//                 )}
//                 <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
//                   {post.content}
//                 </p>
//                 <div className="mt-2 text-xs text-gray-500">
//                   Category: {post.category || "Uncategorized"}
//                 </div>
//                 <div className="text-xs text-gray-400">
//                   Posted: {new Date(post.createdAt).toLocaleDateString()}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default NewArticles;




// gpt///////////////filter
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPostsThunk } from "../redux/thunks/PostThunk";

// const NewArticles = () => {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state.post);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("desc");
//   const [category, setCategory] = useState("");

//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     dispatch(fetchPostsThunk({ searchTerm, category, sort: sortBy }));
//   };

//   useEffect(() => {
//     dispatch(fetchPostsThunk());
//   }, [dispatch]);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-900 text-slate-800 dark:text-gray-300">
//       {/* Sidebar */}
//       <aside className="p-6 md:w-1/4 bg-gray-50 dark:bg-gray-800 shadow-md border-r border-gray-200 dark:border-gray-700">
//         <form onSubmit={handleFilterSubmit} className="flex flex-col gap-6">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">Filter Articles</h2>

//           {/* Search */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="searchTerm" className="font-medium">Search:</label>
//             <input
//               id="searchTerm"
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Type keywords..."
//               className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700"
//             />
//           </div>

//           {/* Sort */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="sortBy" className="font-medium">Sort By:</label>
//             <select
//               id="sortBy"
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700"
//             >
//               <option value="desc">Newest First</option>
//               <option value="asc">Oldest First</option>
//             </select>
//           </div>

//           {/* Category */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="category" className="font-medium">Category:</label>
//             <select
//               id="category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700"
//             >
//               <option value="">All</option>
//               <option value="worldnews">World News</option>
//               <option value="sportsnews">Sports News</option>
//               <option value="localnews">Local News</option>
//               <option value="entertainmentnews">Entertainment</option>
//             </select>
//           </div>

//           <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow">
//             Apply
//           </button>
//         </form>
//       </aside>

//       {/* Main */}
//       <main className="w-full">
//         <h1 className="text-3xl font-bold px-6 pt-6">Latest Articles</h1>
//         <div className="h-[1px] bg-gray-300 dark:bg-gray-600 my-4 mx-6" />

//         <div className="flex flex-col gap-6 px-6 pb-10">
//           {loading && <p className="text-blue-500">Loading articles...</p>}
//           {error && <p className="text-red-500">Error: {error}</p>}
//           {!loading && posts.length === 0 && <p className="text-gray-500 italic">No articles found.</p>}

//           {posts.map((post) => (
//             <div
//               key={post._id}
//               className="flex flex-col md:flex-row gap-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
//             >
//               {post.image && (
//                 <img
//                   src={post.image}
//                   alt="article thumbnail"
//                   className="w-full md:w-64 h-48 object-cover"
//                 />
//               )}

//               <div className="p-4 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4">
//                     {post.content}
//                   </p>
//                 </div>
//                 <div className="mt-3 flex justify-between text-sm text-gray-500 dark:text-gray-400">
//                   <span>Category: {post.category || "Uncategorized"}</span>
//                   <span>{new Date(post.createdAt).toLocaleDateString()}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default NewArticles;












// //////////////////////////////////////////////////////////////
// top imports same as before
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPostsThunk } from "../redux/thunks/PostThunk";
// import { createCommentThunk } from "../redux/thunks/CommentThunk"; // 🔥 removed getPostCommentsThunk

// const NewArticles = () => {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state.post);
//   const commentsByPostId = useSelector((state) => state.comments.commentsByPost || {});
//   const user = useSelector((state) => state.auth.user); // ✅ moved here

//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("desc");
//   const [category, setCategory] = useState("");
//   const [newComments, setNewComments] = useState({});

//   useEffect(() => {
//     dispatch(fetchPostsThunk());
//   }, [dispatch]);

//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     dispatch(fetchPostsThunk({ searchTerm, category, sort: sortBy }));
//   };

//   const handleCommentChange = (postId, text) => {
//     setNewComments((prev) => ({ ...prev, [postId]: text }));
//   };

//   const handleAddComment = (postId) => {
//     const content = newComments[postId];
//     if (!content?.trim()) return;

//     const token = localStorage.getItem("token");
//     const userId = user?._id;

//     dispatch(createCommentThunk({ content, postId, userId, token }))
//       .then(() => {
//         // optionally: toast or success message
//         setNewComments((prev) => ({ ...prev, [postId]: "" }));
//       });
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-900 text-slate-800 dark:text-gray-300">
//       {/* Sidebar */}
//       <aside className="p-6 md:w-1/4 bg-gray-50 dark:bg-gray-800 shadow-md border-r border-gray-200 dark:border-gray-700">
//         <form onSubmit={handleFilterSubmit} className="flex flex-col gap-6">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">Filter Articles</h2>

//           {/* ...Filter form remains same... */}
          
//         </form>
//       </aside>

//       {/* Main */}
//       <main className="w-full">
//         <h1 className="text-3xl font-bold px-6 pt-6">Latest Articles</h1>
//         <div className="h-[1px] bg-gray-300 dark:bg-gray-600 my-4 mx-6" />

//         <div className="flex flex-col gap-6 px-6 pb-10">
//           {loading && <p className="text-blue-500">Loading articles...</p>}
//           {error && <p className="text-red-500">Error: {error}</p>}
//           {!loading && posts.length === 0 && <p className="text-gray-500 italic">No articles found.</p>}

//           {posts.map((post) => (
//             <div key={post._id} className="flex flex-col gap-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden p-4">
//               {/* Image + Content */}
//               <div className="flex flex-col md:flex-row gap-4">
//                 {post.image && (
//                   <img src={post.image} alt="thumbnail" className="w-full md:w-64 h-48 object-cover rounded-md" />
//                 )}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//                     <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4">{post.content}</p>
//                   </div>
//                   <div className="mt-3 flex justify-between text-sm text-gray-500 dark:text-gray-400">
//                     <span>Category: {post.category || "Uncategorized"}</span>
//                     <span>{new Date(post.createdAt).toLocaleDateString()}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Comments */}
//               <div className="mt-4 border-t border-gray-300 pt-3">
//                 <input
//                   type="text"
//                   value={newComments[post._id] || ""}
//                   onChange={(e) => handleCommentChange(post._id, e.target.value)}
//                   placeholder="Write a comment..."
//                   className="border px-3 py-2 rounded-md w-full mb-2 bg-gray-100 dark:bg-gray-700"
//                 />
//                 <button
//                   onClick={() => handleAddComment(post._id)}
//                   className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
//                 >
//                   Add Comment
//                 </button>

//                 <div className="mt-3">
//                   <h4 className="font-medium">Comments:</h4>
//                   {commentsByPostId[post._id]?.length > 0 ? (
//                     commentsByPostId[post._id].map((comment) => (
//                       <p key={comment._id} className="text-sm pl-2 text-gray-600 dark:text-gray-400">• {comment.content}</p>
//                     ))
//                   ) : (
//                     <p className="text-sm text-gray-500 italic">No comments yet.</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default NewArticles;
// /////////////////////////////////////////// yeh mera wo code hai jismy bs createcooment wla kam kr ha or designing sari hai
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsThunk } from "../redux/thunks/PostThunk";
import { createCommentThunk } from "../redux/thunks/CommentThunk"; // ✅ only createCommentThunk
import { getPostCommentsThunk } from "../redux/thunks/CommentThunk";


const NewArticles = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);
  const commentsByPostId = useSelector((state) => state.comments.commentsByPost || {});
  const user = useSelector((state) => state.auth.user);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("desc");
  const [category, setCategory] = useState("");
  const [newComments, setNewComments] = useState({});

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);

  useEffect(() => {
  if (posts?.length > 0) {
    posts.forEach((post) => {
      dispatch(getPostCommentsThunk(post._id));
    });
  }
}, [posts, dispatch]);


  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPostsThunk({ searchTerm, category, sort: sortBy }));
  };

  const handleCommentChange = (postId, text) => {
    setNewComments((prev) => ({ ...prev, [postId]: text }));
  };

  const handleAddComment = (postId) => {
    const content = newComments[postId];
    if (!content?.trim()) return;

    const token = localStorage.getItem("token");
    const userId = user?._id;

    dispatch(createCommentThunk({ content, postId, userId, token }))
      .then(() => {
        setNewComments((prev) => ({ ...prev, [postId]: "" }));
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-900 text-slate-800 dark:text-gray-300">
      {/* Sidebar */}
      <aside className="p-6 md:w-1/4 bg-gray-50 dark:bg-gray-800 shadow-md border-r border-gray-200 dark:border-gray-700">
        <form onSubmit={handleFilterSubmit} className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">Filter Articles</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="searchTerm" className="font-medium">Search:</label>
            <input
              id="searchTerm"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700"
              placeholder="Type keywords..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="sortBy" className="font-medium">Sort By:</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="font-medium">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700"
            >
              <option value="">All</option>
              <option value="worldnews">World News</option>
              <option value="sportsnews">Sports News</option>
              <option value="localnews">Local News</option>
              <option value="entertainmentnews">Entertainment</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow">
            Apply
          </button>
        </form>
      </aside>

      {/* Main */}
      <main className="w-full">
        <h1 className="text-3xl font-bold px-6 pt-6">Latest Articles</h1>
        <div className="h-[1px] bg-gray-300 dark:bg-gray-600 my-4 mx-6" />

        <div className="flex flex-col gap-6 px-6 pb-10">
          {loading && <p className="text-blue-500">Loading articles...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!loading && posts.length === 0 && <p className="text-gray-500 italic">No articles found.</p>}

          {posts.map((post) => (
            <div key={post._id} className="flex flex-col gap-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden p-4">
              {/* Image + Content */}
              <div className="flex flex-col md:flex-row gap-4">
                {post.image && (
                  <img src={post.image} alt="thumbnail" className="w-full md:w-64 h-48 object-cover rounded-md" />
                )}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4">{post.content}</p>
                  </div>
                  <div className="mt-3 flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Category: {post.category || "Uncategorized"}</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div className="mt-4 border-t border-gray-300 pt-3">
                <input
                  type="text"
                  value={newComments[post._id] || ""}
                  onChange={(e) => handleCommentChange(post._id, e.target.value)}
                  placeholder="Write a comment..."
                  className="border px-3 py-2 rounded-md w-full mb-2 bg-gray-100 dark:bg-gray-700"
                />
                <button
                  onClick={() => handleAddComment(post._id)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                >
                  Add Comment
                </button>

                <div className="mt-3">
                  <h4 className="font-medium">Comments:</h4>
                  {commentsByPostId[post._id]?.length > 0 ? (
                    commentsByPostId[post._id].map((comment) => (
                      <p key={comment._id} className="text-sm pl-2 text-gray-600 dark:text-gray-400">• {comment.content}</p>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 italic">No comments yet.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NewArticles;
