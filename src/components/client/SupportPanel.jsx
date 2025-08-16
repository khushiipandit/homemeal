// src/components/client/SupportPanel.jsx
import React from "react";

export default function SupportPanel({ CARD_BG, CARD_GLASS, ACCENT, ACCENT_HOVER }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold">Support</h3>
        <p className="text-sm text-gray-400">Get help for orders, payments and more</p>
      </div>

      <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800`}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-gray-400">Frequently asked</div>
            <ul className="mt-3 text-sm text-gray-300 space-y-2">
              <li>How to track an order?</li>
              <li>Refund policy</li>
              <li>Contact delivery partner</li>
            </ul>
          </div>
          <div>
            <div className="text-sm text-gray-400">Contact us</div>
            <div className="mt-2">
              <textarea className="w-full p-3 rounded bg-gray-800/20" placeholder="Describe your issue..." rows={5}></textarea>
              <div className="mt-3">
                <button className={`px-4 py-2 rounded ${ACCENT} ${ACCENT_HOVER} text-black`}>Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
