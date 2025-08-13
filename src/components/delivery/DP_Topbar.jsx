// src/components/delivery/DP_Topbar.jsx
import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";

export default function DPTopbar({ search, setSearch, notificationsOpen, setNotificationsOpen, profileName, setActiveTab }) {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-gray-800">
      <div className="flex items-center gap-4">
        <div className="relative w-[520px] max-w-[48vw]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search jobs, buildings, routes..."
            className="w-full px-4 py-2 rounded-full bg-gray-900/40 placeholder:text-gray-500 focus:outline-none"
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

        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab("Profile")}>
          <div className="text-right hidden md:block">
            <div className="text-sm font-medium">{profileName}</div>
            <div className="text-xs text-gray-400">View profile</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm">
            {profileName.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </div>
        </div>
      </div>
    </header>
  );
}
