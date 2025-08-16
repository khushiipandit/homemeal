import React from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

export default function OverviewPanel({ CARD_BG, CARD_GLASS, totalOrders, pendingDeliveries, completedOrders, balance, lineData, spendingPie, PIE_COLORS }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className={`${CARD_BG} ${CARD_GLASS} p-4 rounded-lg`}>
        <h2 className="text-lg font-semibold">Orders Summary</h2>
        <p>Total Orders: {totalOrders}</p>
        <p>Pending: {pendingDeliveries}</p>
        <p>Completed: {completedOrders}</p>
        <p>Balance: ₹{balance}</p>
      </div>
      <div className={`${CARD_BG} ${CARD_GLASS} p-4 rounded-lg`}>
        <h2 className="text-lg font-semibold">Orders Over Time</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="orders" stroke="#FFA94D" />
            <Line type="monotone" dataKey="spent" stroke="#6EE7B7" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={`${CARD_BG} ${CARD_GLASS} p-4 rounded-lg col-span-2`}>
        <h2 className="text-lg font-semibold">Spending Breakdown</h2>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={spendingPie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {spendingPie.map((entry, index) => (
                <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
