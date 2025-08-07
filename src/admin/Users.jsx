import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserThunk, fetchUsersThunk } from "../redux/thunks/UserThunk";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  const handleView = (user) => navigate(`/admin/users/${user._id}`);
  const handleEdit = (user) => navigate(`/admin/users/${user._id}`, { state: { edit: true } });
  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUserThunk(userId));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">All Registered Users</h2>

      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-x-auto border dark:border-gray-700">
        {loading && <p className="text-blue-500 p-4">Loading users...</p>}
        {error && <p className="text-red-500 p-4">{error}</p>}
        {!loading && !error && users.length === 0 && (
          <p className="text-gray-600 dark:text-gray-300 p-4">No users found.</p>
        )}

        {!loading && !error && users.length > 0 && (
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase">
              <tr>
                <th className="py-3 px-4 font-medium">Profile</th>
                <th className="py-3 px-4 font-medium">Username</th>
                <th className="py-3 px-4 font-medium">Email</th>
                <th className="py-3 px-4 font-medium">Admin</th>
                <th className="py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-150">
                  <td className="py-3 px-4">
                    <img
                      src={user.profilePicture}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border border-gray-300"
                    />
                  </td>
                  <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{user.username}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{user.email}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        user.isAdmin
                          ? "bg-green-100 text-green-700 dark:bg-green-200"
                          : "bg-red-100 text-red-700 dark:bg-red-200"
                      }`}
                    >
                      {user.isAdmin ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleView(user)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Users;
