import React, { useState } from 'react';
import { FiUpload, FiCopy, FiRefreshCw, FiSave } from 'react-icons/fi';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('brand');
  const [primaryColor, setPrimaryColor] = useState('#06b6d4'); // cyan-500
  const [secondaryColor, setSecondaryColor] = useState('#14b8a6'); // teal-500

  const tabs = [
    { id: 'brand', label: 'Brand Settings' },
    { id: 'roles', label: 'Roles & Permissions' },
    { id: 'integrations', label: 'Integrations' },
  ];

  const roles = [
    { id: 'admin', name: 'Admin', permissions: ['users.read', 'users.write', 'content.read', 'content.write', 'orders.read', 'orders.write', 'settings.write'] },
    { id: 'moderator', name: 'Moderator', permissions: ['users.read', 'content.read', 'content.write', 'orders.read'] },
    { id: 'customer', name: 'Customer', permissions: ['orders.read'] },
  ];

  const permissions = [
    { id: 'users.read', label: 'View Users' },
    { id: 'users.write', label: 'Manage Users' },
    { id: 'content.read', label: 'View Content' },
    { id: 'content.write', label: 'Manage Content' },
    { id: 'orders.read', label: 'View Orders' },
    { id: 'orders.write', label: 'Manage Orders' },
    { id: 'settings.write', label: 'Manage Settings' },
  ];

  const integrations = [
    { id: 'api', name: 'API Key', key: 'sk_live_1234567890abcdef', type: 'api' },
    { id: 'webhook', name: 'Webhook URL', key: 'https://api.xhara.com/webhook', type: 'webhook' },
  ];

  const handleCopyKey = (key) => {
    navigator.clipboard.writeText(key);
    // In real app, show toast notification
  };

  const handleRotateKey = (id) => {
    // In real app, rotate the key
    console.log('Rotate key:', id);
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Brand Settings */}
        {activeTab === 'brand' && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Brand Identity
              </h3>
              <div className="space-y-4">
                {/* Logo Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Logo
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                      <span className="text-gray-400 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Logo</span>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <FiUpload className="w-4 h-4" />
                      Upload Logo
                    </button>
                  </div>
                </div>

                {/* Favicon Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Favicon
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                      <span className="text-gray-400 text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>32x32</span>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <FiUpload className="w-4 h-4" />
                      Upload Favicon
                    </button>
                  </div>
                </div>

                {/* Primary Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Primary Color
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-16 h-16 rounded-lg border-2 border-gray-200 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Secondary Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Secondary Color
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-16 h-16 rounded-lg border-2 border-gray-200 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Site Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Site Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Xhara"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Roles & Permissions */}
        {activeTab === 'roles' && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Roles & Permissions
              </h3>
              <div className="space-y-4">
                {roles.map((role) => (
                  <div key={role.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {role.name}
                      </h4>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {role.permissions.length} permissions
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {permissions.map((permission) => {
                        const hasPermission = role.permissions.includes(permission.id);
                        return (
                          <label
                            key={permission.id}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={hasPermission}
                              onChange={() => {
                                // In real app, update permissions
                                console.log('Toggle permission:', permission.id, 'for role:', role.id);
                              }}
                              className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                            />
                            <span className="text-sm text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
                              {permission.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Integrations */}
        {activeTab === 'integrations' && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                API Keys & Webhooks
              </h3>
              <div className="space-y-4">
                {integrations.map((integration) => (
                  <div key={integration.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {integration.name}
                      </h4>
                      {integration.type === 'api' && (
                        <button
                          onClick={() => handleRotateKey(integration.id)}
                          className="px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          <FiRefreshCw className="w-4 h-4" />
                          Rotate
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={integration.key}
                        readOnly
                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono focus:outline-none"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                      <button
                        onClick={() => handleCopyKey(integration.key)}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        <FiCopy className="w-4 h-4" />
                        Copy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <FiSave className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

