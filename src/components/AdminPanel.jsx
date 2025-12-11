import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiUsers, FiShoppingBag, FiDollarSign, FiTrendingUp, FiPackage, FiSettings, FiMenu } from 'react-icons/fi';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Check if admin is logged in
  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isAdminLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/');
  };

  // Mock data for dashboard
  const stats = [
    { title: 'Total Orders', value: '1,234', icon: FiShoppingBag, color: 'bg-blue-600' },
    { title: 'Total Revenue', value: '₹2,45,678', icon: FiDollarSign, color: 'bg-green-600' },
    { title: 'Total Products', value: '156', icon: FiPackage, color: 'bg-purple-600' },
    { title: 'Total Customers', value: '892', icon: FiUsers, color: 'bg-orange-600' },
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', product: 'Queens Necklace', amount: '₹1,556', status: 'Delivered' },
    { id: '#1235', customer: 'Jane Smith', product: 'Ocean Breeze Pendant', amount: '₹1,999', status: 'Pending' },
    { id: '#1236', customer: 'Mike Johnson', product: 'Silver Whisper Leaf', amount: '₹1,199', status: 'Shipped' },
    { id: '#1237', customer: 'Sarah Williams', product: 'Azure Bloom Butterfly', amount: '₹4,299', status: 'Delivered' },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiTrendingUp },
    { id: 'products', label: 'Products', icon: FiPackage },
    { id: 'orders', label: 'Orders', icon: FiShoppingBag },
    { id: 'customers', label: 'Customers', icon: FiUsers },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex-shrink-0 flex flex-col h-screen">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
            SilverLab
          </h1>
          <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Admin Panel
          </p>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-black text-white border border-gray-700'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-gray-800 transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <FiLogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {menuItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
              </h2>
              <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Welcome back, Admin
              </p>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Dashboard Content */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {stat.value}
                        </p>
                      </div>
                      <div className={`${stat.color} p-3 rounded-lg`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Orders */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Recent Orders
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Order ID
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Customer
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Product
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Amount
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                          <td className="py-3 px-4 text-sm text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {order.id}
                          </td>
                          <td className="py-3 px-4 text-sm text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {order.customer}
                          </td>
                          <td className="py-3 px-4 text-sm text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {order.product}
                          </td>
                          <td className="py-3 px-4 text-sm text-white font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {order.amount}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                order.status === 'Delivered'
                                  ? 'bg-green-900 text-green-300'
                                  : order.status === 'Pending'
                                  ? 'bg-yellow-900 text-yellow-300'
                                  : 'bg-blue-900 text-blue-300'
                              }`}
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Products Management
                </h2>
                <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Add New Product
                </button>
              </div>
              <p className="text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Product management features will be available here.
              </p>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                All Orders
              </h2>
              <p className="text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Complete order management will be available here.
              </p>
            </div>
          )}

          {/* Customers Tab */}
          {activeTab === 'customers' && (
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Customer Management
              </h2>
              <p className="text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Customer management features will be available here.
              </p>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Site Name
                  </label>
                  <input
                    type="text"
                    defaultValue="SilverLab"
                    className="w-full px-4 py-2 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:border-gray-600"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Admin Email
                  </label>
                  <input
                    type="email"
                    defaultValue="admin@gmail.com"
                    className="w-full px-4 py-2 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:border-gray-600"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                </div>
                <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
