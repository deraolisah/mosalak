import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/user/DashboardSidebar';
import DashboardHeader from '../components/user/DashboardHeader';

const UserDashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 ml-64 mt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserDashboardLayout;