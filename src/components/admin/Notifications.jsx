import React, { useState } from 'react';
import { FiBell, FiCheck, FiX, FiSettings, FiMail, FiPhone } from 'react-icons/fi';

const Notifications = () => {
  const [filter, setFilter] = useState('all');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  // Mock notifications data
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'order', title: 'New Order Received', message: 'Order #1234 from John Doe', time: '2 min ago', read: false },
    { id: 2, type: 'user', title: 'New User Registration', message: 'Sarah Williams signed up', time: '15 min ago', read: false },
    { id: 3, type: 'order', title: 'Order Shipped', message: 'Order #1235 has been shipped', time: '1 hour ago', read: true },
    { id: 4, type: 'system', title: 'System Update', message: 'Scheduled maintenance completed', time: '2 hours ago', read: true },
    { id: 5, type: 'user', title: 'User Profile Updated', message: 'Mike Johnson updated profile', time: '3 hours ago', read: false },
  ]);

  const filteredNotifications = filter === 'all'
    ? notifications
    : notifications.filter(n => n.type === filter);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'order':
        return '📦';
      case 'user':
        return '👤';
      case 'system':
        return '⚙️';
      default:
        return '🔔';
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'order':
        return 'bg-blue-100 text-blue-700';
      case 'user':
        return 'bg-emerald-100 text-emerald-700';
      case 'system':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Notifications
            </h2>
            <p className="text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Mark All as Read
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notifications List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Filters */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex flex-wrap gap-2">
              {['all', 'order', 'user', 'system'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                    filter === filterType
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {filterType === 'all' ? 'All' : filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="space-y-3">
            {filteredNotifications.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
                <FiBell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  No notifications found
                </p>
              </div>
            ) : (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 ${
                    !notification.read ? 'border-l-4 border-l-cyan-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg ${getNotificationColor(notification.type)} flex items-center justify-center text-lg flex-shrink-0`}>
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className={`font-semibold mb-1 ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {notification.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {notification.message}
                          </p>
                          <p className="text-gray-400 text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {notification.time}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                              title="Mark as read"
                            >
                              <FiCheck className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                            title="Delete"
                          >
                            <FiX className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <FiSettings className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Notification Settings
            </h3>
          </div>
          <div className="space-y-4">
            {/* Email Notifications */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Email Notifications
                  </p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Receive notifications via email
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-teal-500"></div>
              </label>
            </div>

            {/* SMS Notifications */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    SMS Notifications
                  </p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Receive notifications via SMS
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={smsNotifications}
                  onChange={(e) => setSmsNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-teal-500"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

