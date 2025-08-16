// src/components/client/OrderModal.jsx
import React from "react";

export default function OrderModal({ selectedOrder, closeOrderModal, reorder, ACCENT, ACCENT_HOVER }) {
  if (!selectedOrder) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-gray-900/80 rounded-2xl p-6 w-11/12 max-w-2xl">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">{selectedOrder.id}</h3>
            <div className="text-xs text-gray-400">{selectedOrder.chef} • {selectedOrder.date}</div>
          </div>
          <button onClick={closeOrderModal} className="text-gray-400">Close</button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-400">Items</div>
            <div className="text-sm text-gray-100">{selectedOrder.items}</div>
            <div className="text-sm text-gray-400 mt-3">Address</div>
            <div className="text-sm text-gray-100">{selectedOrder.address}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Total</div>
            <div className="text-lg font-semibold">₹{selectedOrder.total}</div>
            <div className="mt-4">
              <button className={`px-4 py-2 rounded ${ACCENT} ${ACCENT_HOVER} text-black`} onClick={() => reorder(selectedOrder)}>Reorder</button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 justify-end">
          <button onClick={closeOrderModal} className="px-4 py-2 rounded bg-gray-800">Close</button>
        </div>
      </div>
    </div>
  );
}
