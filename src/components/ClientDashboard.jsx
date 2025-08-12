// src/components/ClientDashboard.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaChartLine,
  FaUtensils,
  FaListAlt,
  FaTruck,
  FaWallet,
  FaHeart,
  FaQuestionCircle,
  FaAngleLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaRedo, // replaced FaRepeat with FaRedo
} from "react-icons/fa";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";


/**
 * ClientDashboard.jsx
 *
 * Single-file root dashboard for the "Client" (eater) role.
 * - Tailwind CSS utility classes assumed.
 * - Uses react-icons and recharts (install if not present):
 *     npm i react-icons recharts
 *
 * This component follows the visual language used in your Admin and HomeChef dashboards:
 * - Dark, glassy cards
 * - Rounded corners, subtle 3D shadows
 * - Orange accent for primary actions
 *
 * The component includes:
 * - Sidebar (Overview, Browse, Orders, Tracking, Wallet, Favourites, Profile, Support)
 * - Topbar (logo -> homepage Link, search, notifications, profile name & avatar)
 * - Center area with dynamic tabs including charts in Overview
 * - Mock data and interactive handlers (view order modal, reorder, mark as favourite)
 *
 * Replace mock data with API calls when backend is ready.
 */

const ACCENT = "bg-orange-600";
const ACCENT_HOVER = "hover:bg-orange-500";
const CARD_BG = "bg-gray-900/60";
const CARD_GLASS = "backdrop-blur-sm";

const lineData = [
  { day: "Mon", orders: 2, spent: 220 },
  { day: "Tue", orders: 1, spent: 120 },
  { day: "Wed", orders: 3, spent: 360 },
  { day: "Thu", orders: 0, spent: 0 },
  { day: "Fri", orders: 2, spent: 240 },
  { day: "Sat", orders: 4, spent: 480 },
  { day: "Sun", orders: 1, spent: 100 },
];

const spendingPie = [
  { name: "Meals", value: 70 },
  { name: "Delivery", value: 15 },
  { name: "Tips", value: 10 },
  { name: "Other", value: 5 },
];

const PIE_COLORS = ["#FFA94D", "#6EE7B7", "#FFD166", "#9CA3AF"];

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileName, setProfileName] = useState("Riya Patel");

  const [orders, setOrders] = useState([
    {
      id: "ORD-1001",
      chef: "Chef Anjali",
      items: "Paneer Butter Masala (1)",
      total: 180,
      status: "Delivered",
      date: "2025-04-12",
      address: "MG Road, Bengaluru",
    },
    {
      id: "ORD-1002",
      chef: "Chef Sameer",
      items: "Masala Dosa (2)",
      total: 120,
      status: "Pending",
      date: "2025-04-13",
      address: "Sector 15, Noida",
    },
    {
      id: "ORD-1003",
      chef: "Chef Priya",
      items: "Aloo Paratha (3)",
      total: 150,
      status: "Delivered",
      date: "2025-04-10",
      address: "Bandra, Mumbai",
    },
  ]);

  const [chefs, setChefs] = useState([
    {
      id: "C-101",
      name: "Chef Anjali",
      cuisine: "North Indian",
      rating: 4.8,
      priceAvg: 180,
      location: "Bengaluru",
      tags: ["vegetarian", "homestyle"],
      favourite: true,
    },
    {
      id: "C-102",
      name: "Chef Sameer",
      cuisine: "South Indian",
      rating: 4.6,
      priceAvg: 120,
      location: "Noida",
      tags: ["dosas", "breakfast"],
      favourite: false,
    },
    {
      id: "C-103",
      name: "Chef Priya",
      cuisine: "North Indian",
      rating: 4.7,
      priceAvg: 150,
      location: "Mumbai",
      tags: ["parathas", "homecooked"],
      favourite: false,
    },
  ]);

  const [wallet, setWallet] = useState({
    balance: 250,
    currency: "INR",
    transactions: [
      { id: 1, date: "2025-04-11", desc: "Order ORD-1002", amount: -120 },
      { id: 2, date: "2025-04-10", desc: "Top-up", amount: 500 },
      { id: 3, date: "2025-04-09", desc: "Order ORD-0999", amount: -200 },
    ],
  });

  const [selectedOrder, setSelectedOrder] = useState(null);

  // Derived stats for overview cards
  const totalOrders = orders.length;
  const pendingDeliveries = orders.filter((o) => o.status === "Pending").length;
  const completedOrders = orders.filter((o) => o.status === "Delivered").length;
  const balance = wallet.balance;

  // Simple search results for Browse
  const browseResults = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return chefs;
    return chefs.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.cuisine.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.tags.join(" ").toLowerCase().includes(q)
    );
  }, [search, chefs]);

  // Handlers
  function viewOrder(order) {
    setSelectedOrder(order);
  }

  function closeOrderModal() {
    setSelectedOrder(null);
  }

  function reorder(order) {
    // simple mock reorder: add a copy with new ID and today's date, pending
    const id = `ORD-${1000 + orders.length + 1}`;
    const newOrder = {
      ...order,
      id,
      date: new Date().toISOString().slice(0, 10),
      status: "Pending",
    };
    setOrders((prev) => [newOrder, ...prev]);
    setActiveTab("MyOrders");
  }

  function toggleFavouriteChef(chefId) {
    setChefs((prev) => prev.map((c) => (c.id === chefId ? { ...c, favourite: !c.favourite } : c)));
  }

  function topUpWallet(amount) {
    setWallet((prev) => ({
      ...prev,
      balance: prev.balance + amount,
      transactions: [{ id: Date.now(), date: new Date().toISOString().slice(0, 10), desc: "Top-up", amount }, ...prev.transactions],
    }));
  }

  // Small UI helpers
  function statusBadge(status) {
    if (status === "Delivered") return "bg-green-700 text-green-100";
    if (status === "Pending") return "bg-yellow-800 text-yellow-100";
    if (status === "Cancelled") return "bg-red-800 text-red-100";
    return "bg-gray-700 text-gray-100";
  }

  // Components inside this file to keep single-file root as requested
  function Sidebar() {
    const items = [
      { key: "Overview", label: "Overview", icon: <FaChartLine /> },
      { key: "Browse", label: "Browse Chefs", icon: <FaUtensils /> },
      { key: "MyOrders", label: "My Orders", icon: <FaListAlt /> },
      { key: "Tracking", label: "Delivery Tracking", icon: <FaTruck /> },
      { key: "Wallet", label: "Wallet & Payments", icon: <FaWallet /> },
      { key: "Favourites", label: "Favourites", icon: <FaHeart /> },
      { key: "Profile", label: "Profile", icon: <FaUserCircle /> },
      { key: "Support", label: "Support", icon: <FaQuestionCircle /> },
    ];

    return (
      <aside className="w-64 min-w-[240px] bg-gradient-to-b from-gray-900/70 to-gray-900/50 p-6 border-r border-gray-800 flex flex-col">
        <div className="flex items-start gap-3 mb-6">
          <Link to="/" className="inline-flex items-center gap-3">
            {/* Logo: image, left-aligned like admin */}
            <img src="/images/loggo.png" alt="HomeMeal" className="w-12 h-12 object-contain" />
            <div className="hidden md:block">
              <div className="text-sm font-semibold">HomeMeal</div>
              <div className="text-xs text-gray-400">Eat like home</div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-2">
          {items.map((it) => (
            <button
              key={it.key}
              onClick={() => setActiveTab(it.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all duration-200 ${
                activeTab === it.key
                  ? `shadow-2xl ${ACCENT} text-black transform translate-x-0`
                  : "text-gray-300 hover:bg-gray-800/30"
              }`}
            >
              <span className="text-lg">{it.icon}</span>
              <span className="font-medium">{it.label}</span>
              <span className="ml-auto text-xs text-gray-400">{it.key === "MyOrders" ? totalOrders : ""}</span>
            </button>
          ))}
        </nav>

        <div className="mt-6 pt-4 border-t border-gray-800 text-xs text-gray-400">
          <div className="mb-2">App version</div>
          <div className="text-sm">HomeMeal • v1.0</div>
        </div>
      </aside>
    );
  }

  function Topbar() {
    return (
      <header className="flex items-center justify-between px-8 py-3 border-b border-gray-800 bg-transparent backdrop-blur-sm">
        <div className="flex items-center gap-6">
          {/* collapsed logo for smaller screens - keep leftmost top placement */}
          
          <div className="relative w-[560px] max-w-[56vw]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search chefs, dishes, cuisines..."
              className="w-full px-4 py-2 rounded-full bg-[#0f1720] placeholder:text-gray-500 focus:outline-none border border-gray-800"
            />
            <FaSearch className="absolute right-3 top-2 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setNotificationsOpen((s) => !s)}
            className="p-2 rounded-md bg-gray-900/30 hover:bg-gray-800/40"
            title="Notifications"
          >
            <FaBell />
          </button>

          {/* profile name + avatar — clicking name opens Profile tab */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab("Profile")}>
            <div className="text-right hidden md:block">
              <div className="text-sm font-medium">{profileName}</div>
              <div className="text-xs text-gray-400">View profile</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center text-white text-sm">
              {profileName.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Center panels
  function OverviewPanel() {
    return (
      <div className="space-y-6">
        {/* Stats cards — styled to match admin 3D-like cards */}
        <div className="grid grid-cols-4 gap-6">
          <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800`}>
            <div className="text-xs text-gray-400">Total Orders</div>
            <div className="text-2xl font-semibold mt-3">{totalOrders}</div>
            <div className="mt-3 text-sm text-gray-400">Orders placed from your account</div>
          </div>

          <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800`}>
            <div className="text-xs text-gray-400">Pending Deliveries</div>
            <div className="text-2xl font-semibold mt-3">{pendingDeliveries}</div>
            <div className="mt-3 text-sm text-gray-400">On the way or waiting to be picked up</div>
          </div>

          <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800`}>
            <div className="text-xs text-gray-400">Completed Orders</div>
            <div className="text-2xl font-semibold mt-3">{completedOrders}</div>
            <div className="mt-3 text-sm text-gray-400">Delivered successfully</div>
          </div>

          <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800`}>
            <div className="text-xs text-gray-400">Wallet Balance</div>
            <div className="text-2xl font-semibold mt-3">₹{balance}</div>
            <div className="mt-3 text-sm text-gray-400">Available balance for orders & tips</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left: Orders trend */}
          <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-5 shadow-2xl ring-1 ring-gray-800 col-span-2`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-gray-400">Orders This Week</div>
                <div className="text-lg font-semibold">Order trend</div>
              </div>
              <div className="text-sm text-gray-400">Last 7 days</div>
            </div>

            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid stroke="#0f1720" strokeDasharray="4 4" />
                  <XAxis dataKey="day" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: "#0b1220", borderColor: "#111827" }} />
                  <Legend />
                  <Line type="monotone" dataKey="orders" stroke="#FFA94D" strokeWidth={3} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="spent" stroke="#6EE7B7" strokeWidth={2} dot={{ r: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right: Spending pie */}
          <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-5 shadow-2xl ring-1 ring-gray-800`}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-sm text-gray-400">Spending</div>
                <div className="text-lg font-semibold">This month</div>
              </div>
              <div className="text-sm text-gray-400">Category</div>
            </div>

            <div style={{ height: 260 }} className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={spendingPie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={76} label>
                    {spendingPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-3 space-y-2">
              {spendingPie.map((s, i) => (
                <div key={s.name} className="flex items-center justify-between text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded" style={{ background: PIE_COLORS[i] }} />
                    <span>{s.name}</span>
                  </div>
                  <div>{s.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function BrowsePanel() {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Browse Chefs</h3>
            <p className="text-sm text-gray-400">Discover local home chefs and their special dishes</p>
          </div>
          <div className="text-sm text-gray-400">Showing {browseResults.length} results</div>
        </div>

        <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-4 shadow-2xl ring-1 ring-gray-800`}>
          <div className="grid gap-3">
            {browseResults.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/30">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded bg-gray-700 flex items-center justify-center text-white text-lg">
                    {c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-gray-400">{c.cuisine} • {c.location}</div>
                    <div className="text-xs text-gray-400">Avg ₹{c.priceAvg} • {c.rating} ★</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleFavouriteChef(c.id)}
                    className={`px-3 py-1 rounded ${c.favourite ? "bg-red-600 text-white" : "bg-gray-800 text-gray-200"}`}
                    title={c.favourite ? "Unfavourite" : "Add to favourites"}
                  >
                    <FaHeart />
                  </button>

                  <button
                    onClick={() => {
                      // quick order mock: create new order and switch to MyOrders
                      const id = `ORD-${1000 + orders.length + 1}`;
                      const newOrder = {
                        id,
                        chef: c.name,
                        items: `${c.cuisine} Combo`,
                        total: c.priceAvg,
                        status: "Pending",
                        date: new Date().toISOString().slice(0, 10),
                        address: "Your saved address",
                      };
                      setOrders((prev) => [newOrder, ...prev]);
                      setActiveTab("MyOrders");
                    }}
                    className={`px-4 py-2 rounded ${ACCENT} ${ACCENT_HOVER} text-black`}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
            {browseResults.length === 0 && <div className="text-gray-400 p-4">No chefs found for that search.</div>}
          </div>
        </div>
      </div>
    );
  }

  function OrdersPanel() {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">My Orders</h3>
            <p className="text-sm text-gray-400">Track and manage your orders</p>
          </div>
          <div className="text-sm text-gray-400">Total {orders.length}</div>
        </div>

        <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-4 shadow-2xl ring-1 ring-gray-800`}>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-gray-300 border-b border-gray-700">
                <tr>
                  <th className="py-3 px-4">Order</th>
                  <th className="py-3 px-4">Chef</th>
                  <th className="py-3 px-4">Items</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="hover:bg-gray-800/30 border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">{o.id}</td>
                    <td className="py-3 px-4 text-gray-300">{o.chef}</td>
                    <td className="py-3 px-4">{o.items}</td>
                    <td className="py-3 px-4">₹{o.total}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs ${statusBadge(o.status)}`}>{o.status}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-400">{o.date}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="inline-flex items-center gap-2">
                        <button onClick={() => viewOrder(o)} className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-200">View</button>
                        <button onClick={() => reorder(o)} className={`px-3 py-1 rounded ${ACCENT} ${ACCENT_HOVER} text-black`}>Reorder</button>
                      </div>
                    </td>
                  </tr>
                ))}

                {orders.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-gray-400">You haven't placed any orders yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  function TrackingPanel() {
    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold">Delivery Tracking</h3>
          <p className="text-sm text-gray-400">Track the status of current deliveries</p>
        </div>

        <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800`}>
          <div className="text-gray-300">Active deliveries</div>
          <div className="mt-4 space-y-3">
            {orders.filter((o) => o.status === "Pending").length === 0 ? (
              <div className="text-gray-400">No active deliveries right now.</div>
            ) : (
              orders
                .filter((o) => o.status === "Pending")
                .map((o) => (
                  <div key={o.id} className="flex items-center justify-between bg-gray-800/30 p-3 rounded">
                    <div>
                      <div className="font-medium">{o.items}</div>
                      <div className="text-xs text-gray-400">{o.chef} • {o.date}</div>
                      <div className="text-xs text-gray-400">{o.address}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-gray-300">ETA ~ 20 mins</div>
                      <button className="mt-2 px-3 py-1 rounded bg-orange-600 text-black">Contact</button>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    );
  }

  function WalletPanel() {
    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold">Wallet & Payments</h3>
          <p className="text-sm text-gray-400">Manage balance, transactions and payment methods</p>
        </div>

        <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800`}>
          <div className="grid grid-cols-3 gap-6 items-center">
            <div>
              <div className="text-sm text-gray-400">Balance</div>
              <div className="text-3xl font-semibold mt-2">₹{wallet.balance}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Quick actions</div>
              <div className="mt-2 flex items-center gap-3">
                <button onClick={() => topUpWallet(500)} className={`px-4 py-2 rounded ${ACCENT} ${ACCENT_HOVER} text-black`}>Top-up ₹500</button>
                <button className="px-4 py-2 rounded bg-gray-800">Withdraw</button>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Recent</div>
              <div className="text-sm text-gray-300 mt-2">{wallet.transactions[0]?.desc} • ₹{wallet.transactions[0]?.amount}</div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2">Transactions</h4>
            <div className="space-y-2 text-sm text-gray-300">
              {wallet.transactions.map((t) => (
                <div key={t.id} className="flex items-center justify-between p-2 rounded bg-gray-800/20">
                  <div>{t.desc}</div>
                  <div className="text-sm">{t.date} • <span className={t.amount < 0 ? "text-red-400" : "text-green-400"}>₹{t.amount}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function FavouritesPanel() {
    const favs = chefs.filter((c) => c.favourite);
    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold">Favourites</h3>
          <p className="text-sm text-gray-400">Your saved chefs & dishes</p>
        </div>

        <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-4 shadow-2xl ring-1 ring-gray-800`}>
          {favs.length === 0 ? (
            <div className="text-gray-400 p-4">No favourites yet. Add chefs to favourites to find them quickly.</div>
          ) : (
            favs.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-3 rounded hover:bg-gray-800/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-gray-700 flex items-center justify-center text-white">{c.name.split(" ").map(n => n[0]).join("").slice(0,2)}</div>
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-gray-400">{c.cuisine} • Avg ₹{c.priceAvg}</div>
                  </div>
                </div>
                <div>
                  <button onClick={() => setActiveTab("Browse")} className="px-3 py-1 rounded bg-gray-800">Browse</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  function ProfilePanel() {
    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold">Profile</h3>
          <p className="text-sm text-gray-400">Manage your account, addresses and preferences</p>
        </div>

        <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800 grid grid-cols-3 gap-6`}>
          <div className="col-span-1">
            <div className="w-36 h-36 rounded-full bg-gray-700 flex items-center justify-center text-4xl mb-4 text-white">
              {profileName.split(" ").map(n => n[0]).slice(0,2).join("")}
            </div>
            <div className="font-medium text-lg">{profileName}</div>
            <div className="text-sm text-gray-400">Member since Apr 2024</div>
            <div className="mt-4">
              <button className="px-4 py-2 rounded bg-orange-600 text-black">Edit profile</button>
            </div>
          </div>

          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-400">Email</div>
                <div className="text-sm">riya@example.com</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Phone</div>
                <div className="text-sm">+91 98765 43210</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Default Address</div>
                <div className="text-sm">MG Road, Bengaluru</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Payment</div>
                <div className="text-sm">UPI • ****@bank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function SupportPanel() {
    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold">Support</h3>
          <p className="text-sm text-gray-400">Get help for orders, payments and more</p>
        </div>

        <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800`}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-400">Frequently asked</div>
              <ul className="mt-3 text-sm text-gray-300 space-y-2">
                <li>How to track an order?</li>
                <li>Refund policy</li>
                <li>Contact delivery partner</li>
              </ul>
            </div>
            <div>
              <div className="text-sm text-gray-400">Contact us</div>
              <div className="mt-2">
                <textarea className="w-full p-3 rounded bg-gray-800/20" placeholder="Describe your issue..." rows={5}></textarea>
                <div className="mt-3">
                  <button className={`px-4 py-2 rounded ${ACCENT} ${ACCENT_HOVER} text-black`}>Send message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main render
  return (
    <div className="flex h-screen bg-black text-gray-100">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Topbar />

        <section className="p-6 overflow-auto max-w-[1200px] mx-auto w-full">
          {/* dynamic center content based on activeTab */}
          {activeTab === "Overview" && <OverviewPanel />}
          {activeTab === "Browse" && <BrowsePanel />}
          {activeTab === "MyOrders" && <OrdersPanel />}
          {activeTab === "Tracking" && <TrackingPanel />}
          {activeTab === "Wallet" && <WalletPanel />}
          {activeTab === "Favourites" && <FavouritesPanel />}
          {activeTab === "Profile" && <ProfilePanel />}
          {activeTab === "Support" && <SupportPanel />}
        </section>

        <footer className="px-6 py-4 border-t border-gray-800 text-xs text-gray-500">
          HomeMe • Client Dashboard — Enjoy fresh, homemade meals.
        </footer>
      </main>

      {/* Order modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gray-900/80 rounded-2xl p-6 w-11/12 max-w-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{selectedOrder.id}</h3>
                <div className="text-xs text-gray-400">{selectedOrder.chef} • {selectedOrder.date}</div>
              </div>
              <button onClick={closeOrderModal} className="text-gray-400">Close</button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400">Items</div>
                <div className="text-sm text-gray-100">{selectedOrder.items}</div>
                <div className="text-sm text-gray-400 mt-3">Address</div>
                <div className="text-sm text-gray-100">{selectedOrder.address}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Total</div>
                <div className="text-lg font-semibold">₹{selectedOrder.total}</div>
                <div className="mt-4">
                  <button className={`px-4 py-2 rounded ${ACCENT} ${ACCENT_HOVER} text-black`} onClick={() => reorder(selectedOrder)}>Reorder</button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 justify-end">
              <button onClick={closeOrderModal} className="px-4 py-2 rounded bg-gray-800">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
