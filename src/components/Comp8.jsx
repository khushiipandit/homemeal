import React, { useState } from "react";
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";
import { FaUtensils, FaUsers, FaChartBar, FaCog, FaChartPie, FaTruck, FaShoppingCart } from "react-icons/fa";
import OrdersPage from "./admin/OrdersPage"; // adjust path if OrdersPage.jsx is in a different folder
import UsersPage from "./admin/UsersPage"; // adjust path if needed
import HomeChefs from "./admin/HomeChefs"; // ✅ matches the JSX below
import AdminsPage from "./admin/AdminsPage";
import AnalyticsPage from "./admin/AnalyticsPage";
import DeliveryPartnersPage from "./admin/DeliveryPartnersPage";
import SettingsPage from "./admin/SettingsPage";



const data = [
  { name: "Jan", orders: 1000, revenue: 4000, chefs: 50, activeUsers: 300 },
  { name: "Feb", orders: 2000, revenue: 5000, chefs: 55, activeUsers: 350 },
  { name: "Mar", orders: 1500, revenue: 4500, chefs: 60, activeUsers: 400 },
  { name: "Apr", orders: 2200, revenue: 6000, chefs: 65, activeUsers: 420 },
  { name: "May", orders: 2500, revenue: 7000, chefs: 70, activeUsers: 450 },
];

const orders = [
  { id: 101, name: "Amit Sharma", date: "2025-03-30", status: "Completed", total: "₹1500", items: ["Paneer Tikka", "Naan", "Lassi"], dropPoint: "Sector 15, Gurgaon", chef: "Chef Rajesh", deliveryStatus: "Delivered" },
  { id: 102, name: "Priya Verma", date: "2025-03-29", status: "Pending", total: "₹800", items: ["Biryani", "Raita"], dropPoint: "Rohini, Delhi", chef: "Chef Kavita", deliveryStatus: "Being Prepared" },
  { id: 103, name: "Rohit Patel", date: "2025-03-28", status: "Canceled", total: "₹600", items: ["Masala Dosa", "Filter Coffee"], dropPoint: "Vasant Kunj, Delhi", chef: "Chef Ramesh", deliveryStatus: "Canceled" },
  { id: 104, name: "Sunita Joshi", date: "2025-03-27", status: "Completed", total: "₹1200", items: ["Rajma Chawal", "Papad"], dropPoint: "Dwarka, Delhi", chef: "Chef Manju", deliveryStatus: "Delivered" },
  { id: 105, name: "Ankit Mehta", date: "2025-03-26", status: "In Transit", total: "₹950", items: ["Pav Bhaji", "Cold Coffee"], dropPoint: "Connaught Place, Delhi", chef: "Chef Alok", deliveryStatus: "Out for Delivery" },
];

const Comp8 = () => {
  const [activeTab, setActiveTab] = useState("overview" );  // Set default to "settings" for testing
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeDetails, setActiveDetails] = React.useState(null);//delievry partner wala
  const [isModalOpen, setIsModalOpen] = useState(false); // Add your modal state here
  const [activeSection, setActiveSection] = useState('Profile'); 
  const [timeframe, setTimeframe] = useState("daily");   //new  ----------------------
  
  

  // Toggle function for modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [activeUserId, setActiveUserId] = React.useState(null);
  
  const toggleDetails = (id) => {
    setActiveUserId((prevId) => (prevId === id ? null : id));
  };
  const handleTimeframeChange = (newTimeframe) => {//new  ----------------------
    setTimeframe(newTimeframe);
  };
  const toggleUserStatus = (id) => {
  // Update the user status logic here
  console.log(`Toggling status for user ${id}`);
};

  
  

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      
      <div className="w-1/5 bg-gray-800 p-5 flex flex-col">
      
  <h1 className="text-2xl font-bold mb-5">HomeMeal</h1>
  <nav>
    <ul className="space-y-4">
      {[
        { name: "overview", icon: <FaChartPie />, label: "Overview" },
        { name: "orders", icon: <FaShoppingCart />, label: "Orders" },
        { name: "users", icon: <FaUsers />, label: "Users" },
        { name: "HomeChefs", icon: <FaUsers />, label: "HomeChefs" },
        { name: "Admins", icon: <FaUsers />, label: "Admins" },
        { name: "analytics", icon: <FaChartBar />, label: "Analytics" },
        { name: "Delivery Partners", icon: <FaTruck />, label: "Delivery Partners" },
        { name: "settings", icon: <FaCog />, label: "Settings" },
      ].map((tab) => (
        <li
          key={tab.name}
          className={`flex items-center space-x-3 cursor-pointer p-2 rounded-md ${
            activeTab === tab.name ? "text-orange-400 bg-gray-900" : "hover:text-green-400"
          }`}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.icon} <span>{tab.label}</span>
        </li>
      ))}
    </ul>
  </nav>
</div>

      {/* Main Content */}
      <div className="w-4/5 p-5 overflow-auto">
       {/* Top Navigation Menu */}
       <div className="flex justify-between items-center mb-5 bg-gray-800 p-3 rounded-lg">    {/*new---------------*/}
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <div className="space-x-4">
            {["daily", "weekly", "monthly"].map((period) => (
              <button
                key={period}
                className={`px-4 py-2 rounded-lg ${
                  timeframe === period ? "bg-orange-600" : "bg-orange-500"
                }`}
                onClick={() => handleTimeframeChange(period)}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        {activeTab === "overview" && (
          <div>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-5 rounded-lg text-center"><h3>Total Orders</h3><p className="text-2xl">372</p></div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-5 rounded-lg text-center"><h3>Users</h3><p className="text-2xl">220</p></div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-5 rounded-lg text-center"><h3>Revenue</h3><p className="text-2xl">$7,000</p></div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-5 rounded-lg text-center"><h3>Pending Orders</h3><p className="text-2xl">45</p></div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-4 mt-5">
              {/* Order Trends */}
              <div className="bg-gray-700 p-5 rounded-lg">
                <h3 className="text-xl mb-3">Order Trends</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip />
                    <Line type="monotone" dataKey="orders" stroke="#ffa500" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Revenue Growth */}
              <div className="bg-gray-700 p-5 rounded-lg">
                <h3 className="text-xl mb-3">Revenue Growth</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#ffa500" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Active Chefs */}
              <div className="bg-gray-700 p-5 rounded-lg">
                <h3 className="text-xl mb-3">Active Chefs</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip />
                    <Bar dataKey="chefs" fill="#32CD32" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              
              {/* Active Users */}
                    <div className="bg-gray-700 p-5 rounded-lg">
                           <h3 className="text-xl mb-3">Active Users</h3>
                           <ResponsiveContainer width="100%" height={200}>
                             <PieChart>
                               <Pie 
                                 data={data} 
                                 dataKey="activeUsers" 
                                 nameKey="name" 
                                 cx="50%" 
                                 cy="50%" 
                                 outerRadius={80} 
                                 label>
                                 {data.map((entry, index) => (
                                   <Cell key={`cell-${index}`} fill={["#1E90FF", "#32CD32", "#FFA500", "#FF6347", "#9370DB"][index % 5]} />
                                      ))}
                               </Pie>
                               <Tooltip />
                             </PieChart>
                           </ResponsiveContainer>
                    </div>
             {/* Active Users */}


            </div>
          </div>
        )}

{activeTab === "orders" && (
  <OrdersPage
    orders={orders}
    selectedOrder={selectedOrder}
    setSelectedOrder={setSelectedOrder}
  />
)}


{/* Users Section */}
{activeTab === "users" && (
  <UsersPage
    activeUserId={activeUserId}
    toggleDetails={toggleDetails}
    toggleUserStatus={toggleUserStatus}
  />
)}


{activeTab === "HomeChefs" && (
  <HomeChefs
    activeUserId={activeUserId}
    toggleDetails={toggleDetails}
    toggleUserStatus={toggleUserStatus}
  />
)}



{activeTab === "Admins" && (
  <AdminsPage
    activeUserId={activeUserId}
    toggleDetails={toggleDetails}
    toggleUserStatus={toggleUserStatus}
  />
)}



{/* Analytics Section */}
{activeTab === "analytics" && (
  <AnalyticsPage data={data} />
)}


{/* Delivery Partners Section */}
{activeTab === "Delivery Partners" && (
  <DeliveryPartnersPage
    activeDetails={activeDetails}
    setActiveDetails={setActiveDetails}
  />
)}

{/* Settings Section */}
{activeTab === "settings" && (
  <SettingsPage
    activeSection={activeSection}
    setActiveSection={setActiveSection}
  />
)}



      </div>
    </div>
  );
};

export default Comp8;
