import React from "react";

export default function OrdersPage({ orders, selectedOrder, setSelectedOrder }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Orders</h2>

      {/* Orders Table */}
      <div className="bg-gray-800 bg-opacity-50 shadow-lg rounded-xl p-5 text-white">
        <table className="min-w-full bg-gray-900 bg-opacity-50 rounded-md text-white shadow-md">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Customer Name</th>
              <th className="py-3 px-4 text-left">Order Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Total Amount</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-700 transition duration-200 ease-in-out"
              >
                <td className="py-2 px-4 border-t border-gray-700 text-left">{order.id}</td>
                <td className="py-2 px-4 border-t border-gray-700 text-left">{order.name}</td>
                <td className="py-2 px-4 border-t border-gray-700 text-left">{order.date}</td>
                <td
                  className={`py-2 px-4 border-t border-gray-700 text-left ${
                    order.status === "Completed"
                      ? "text-green-400"
                      : order.status === "Pending"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {order.status}
                </td>
                <td className="py-2 px-4 border-t border-gray-700 text-left">{order.total}</td>
                <td className="py-2 px-4 border-t border-gray-700 text-center">
                  <button
                    className="text-blue-400 hover:text-blue-600"
                    onClick={() => setSelectedOrder(order)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Viewing Order Details */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-md flex justify-center items-center">
            <div className="bg-gray-900 bg-opacity-80 text-white p-8 rounded-xl shadow-2xl w-1/3">
              <h3 className="text-3xl font-extrabold mb-4 text-gradient from-purple-400 to-blue-500 text-center">
                Order Details
              </h3>
              <div className="text-center space-y-2">
                <p className="text-lg">
                  <strong>Order ID:</strong> {selectedOrder.id}
                </p>
                <p className="text-lg">
                  <strong>Customer Name:</strong> {selectedOrder.name}
                </p>
                <p className="text-lg">
                  <strong>Order Date:</strong> {selectedOrder.date}
                </p>
                <p
                  className={`text-lg ${
                    selectedOrder.status === "Completed"
                      ? "text-green-400"
                      : selectedOrder.status === "Pending"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  <strong>Status:</strong> {selectedOrder.status}
                </p>
                <p className="text-lg">
                  <strong>Total Amount:</strong> {selectedOrder.total}
                </p>
                <p className="text-lg">
                  <strong>Ordered Items:</strong> {selectedOrder.items.join(", ")}
                </p>
                <p className="text-lg">
                  <strong>Dropping Point:</strong> {selectedOrder.dropPoint}
                </p>
                <p className="text-lg">
                  <strong>Assigned Chef:</strong> {selectedOrder.chef}
                </p>
                <p className="text-lg">
                  <strong>Delivery Status:</strong> {selectedOrder.deliveryStatus}
                </p>
                <button
                  className="mt-5 bg-red-500 px-6 py-2 rounded-md hover:bg-red-600 transition-all duration-200 ease-in-out"
                  onClick={() => setSelectedOrder(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
