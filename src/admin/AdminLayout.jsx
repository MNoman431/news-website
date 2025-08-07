import React from 'react';
import AdminSlider from './AdminSlider';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '250px' }}>
        <AdminSlider />
      </div>
      <div style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
