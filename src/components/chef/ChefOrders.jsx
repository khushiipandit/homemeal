import React from "react";

const ChefOrders = ({ orders, viewOrder, toggleOrderStatus, deleteOrder }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Manage requests and view order details</h3>
          <p className="text-sm text-gray-400"></p>
        </div>
      </div>

      <div className="bg-gray-900/60 rounded-lg p-4 shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-gray-300 border-b border-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Item</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-gray-800/40 border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">{o.id}</td>
                  <td className="py-3 px-4 text-gray-300">{o.user}</td>
                  <td className="py-3 px-4">{o.item}</td>
                  <td className="py-3 px-4">₹{o.price}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs ${
                        o.status === "Delivered"
                          ? "bg-green-700 text-green-100"
                          : "bg-yellow-900 text-yellow-100"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-400">{o.date}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => viewOrder(o)}
                        className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-200"
                      >
                        View
                      </button>
                      <button
                        onClick={() => toggleOrderStatus(o.id)}
                        className="px-3 py-1 rounded bg-orange-600 hover:bg-orange-500 text-black"
                      >
                        Toggle
                      </button>
                      <button
                        onClick={() => deleteOrder(o.id)}
                        className="px-3 py-1 rounded bg-red-700 hover:bg-red-600 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-400">
                    No orders yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChefOrders;
