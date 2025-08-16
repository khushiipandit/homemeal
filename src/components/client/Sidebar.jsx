import React from "react";
import { FaHome, FaSearch, FaListAlt, FaTruck, FaWallet, FaHeart, FaUserCircle, FaQuestionCircle } from "react-icons/fa";

export default function Sidebar({ activeTab, setActiveTab, totalOrders, ACCENT, ACCENT_HOVER }) {
  const navItems = [
    { name: "Overview", icon: <FaHome /> },
    { name: "Browse", icon: <FaSearch /> },
    { name: "MyOrders", icon: <FaListAlt />, badge: totalOrders },
    { name: "Tracking", icon: <FaTruck /> },
    { name: "Wallet", icon: <FaWallet /> },
    { name: "Favourites", icon: <FaHeart /> },
    { name: "Profile", icon: <FaUserCircle /> },
    { name: "Support", icon: <FaQuestionCircle /> },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-4 space-y-2">
      <h1 className="text-2xl font-bold mb-4">Client</h1>
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setActiveTab(item.name)}
          className={`flex items-center justify-between w-full px-4 py-2 rounded-lg ${
            activeTab === item.name ? ACCENT : "bg-gray-800 hover:bg-gray-700"
          } ${ACCENT_HOVER} transition`}
        >
          <span className="flex items-center gap-3">{item.icon} {item.name}</span>
          {item.badge && <span className="bg-gray-700 px-2 py-0.5 rounded text-xs">{item.badge}</span>}
        </button>
      ))}
    </aside>
  );
}
