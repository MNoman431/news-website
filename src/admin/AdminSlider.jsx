import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSlider = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-lg z-50">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">Admin Panel</h1>
      </div>

      <nav className="flex flex-col p-4 gap-3 overflow-y-auto">
        <NavItem to="/admin/dashboard" label="📊 Dashboard" />
        <NavItem to="/admin/users" label="👥 Users" />
        <NavItem to="/admin/create-post" label="📝 Create Post" />
        <NavItem to="/admin/all-posts" label="📚 All Posts" />
      </nav>
    </aside>
  );
};

// ✅ Reusable NavItem Component
const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-4 py-2 rounded text-sm font-medium transition-colors duration-200 
       ${isActive ? 'bg-gray-700 text-yellow-300' : 'hover:bg-gray-700'}`
    }
  >
    {label}
  </NavLink>
);

export default AdminSlider;
