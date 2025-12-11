import React, { useState } from 'react';
import { FiSearch, FiDownload, FiEye, FiX, FiPackage, FiTruck, FiCheckCircle } from 'react-icons/fi';

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

  // Mock orders data
  const orders = [
    { id: '#1234', customer: 'John Doe', email: 'john@example.com', amount: 1556, status: 'delivered', date: '2024-01-20', items: [{ name: 'Queens Necklace', qty: 1, price: 1556 }] },
    { id: '#1235', customer: 'Jane Smith', email: 'jane@example.com', amount: 1999, status: 'pending', date: '2024-01-21', items: [{ name: 'Ocean Breeze Pendant', qty: 1, price: 1999 }] },
    { id: '#1236', customer: 'Mike Johnson', email: 'mike@example.com', amount: 1199, status: 'shipped', date: '2024-01-19', items: [{ name: 'Silver Whisper Leaf', qty: 1, price: 1199 }] },
    { id: '#1237', customer: 'Sarah Williams', email: 'sarah@example.com', amount: 4299, status: 'delivered', date: '2024-01-18', items: [{ name: 'Azure Bloom Butterfly', qty: 1, price: 4299 }] },
    { id: '#1238', customer: 'David Lee', email: 'david@example.com', amount: 2899, status: 'processing', date: '2024-01-22', items: [{ name: 'Royal Elegance Ring', qty: 1, price: 2899 }] },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowDrawer(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-emerald-100 text-emerald-700';
      case 'shipped':
        return 'bg-blue-100 text-blue-700';
      case 'processing':
        return 'bg-yellow-100 text-yellow-700';
      case 'pending':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <FiCheckCircle className="w-4 h-4" />;
      case 'shipped':
        return <FiTruck className="w-4 h-4" />;
      case 'processing':
        return <FiPackage className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Orders / Transactions
          </h2>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <FiDownload className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by order ID, customer, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>

          {/* Date Filter */}
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Date
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {order.id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {order.customer}
                      </p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {order.email}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      ₹{order.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {getStatusIcon(order.status)}
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {order.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => handleViewOrder(order)}
                        className="p-2 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        title="View Details"
                      >
                        <FiEye className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Drawer */}
      {showDrawer && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center sm:justify-end">
          <div className="bg-white w-full sm:w-96 h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto shadow-xl animate-slide-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Order Details
              </h3>
              <button
                onClick={() => setShowDrawer(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* Order Info */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Order Information
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>Order ID:</span>
                    <span className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>{selectedOrder.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>Date:</span>
                    <span className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>{selectedOrder.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>Status:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Customer
                </h4>
                <div className="space-y-2">
                  <p className="text-gray-900 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {selectedOrder.customer}
                  </p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {selectedOrder.email}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Items
                </h4>
                <div className="space-y-3">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Qty: {item.qty}
                        </p>
                      </div>
                      <span className="font-semibold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        ₹{item.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Total:
                  </span>
                  <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    ₹{selectedOrder.amount.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Timeline
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      <div className="w-0.5 h-8 bg-gray-200"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Order Placed</p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{selectedOrder.date}</p>
                    </div>
                  </div>
                  {selectedOrder.status !== 'pending' && (
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-0.5 h-8 bg-gray-200"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Processing</p>
                        <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{selectedOrder.date}</p>
                      </div>
                    </div>
                  )}
                  {(selectedOrder.status === 'shipped' || selectedOrder.status === 'delivered') && (
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                        {selectedOrder.status === 'delivered' && <div className="w-0.5 h-8 bg-gray-200"></div>}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Shipped</p>
                        <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{selectedOrder.date}</p>
                      </div>
                    </div>
                  )}
                  {selectedOrder.status === 'delivered' && (
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Delivered</p>
                        <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{selectedOrder.date}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;

