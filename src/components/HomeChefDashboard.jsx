// src/components/HomeChefDashboard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaListAlt,
  FaMoneyBillWave,
  FaChartLine,
  FaUserCircle,
  FaCog,
  FaBell,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import ChefOverview from "../components/chef/ChefOverview";
import ChefOrders from "../components/chef/ChefOrders";
import ChefMenu from "../components/chef/ChefMenu";
import ChefEarnings from "../components/chef/ChefEarnings";
import ChefProfile from "../components/chef/ChefProfile";
import ChefSettings from "../components/chef/ChefSettings";

export default function HomeChefDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const chefName = "Chef Anjali"; // <- replace with dynamic name later

  const [orders, setOrders] = useState([
    { id: "HC-ORD-1001", user: "Ravi Sharma", item: "Paneer Butter Masala (1 plate)", price: 180, status: "Pending", date: "2025-04-12", address: "Sector 21, Delhi" },
    { id: "HC-ORD-1002", user: "Meera Joshi", item: "Masala Dosa (2)", price: 120, status: "Delivered", date: "2025-04-11", address: "MG Road, Bangalore" },
    { id: "HC-ORD-1003", user: "Arjun Kumar", item: "Aloo Paratha (3)", price: 150, status: "Pending", date: "2025-04-10", address: "Salt Lake, Kolkata" },
  ]);
  const [menu, setMenu] = useState([
    { id: 1, name: "Paneer Butter Masala", price: 180, description: "Creamy tomato gravy with house-made paneer", available: true },
    { id: 2, name: "Masala Dosa", price: 60, description: "Crispy dosa with spicy potato masala", available: true },
    { id: 3, name: "Aloo Paratha", price: 50, description: "Stuffed paratha served with curd & pickle", available: false },
  ]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", price: "", description: "" });
  const [isAvailable, setIsAvailable] = useState(true);

  function toggleOrderStatus(orderId) {
    setOrders((prev) =>
      prev.map((o) => o.id === orderId ? { ...o, status: o.status === "Delivered" ? "Pending" : "Delivered" } : o)
    );
  }
  function viewOrder(order) { setSelectedOrder(order); }
  function closeOrderModal() { setSelectedOrder(null); }
  function deleteOrder(orderId) {
    setOrders((prev) => prev.filter((o) => o.id !== orderId));
    if (selectedOrder?.id === orderId) setSelectedOrder(null);
  }
  function addMenuItem(e) {
    e.preventDefault();
    if (!newItem.name || !newItem.price) return;
    const id = menu.length ? Math.max(...menu.map((m) => m.id)) + 1 : 1;
    setMenu([...menu, { id, name: newItem.name, price: Number(newItem.price), description: newItem.description || "", available: true }]);
    setNewItem({ name: "", price: "", description: "" });
    setShowAddItem(false);
  }
  function toggleMenuAvailability(itemId) {
    setMenu(menu.map((m) => m.id === itemId ? { ...m, available: !m.available } : m));
  }
  function deleteMenuItem(itemId) {
    setMenu(menu.filter((m) => m.id !== itemId));
  }

  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === "Pending").length;
  const totalEarnings = orders.reduce((s, o) => s + (o.status === "Delivered" ? o.price : 0), 0);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 p-5 flex flex-col">
        <Link to="/" className="mb-5 flex items-center">
          <img
            src="/images/loggo.png"
            alt="HomeMe Logo"
            className="w-28 cursor-pointer"
          />
        </Link>
        <nav className="space-y-4">
          {[
            { key: "Overview", label: "Overview", icon: <FaChartLine /> },
            { key: "Orders", label: "Orders", icon: <FaListAlt /> },
            { key: "Menu", label: "Menu", icon: <FaUtensils /> },
            { key: "Earnings", label: "Earnings", icon: <FaMoneyBillWave /> },
            { key: "Profile", label: "Profile", icon: <FaUserCircle /> },
            { key: "Settings", label: "Settings", icon: <FaCog /> },
          ].map((tab) => (
            <li
              key={tab.key}
              className={`flex items-center space-x-3 cursor-pointer p-2 rounded-md ${
                activeTab === tab.key ? "text-orange-400 bg-gray-900" : "hover:text-green-400"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon} <span>{tab.label}</span>
            </li>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="w-4/5 p-5 overflow-auto">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-5 bg-gray-800 p-3 rounded-lg">
          <h2 className="text-3xl font-bold">{activeTab}</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search orders, dishes..."
                className="bg-gray-900 text-white px-4 py-2 rounded-full placeholder-gray-400 focus:outline-none"
              />
              <FiSearch className="absolute right-3 top-2 text-gray-400" />
            </div>
            <button className="p-2 rounded-md bg-gray-700 hover:bg-gray-600">
              <FaBell />
            </button>
            <div
              className="flex items-center cursor-pointer space-x-2"
              onClick={() => setActiveTab("Profile")}
            >
              <FaUserCircle className="text-2xl" />
              <span className="hidden md:inline">{chefName}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        {activeTab === "Overview" && (
          <ChefOverview
            totalOrders={totalOrders}
            pendingOrders={pendingOrders}
            totalEarnings={totalEarnings}
            menu={menu}
            orders={orders}
            setActiveTab={setActiveTab}
            cardStyle="bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl p-5 transition-transform transform hover:-translate-y-1"
          />
        )}
        {activeTab === "Orders" && (
          <ChefOrders
            orders={orders}
            viewOrder={viewOrder}
            toggleOrderStatus={toggleOrderStatus}
            deleteOrder={deleteOrder}
          />
        )}
        {activeTab === "Menu" && (
          <ChefMenu
            showAddItem={showAddItem}
            setShowAddItem={setShowAddItem}
            addMenuItem={addMenuItem}
            newItem={newItem}
            setNewItem={setNewItem}
            menu={menu}
            toggleMenuAvailability={toggleMenuAvailability}
            deleteMenuItem={deleteMenuItem}
          />
        )}
        {activeTab === "Earnings" && <ChefEarnings totalEarnings={totalEarnings} />}
        {activeTab === "Profile" && <ChefProfile />}
        {activeTab === "Settings" && <ChefSettings />}
      </div>

      {/* Order Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-900 p-6 rounded-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{selectedOrder.item}</h3>
              <button onClick={closeOrderModal} className="text-gray-400 hover:text-white">Close</button>
            </div>
            <p className="text-gray-300 mb-2">{selectedOrder.user} • {selectedOrder.date}</p>
            <p className="mb-4">{selectedOrder.address}</p>
            <div className="flex space-x-3">
              <button onClick={() => toggleOrderStatus(selectedOrder.id)} className="bg-orange-600 px-4 py-2 rounded">Toggle Status</button>
              <button onClick={() => deleteOrder(selectedOrder.id)} className="bg-red-600 px-4 py-2 rounded">Delete</button>
              <button onClick={closeOrderModal} className="bg-gray-700 px-4 py-2 rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
