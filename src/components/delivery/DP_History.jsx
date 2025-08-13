// src/components/delivery/DP_History.jsx
import React from "react";

const CARD_BG = "bg-gray-900/60";
const CARD_GLASS = "backdrop-blur-sm";

export default function DPHistory({ history = [] }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold">History</h3>
        <p className="text-sm text-gray-400">Completed deliveries & ratings</p>
      </div>

      <div className={`${CARD_BG} ${CARD_GLASS} rounded-2xl p-4 shadow-lg border border-gray-800`}>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-gray-300 border-b border-gray-700">
              <tr>
                <th className="py-3 px-4">Job</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Route</th>
                <th className="py-3 px-4">Payout</th>
                <th className="py-3 px-4">Rating</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h) => (
                <tr key={h.id} className="hover:bg-gray-800/30 border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">{h.id}</td>
                  <td className="py-3 px-4">{h.date}</td>
                  <td className="py-3 px-4 text-gray-300">{h.route}</td>
                  <td className="py-3 px-4">₹{h.payout}</td>
                  <td className="py-3 px-4">{h.rating} ★</td>
                </tr>
              ))}
              {history.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400">No history yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
