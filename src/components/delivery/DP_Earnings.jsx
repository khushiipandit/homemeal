// src/components/delivery/DP_Earnings.jsx
import React from "react";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

const CARD_BG = "bg-gray-900/60";
const CARD_GLASS = "backdrop-blur-sm";

export default function DPEarnings({ earningsData = [] }) {
  const weekTotal = earningsData.reduce((s, d) => s + d.earnings, 0);
  return (
    <div className="space-y-6">
      <div className={`${CARD_BG} ${CARD_GLASS} rounded-2xl p-6 shadow-lg border border-gray-800`}>
        <div className="grid grid-cols-3 gap-6 items-center">
          <div>
            <div className="text-sm text-gray-400">This Week</div>
            <div className="text-3xl font-semibold mt-2">₹{weekTotal}</div>
          </div>
          <div className="col-span-2">
            <div style={{ height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={earningsData}>
                  <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
                  <XAxis dataKey="day" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="earnings" stroke="#FFA94D" strokeWidth={3} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
