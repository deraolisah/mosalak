import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, MessageSquare, Wallet, AlertCircle, Bell, User, LogOut } from 'lucide-react';

const DashboardSidebar = () => {
  const menuItems = [
    { path: '/account', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/account/orders', icon: ShoppingBag, label: 'Orders' },
    { path: '/account/messages', icon: MessageSquare, label: 'Messages' },
    { path: '/account/wallet', icon: Wallet, label: 'Wallet & Earnings' },
    { path: '/account/disputes', icon: AlertCircle, label: 'Disputes' },
    { path: '/account/notifications', icon: Bell, label: 'Notifications' },
    { path: '/account/profile', icon: User, label: 'Account' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 pt-16 z-20">
      {/* <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">MesalakHub</h1>
      </div> */}
      
      <nav className="mt-6 h-full overflow-y-auto">
        <ul className="space-y-1.5 px-4 h-full">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className='p-6 border-t border-gray-400 space-y-4 sticky bottom-0 bg-white'>
        <div className='flex items-center gap-3'>
          <img src="" alt='' className='w-6 h-6 bg-gray-100 rounded-full' />
          <div className='flex flex-col gap-px'>
            <span className='text-sm'> Dorcas Samuel </span>
            <small> Buyer </small>
          </div>
        </div>

        <div className='flex items-center gap-2 py-2 p-4 bg-gray-100 rounded-lg cursor-pointer'>
          <LogOut size={16} />
          Logout
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;