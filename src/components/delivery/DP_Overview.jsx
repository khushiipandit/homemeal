// src/components/delivery/DP_Overview.jsx
import React from "react";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

const CARD_BG = "bg-gray-900/60";
const CARD_GLASS = "backdrop-blur-sm";

export default function DPOverview({ totals, earningsData }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <div className={`${CARD_BG} ${CARD_GLASS} rounded-2xl p-5 shadow-lg border border-gray-800`}>
          <div className="text-xs text-gray-400">Active Jobs</div>
          <div className="text-2xl font-semibold mt-2">{totals.active}</div>
          <div className="mt-3 text-sm text-gray-400">Currently assigned to you</div>
        </div>

        <div className={`${CARD_BG} ${CARD_GLASS} rounded-2xl p-5 shadow-lg border border-gray-800`}>
          <div className="text-xs text-gray-400">Gig Board</div>
          <div className="text-2xl font-semibold mt-2">{totals.gigs}</div>
          <div className="mt-3 text-sm text-gray-400">Available community gigs</div>
        </div>

        <div className={`${CARD_BG} ${CARD_GLASS} rounded-2xl p-5 shadow-lg border border-gray-800`}>
          <div className="text-xs text-gray-400">Completed (week)</div>
          <div className="text-2xl font-semibold mt-2">{totals.completed}</div>
          <div className="mt-3 text-sm text-gray-400">Great progress—keep going!</div>
        </div>

        <div className={`${CARD_BG} ${CARD_GLASS} rounded-2xl p-5 shadow-lg border border-gray-800`}>
          <div className="text-xs text-gray-400">Earnings (week)</div>
          <div className="text-2xl font-semibold mt-2">₹{totals.earnings}</div>
          <div className="mt-3 text-sm text-gray-400">Including tips</div>
        </div>
      </div>

      <div className={`${CARD_BG} ${CARD_GLASS} rounded-2xl p-4 shadow-lg border border-gray-800`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm text-gray-400">This Week</div>
            <div className="text-lg font-semibold">Jobs & Earnings</div>
          </div>
          <div className="text-sm text-gray-400">Last 7 days</div>
        </div>

        <div style={{ height: 240 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={earningsData}>
              <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completed" stroke="#6EE7B7" strokeWidth={3} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="earnings" stroke="#FFA94D" strokeWidth={2} dot={{ r: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
