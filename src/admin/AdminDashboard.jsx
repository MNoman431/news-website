import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Welcome to the Admin Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Total Users</h2>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">120</p>
        </div>

        {/* Card 2 */}
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Active News</h2>
          <p className="text-2xl font-bold text-green-600 dark:text-green-300">34</p>
        </div>

        {/* Card 3 */}
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Pending Reviews</h2>
          <p className="text-2xl font-bold text-red-600 dark:text-red-300">7</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
