// src/components/delivery/DP_Support.jsx
import React from "react";

const ACCENT = "bg-orange-600";
const ACCENT_HOVER = "hover:bg-orange-500";
const CARD_BG = "bg-gray-900/60";
const CARD_GLASS = "backdrop-blur-sm";

export default function DPSupport() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold">Support</h3>
        <p className="text-sm text-gray-400">Report issues or get help</p>
      </div>

      <div className={`${CARD_BG} ${CARD_GLASS} rounded-2xl p-6 shadow-lg border border-gray-800`}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-gray-400">FAQs</div>
            <ul className="mt-3 text-sm text-gray-300 space-y-2">
              <li>How to claim a gig?</li>
              <li>Payment cycle & payouts</li>
              <li>Accident & emergency protocol</li>
            </ul>
          </div>
          <div>
            <div className="text-sm text-gray-400">Contact Support</div>
            <div className="mt-2">
              <textarea className="w-full p-3 rounded bg-gray-800/20" placeholder="Describe your issue..." rows={5} />
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
