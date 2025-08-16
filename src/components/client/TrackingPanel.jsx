// src/components/client/TrackingPanel.jsx
import React from "react";

export default function TrackingPanel({ CARD_BG, CARD_GLASS, orders = [] }) {
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
