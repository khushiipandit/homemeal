// src/components/delivery/DP_Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaMotorcycle, FaListAlt, FaWallet, FaHeart, FaQuestionCircle, FaUserCircle } from "react-icons/fa";

const ACCENT = "bg-orange-600";

export default function DPSidebar({ activeTab, setActiveTab, totals }) {
  const items = [
    { key: "Overview", label: "Overview", icon: <FaChartLine /> },
    { key: "ActiveJobs", label: "Active Jobs", icon: <FaMotorcycle /> },
    { key: "GigBoard", label: "Gig Board", icon: <FaListAlt /> },
    { key: "Earnings", label: "Earnings", icon: <FaWallet /> },
    { key: "History", label: "History", icon: <FaHeart /> },
    { key: "Support", label: "Support", icon: <FaQuestionCircle /> },
    { key: "Profile", label: "Profile", icon: <FaUserCircle /> },
  ];

  return (
    <aside className="w-1/5 min-w-[220px] p-5 border-r border-gray-800 flex flex-col bg-gray-900/60">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/" className="inline-flex items-center gap-2">
          <img src="/images/loggo.png" alt="HomeMe" className="w-10 h-10 object-contain" />
          <div className="hidden md:block">
            <div className="text-sm font-semibold">HomeMe</div>
            <div className="text-xs text-gray-400">Delivery Partner</div>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1">
        {items.map((it) => (
          <button
            key={it.key}
            onClick={() => setActiveTab(it.key)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              activeTab === it.key ? `${ACCENT} text-black` : "text-gray-300 hover:bg-gray-800/30"
            }`}
          >
            <span className="text-lg">{it.icon}</span>
            <span>{it.label}</span>
            <span className="ml-auto text-xs text-gray-400">
              {it.key === "ActiveJobs" ? totals.active : it.key === "GigBoard" ? totals.gigs : ""}
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-6 pt-4 border-t border-gray-800 text-xs text-gray-400">
        <div className="mb-2">App version</div>
        <div className="text-sm">HomeMe • v1.0</div>
      </div>
    </aside>
  );
}
