import React from "react";

const SettingsPage = ({ activeSection, setActiveSection }) => {
  const sections = [
    "General Settings",
    "User Management",
    "Profile Settings",
    "Security Settings",
    "API & Integration",
    "Backup & Restore",
    "System Logs",
    "Content Management",
    "Notification Settings",
    "Financial Settings",
    "Analytics & Reports",
    "Theme & UI Customization",
    "Developer Settings",
    "Data Import/Export",
    "Privacy & GDPR",
    "Help & Support",
    "Maintenance Mode",
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Settings</h2>
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white p-4 rounded-lg w-1/4">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li
                key={section}
                className={`p-2 rounded-md cursor-pointer hover:bg-gray-600 ${
                  activeSection === section ? "bg-gray-600" : ""
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="bg-gray-700 text-white p-6 rounded-lg w-3/4 ml-4">
          {activeSection === "General Settings" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">General Settings</h3>
              <p>Update site name, logo, timezone, and other basic settings.</p>
            </div>
          )}
          {activeSection === "User Management" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">User Management</h3>
              <p>Manage user accounts, roles, and permissions.</p>
            </div>
          )}
          {activeSection === "Profile Settings" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
              <p>Update profile information, password, and enable 2FA.</p>
            </div>
          )}
          {activeSection === "Security Settings" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Security Settings</h3>
              <p>Configure IP whitelisting, CAPTCHA, and password policies.</p>
            </div>
          )}
          {activeSection === "API & Integration" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">API & Integration</h3>
              <p>Manage API keys and third-party integrations.</p>
            </div>
          )}
          {activeSection === "Backup & Restore" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Backup & Restore</h3>
              <p>Manage data backups and restore settings.</p>
            </div>
          )}
          {activeSection === "System Logs" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">System Logs</h3>
              <p>View login history, error logs, and activity tracking.</p>
            </div>
          )}
          {activeSection === "Content Management" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Content Management</h3>
              <p>Add, edit, and delete content, manage media library.</p>
            </div>
          )}
          {activeSection === "Notification Settings" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
              <p>Configure email, push notifications, and system alerts.</p>
            </div>
          )}
          {activeSection === "Financial Settings" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Financial Settings</h3>
              <p>Configure payment gateways, taxes, and financial reports.</p>
            </div>
          )}
          {activeSection === "Analytics & Reports" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Analytics & Reports</h3>
              <p>View traffic, financial, and user engagement reports.</p>
            </div>
          )}
          {activeSection === "Theme & UI Customization" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Theme & UI Customization</h3>
              <p>Customize the UI, theme colors, and layout.</p>
            </div>
          )}
          {activeSection === "Developer Settings" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Developer Settings</h3>
              <p>Enable debug mode, error reporting, and custom scripts.</p>
            </div>
          )}
          {activeSection === "Data Import/Export" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Data Import/Export</h3>
              <p>Import or export data in various formats (CSV, JSON).</p>
            </div>
          )}
          {activeSection === "Privacy & GDPR" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Privacy & GDPR</h3>
              <p>Manage data privacy settings and compliance requirements.</p>
            </div>
          )}
          {activeSection === "Help & Support" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Help & Support</h3>
              <p>Access FAQs, support tickets, and documentation.</p>
            </div>
          )}
          {activeSection === "Maintenance Mode" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Maintenance Mode</h3>
              <p>Enable maintenance mode and customize the message.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
