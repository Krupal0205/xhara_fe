import React, { useState } from 'react';
import { FiSearch, FiFilter, FiMoreVertical, FiEye, FiEdit, FiTrash2, FiX, FiCheck, FiUserX, FiUserCheck } from 'react-icons/fi';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Mock users data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer', status: 'active', avatar: 'JD', createdAt: '2024-01-15' },
    { id: 2, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Admin', status: 'active', avatar: 'SW', createdAt: '2024-01-10' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Customer', status: 'suspended', avatar: 'MJ', createdAt: '2024-01-05' },
    { id: 4, name: 'Emma Brown', email: 'emma@example.com', role: 'Moderator', status: 'active', avatar: 'EB', createdAt: '2024-01-20' },
    { id: 5, name: 'David Lee', email: 'david@example.com', role: 'Customer', status: 'active', avatar: 'DL', createdAt: '2024-01-18' },
    { id: 6, name: 'Lisa Chen', email: 'lisa@example.com', role: 'Customer', status: 'active', avatar: 'LC', createdAt: '2024-01-12' },
    { id: 7, name: 'Robert Taylor', email: 'robert@example.com', role: 'Customer', status: 'suspended', avatar: 'RT', createdAt: '2024-01-08' },
    { id: 8, name: 'Maria Garcia', email: 'maria@example.com', role: 'Customer', status: 'active', avatar: 'MG', createdAt: '2024-01-22' },
  ]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === paginatedUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(paginatedUsers.map(u => u.id));
    }
  };

  const handleBulkAction = (action) => {
    if (action === 'delete') {
      setUsers(users.filter(u => !selectedUsers.includes(u.id)));
      setSelectedUsers([]);
    } else if (action === 'activate') {
      setUsers(users.map(u => selectedUsers.includes(u.id) ? { ...u, status: 'active' } : u));
      setSelectedUsers([]);
    } else if (action === 'suspend') {
      setUsers(users.map(u => selectedUsers.includes(u.id) ? { ...u, status: 'suspended' } : u));
      setSelectedUsers([]);
    }
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShowDrawer(true);
  };

  const roles = ['all', ...new Set(users.map(u => u.role))];

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Users
          </h2>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Add New User
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
          </div>

          {/* Role Filter */}
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {roles.map(role => (
              <option key={role} value={role}>
                {role === 'all' ? 'All Roles' : role}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Bulk Actions Bar */}
      {selectedUsers.length > 0 && (
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 flex items-center justify-between">
          <span className="text-cyan-900 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {selectedUsers.length} user{selectedUsers.length > 1 ? 's' : ''} selected
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => handleBulkAction('activate')}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Activate
            </button>
            <button
              onClick={() => handleBulkAction('suspend')}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Suspend
            </button>
            <button
              onClick={() => handleBulkAction('delete')}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === paginatedUsers.length && paginatedUsers.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  User
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Role
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Created At
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white font-semibold text-sm">
                        {user.avatar}
                      </div>
                      <span className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-red-100 text-red-700'
                    }`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <span className={`w-2 h-2 rounded-full ${
                        user.status === 'active' ? 'bg-emerald-500' : 'bg-red-500'
                      }`} />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {user.createdAt}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleViewUser(user)}
                        className="p-2 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        title="View"
                      >
                        <FiEye className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        title="Edit"
                      >
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                        title="Delete"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <span className="text-sm text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Showing {(currentPage - 1) * usersPerPage + 1} to {Math.min(currentPage * usersPerPage, filteredUsers.length)} of {filteredUsers.length} users
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* User Detail Drawer */}
      {showDrawer && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center sm:justify-end">
          <div className="bg-white w-full sm:w-96 h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto shadow-xl animate-slide-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                User Details
              </h3>
              <button
                onClick={() => setShowDrawer(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white font-bold text-2xl mb-4">
                  {selectedUser.avatar}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {selectedUser.name}
                </h4>
                <p className="text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {selectedUser.email}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-1 block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Role
                  </label>
                  <p className="text-gray-900 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {selectedUser.role}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-1 block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Status
                  </label>
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                    selectedUser.status === 'active'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-red-100 text-red-700'
                  }`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <span className={`w-2 h-2 rounded-full ${
                      selectedUser.status === 'active' ? 'bg-emerald-500' : 'bg-red-500'
                    }`} />
                    {selectedUser.status}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-1 block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Member Since
                  </label>
                  <p className="text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {selectedUser.createdAt}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Edit User
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Impersonate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;

