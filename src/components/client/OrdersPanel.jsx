// src/components/client/OrdersPanel.jsx
import React from "react";

export default function OrdersPanel({
  CARD_BG,
  CARD_GLASS,
  orders = [],
  statusBadge,
  viewOrder,
  reorder,
  ACCENT,
  ACCENT_HOVER,
}) {
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
