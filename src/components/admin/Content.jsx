import React, { useState } from 'react';
import { FiPlus, FiEdit, FiEye, FiTrash2, FiGrid, FiList, FiSearch } from 'react-icons/fi';

const Content = () => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock posts data
  const [posts] = useState([
    { id: 1, title: 'Introduction to Silver Jewelry', slug: 'introduction-silver-jewelry', status: 'published', category: 'Blog', tags: ['jewelry', 'silver'], createdAt: '2024-01-20', views: 1234 },
    { id: 2, title: 'Care Guide for Your Silver Pieces', slug: 'care-guide-silver', status: 'draft', category: 'Guide', tags: ['care', 'maintenance'], createdAt: '2024-01-18', views: 0 },
    { id: 3, title: 'Latest Collection Launch', slug: 'latest-collection-launch', status: 'published', category: 'News', tags: ['collection', 'launch'], createdAt: '2024-01-15', views: 2456 },
    { id: 4, title: 'How to Choose the Perfect Ring', slug: 'choose-perfect-ring', status: 'published', category: 'Guide', tags: ['rings', 'guide'], createdAt: '2024-01-12', views: 1890 },
    { id: 5, title: 'Silver vs Gold: A Comparison', slug: 'silver-vs-gold', status: 'draft', category: 'Blog', tags: ['comparison'], createdAt: '2024-01-10', views: 0 },
  ]);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.slug.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const togglePostStatus = (postId) => {
    // In real app, this would update the post status
    console.log('Toggle status for post:', postId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Content / Posts
          </h2>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <FiPlus className="w-4 h-4" />
            Create New Post
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
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
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex gap-2 bg-gray-50 p-1 rounded-lg border border-gray-200">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list'
                  ? 'bg-white text-cyan-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FiList className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white text-cyan-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FiGrid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Posts List/Grid */}
      {viewMode === 'list' ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Tags
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Views
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Created
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {post.title}
                        </p>
                        <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          /{post.slug}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={post.status === 'published'}
                          onChange={() => togglePostStatus(post.id)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-teal-500"></div>
                        <span className="ml-3 text-sm text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {post.status === 'published' ? 'Published' : 'Draft'}
                        </span>
                      </label>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-cyan-50 text-cyan-700 rounded text-xs font-medium"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {post.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {post.createdAt}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
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
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {post.category}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={post.status === 'published'}
                    onChange={() => togglePostStatus(post.id)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-teal-500"></div>
                </label>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                /{post.slug}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-cyan-50 text-cyan-700 rounded text-xs font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {post.views.toLocaleString()} views
                </span>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors">
                    <FiEdit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Content;

