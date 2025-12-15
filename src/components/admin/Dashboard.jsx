import React from 'react';
import { FiUsers, FiActivity, FiDollarSign, FiShoppingBag, FiTrendingUp, FiTrendingDown, FiPlus, FiFileText, FiDownload } from 'react-icons/fi';

const Dashboard = () => {
  // Mock data
  const kpis = [
    {
      title: 'Total Users',
      value: '12,458',
      change: '+12.5%',
      trend: 'up',
      icon: FiUsers,
      color: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: FiActivity,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Revenue',
      value: '₹2,45,678',
      change: '+15.3%',
      trend: 'up',
      icon: FiDollarSign,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'New Orders',
      value: '342',
      change: '-2.1%',
      trend: 'down',
      icon: FiShoppingBag,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const recentActivity = [
    { id: 1, type: 'order', user: 'John Doe', action: 'placed an order', item: 'Queens Necklace', time: '2 min ago', avatar: 'JD' },
    { id: 2, type: 'user', user: 'Sarah Williams', action: 'signed up', time: '15 min ago', avatar: 'SW' },
    { id: 3, type: 'order', user: 'Mike Johnson', action: 'cancelled order', item: '#1234', time: '1 hour ago', avatar: 'MJ' },
    { id: 4, type: 'review', user: 'Emma Brown', action: 'left a review', item: '5 stars', time: '2 hours ago', avatar: 'EB' },
    { id: 5, type: 'user', user: 'David Lee', action: 'updated profile', time: '3 hours ago', avatar: 'DL' },
  ];

  const quickActions = [
    { label: 'Create User', icon: FiUsers, color: 'bg-gradient-to-r from-cyan-500 to-teal-500' },
    { label: 'New Post', icon: FiFileText, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { label: 'Export CSV', icon: FiDownload, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-700 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${kpi.color}`}>
                <kpi.icon className="w-5 h-5 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                kpi.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {kpi.trend === 'up' ? (
                  <FiTrendingUp className="w-4 h-4" />
                ) : (
                  <FiTrendingDown className="w-4 h-4" />
                )}
                <span>{kpi.change}</span>
              </div>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {kpi.title}
            </h3>
            <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {kpi.value}
            </p>
            {/* Sparkline placeholder */}
            <div className="mt-4 h-12 flex items-end gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-cyan-100 to-teal-100 rounded-t"
                  style={{ height: `${Math.random() * 60 + 20}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Chart */}
        <div className="lg:col-span-2 bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Traffic Overview
            </h2>
            <select className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          {/* Chart placeholder */}
          <div className="h-64 flex items-end justify-between gap-2">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-cyan-500 to-teal-500 rounded-t hover:opacity-80 transition-opacity"
                style={{ height: `${Math.random() * 80 + 20}%` }}
                title={`Day ${i + 1}`}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
            <span style={{ fontFamily: "'Poppins', sans-serif" }}>Page views</span>
            <span style={{ fontFamily: "'Poppins', sans-serif" }}>Unique visitors</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Quick Actions
          </h2>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`w-full ${action.color} text-white rounded-lg p-4 flex items-center gap-3 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <action.icon className="w-5 h-5" />
                <span className="font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-700">
        <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Recent Activity
        </h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                {activity.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <span className="font-semibold">{activity.user}</span>{' '}
                  {activity.action}
                  {activity.item && (
                    <span className="text-gray-400"> - {activity.item}</span>
                  )}
                </p>
                <p className="text-sm text-gray-400 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

