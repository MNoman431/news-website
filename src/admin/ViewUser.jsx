import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { getUserByIdThunk, updateUserThunk } from "../redux/thunks/UserThunk";

const ViewUser = () => {
  const location = useLocation();
  const [isEditing, setIsEditing] = useState(location.state?.edit || false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedUser, loading, error } = useSelector((state) => state.users);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    isAdmin: false,
  });

  useEffect(() => {
    if (id) {
      dispatch(getUserByIdThunk(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        username: selectedUser.username || "",
        email: selectedUser.email || "",
        isAdmin: selectedUser.isAdmin || false,
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = () => {
    dispatch(updateUserThunk({ userId: id, updatedData: formData }))
      .then(() => setIsEditing(false));
  };

  if (loading) return <p className="p-4 text-blue-500">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!selectedUser) return <p className="p-4">No user found.</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          User Details
        </h2>

        {/* {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition"
          >
            Edit
          </button>
        )} */}
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 md:p-8 max-w-xl">
        <div className="flex items-center mb-6">
          <img
            src={selectedUser.profilePicture}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border border-gray-300 dark:border-gray-700"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{selectedUser.username}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{selectedUser.email}</p>
          </div>
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Is Admin?</label>
              <input
                type="checkbox"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={handleChange}
                className="accent-blue-600 scale-125"
              />
            </div> */}

            <div className="flex gap-4 pt-4">
              <button
                onClick={handleUpdate}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p>
              <strong>Admin:</strong>{" "}
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                selectedUser.isAdmin ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {selectedUser.isAdmin ? "Yes" : "No"}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewUser;
