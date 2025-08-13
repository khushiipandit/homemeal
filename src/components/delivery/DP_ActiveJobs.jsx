// src/components/delivery/DP_ActiveJobs.jsx
import React from "react";
import { FaMotorcycle, FaMapMarkerAlt, FaClock, FaMoneyBill, FaPaperPlane } from "react-icons/fa";

const ACCENT = "bg-orange-600";
const ACCENT_HOVER = "hover:bg-orange-500";
const CARD_BG = "bg-gray-900/60";
const CARD_GLASS = "backdrop-blur-sm";

export default function DPActiveJobs({ activeJobs = [], search = "", markPicked, markDelivered, sendToGig }) {
  const filtered = activeJobs.filter((j) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      j.id.toLowerCase().includes(q) ||
      j.pickup.name.toLowerCase().includes(q) ||
      j.drop.name.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Active Jobs</h3>
          <p className="text-sm text-gray-400">Manage your assigned deliveries</p>
        </div>
        <div className="text-sm text-gray-400">Total {filtered.length}</div>
      </div>

      <div className={`${CARD_BG} ${CARD_GLASS} rounded-2xl p-4 shadow-lg border border-gray-800`}>
        <div className="grid gap-3">
          {filtered.map((j) => (
            <div key={j.id} className="flex items-start justify-between p-3 rounded hover:bg-gray-800/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-gray-700 flex items-center justify-center text-white text-lg">
                  <FaMotorcycle />
                </div>
                <div>
                  <div className="font-medium">{j.id} • {j.items}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-2 mt-1">
                    <FaMapMarkerAlt /> {j.pickup.name}, {j.pickup.address}
                  </div>
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    <FaMapMarkerAlt /> {j.drop.name}, {j.drop.address}
                  </div>
                  <div className="text-xs text-gray-400 flex items-center gap-3 mt-1">
                    <span className="inline-flex items-center gap-1"><FaClock /> ETA {j.eta}</span>
                    <span>• {j.distanceKm} km</span>
                    <span className="inline-flex items-center gap-1"><FaMoneyBill /> ₹{j.payout}</span>
                    <span>• Status: <span className="text-gray-200">{j.status}</span></span>
                  </div>
                  {j.note && <div className="text-xs text-gray-400 mt-1">Note: {j.note}</div>}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {j.status === "Assigned" && (
                  <button onClick={() => markPicked(j.id)} className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-200">
                    Mark Picked
                  </button>
                )}
                {j.status !== "Delivered" && (
                  <button onClick={() => markDelivered(j.id)} className={`px-3 py-1 rounded ${ACCENT} ${ACCENT_HOVER} text-black`}>
                    Mark Delivered
                  </button>
                )}
                <button
                  onClick={() => sendToGig(j.id)}
                  className="px-3 py-1 rounded bg-red-600/80 hover:bg-red-500 text-white inline-flex items-center gap-2"
                  title="Send this job to Gig board"
                >
                  <FaPaperPlane /> Send to Gig
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="text-gray-400 p-4">No active jobs match your search.</div>}
        </div>
      </div>
    </div>
  );
}
