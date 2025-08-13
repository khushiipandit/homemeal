// src/components/delivery/DP_GigBoard.jsx
import React from "react";
import { FaMapMarkerAlt, FaCheck } from "react-icons/fa";

const CARD_BG = "bg-gray-900/60";
const CARD_GLASS = "backdrop-blur-sm";
const ACCENT = "bg-orange-600";
const ACCENT_HOVER = "hover:bg-orange-500";

export default function DPGigBoard({ gigBoard = [], claimGig }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Gig Board</h3>
          <p className="text-sm text-gray-400">Community jobs available to claim</p>
        </div>
        <div className="text-sm text-gray-400">Available {gigBoard.length}</div>
      </div>

      <div className={`${CARD_BG} ${CARD_GLASS} rounded-2xl p-4 shadow-lg border border-gray-800`}>
        <div className="grid gap-3">
          {gigBoard.map((g) => (
            <div key={g.id} className="flex items-start justify-between p-3 rounded hover:bg-gray-800/30">
              <div>
                <div className="font-medium">{g.id} • {g.items}</div>
                <div className="text-xs text-gray-400 mt-1">Posted by: {g.postedBy}</div>
                <div className="text-xs text-gray-400 flex items-center gap-2 mt-1">
                  <FaMapMarkerAlt /> {g.pickup.name}, {g.pickup.address}
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-2">
                  <FaMapMarkerAlt /> {g.drop.name}, {g.drop.address}
                </div>
                <div className="text-xs text-gray-400 mt-1">Distance: {g.distanceKm} km • Payout: ₹{g.payout}</div>
                {g.reason && <div className="text-xs text-gray-400 mt-1">Reason: {g.reason}</div>}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => claimGig(g.id)}
                  className={`px-3 py-1 rounded ${ACCENT} ${ACCENT_HOVER} text-black inline-flex items-center gap-2`}
                  title="Claim this gig"
                >
                  <FaCheck /> Claim
                </button>
              </div>
            </div>
          ))}
          {gigBoard.length === 0 && <div className="text-gray-400 p-4">No gigs available right now.</div>}
        </div>
      </div>
    </div>
  );
}
