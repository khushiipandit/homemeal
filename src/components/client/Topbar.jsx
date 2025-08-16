import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";

export default function Topbar({ search, setSearch, profileName, notificationsOpen, setNotificationsOpen }) {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900">
      <div className="flex items-center gap-3">
        <FaSearch />
        <input
          type="text"
          placeholder="Search chefs, cuisines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-6">
        <button onClick={() => setNotificationsOpen(!notificationsOpen)}>
          <FaBell />
        </button>
        <div>{profileName}</div>
      </div>
    </header>
  );
}
