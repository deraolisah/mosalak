import React from 'react';
import { TrendingUp, ChevronRight, Shield, Star, Award } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome back, <span className="text-blue-600">Chioma Adeleke</span></h1>
            <div className="flex items-center space-x-2 mt-2">
              <span className="px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded-full">SILVER</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">VERIFIED</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Member since Jan 2026</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Active Orders */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Orders</p>
              <h3 className="text-2xl font-bold mt-2">2</h3>
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full flex items-center text-sm">
              <TrendingUp size={16} className="mr-1" />
              +3 this week
            </div>
          </div>
        </div>

        {/* Wallet Balance */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">Wallet Balance</p>
          <h3 className="text-2xl font-bold mt-2">₦450,000</h3>
        </div>

        {/* Funds in Escrow */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Funds in Escrow</p>
              <h3 className="text-2xl font-bold mt-2">₦125,000</h3>
            </div>
            <div className="text-blue-600 text-sm font-semibold">+3 orders</div>
          </div>
        </div>

        {/* Available Points */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">Available Points</p>
          <h3 className="text-2xl font-bold mt-2">3,450</h3>
          <a href="#" className="text-blue-600 text-sm flex items-center mt-2 hover:underline">
            Learn how to earn points <ChevronRight size={16} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* KYC Verification */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">KYC Verification Status</h3>
            <Shield className="text-blue-600" size={24} />
          </div>
          <p className="text-sm text-gray-500 mb-6">Your account verification level</p>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Level 2 Standard</span>
                <span className="text-sm text-green-600">✓ Verified</span>
              </div>
              <p className="text-sm text-gray-500">Current Transaction Limit</p>
              <p className="text-xl font-bold">₦500,000 <span className="text-sm font-normal text-gray-500">per transaction</span></p>
            </div>
          </div>
        </div>

        {/* Member Status */}
        <div className="bg-linear-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Award className="text-amber-600" size={28} />
              <div>
                <h3 className="font-semibold text-gray-800">Gold Member</h3>
                <p className="text-sm text-gray-500">Member since Jan 2026</p>
              </div>
            </div>
            <Star className="text-amber-500" size={24} />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Current Points</p>
              <p className="text-xl font-bold">3,450</p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Progress to platinum</span>
                <span className="font-semibold">53%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-amber-400 to-yellow-500" style={{ width: '53%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">1,550 points to next level</p>
            </div>

            <button className="w-full py-3 bg-white border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              View Badge Details
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
            DS
          </div>
          <div className="flex-1">
            <h4 className="font-semibold">Dorcas Samuel</h4>
            <p className="text-sm text-gray-500">Buyer</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;