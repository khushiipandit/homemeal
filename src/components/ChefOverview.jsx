import React from "react";

const ChefOverview = ({
  totalOrders,
  pendingOrders,
  totalEarnings,
  menu,
  orders,
  setActiveTab
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gray-900/50 rounded-lg p-4 shadow">
          <div className="text-sm text-gray-400">Total Orders</div>
          <div className="text-2xl font-semibold">{totalOrders}</div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-4 shadow">
          <div className="text-sm text-gray-400">Pending Orders</div>
          <div className="text-2xl font-semibold">{pendingOrders}</div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-4 shadow">
          <div className="text-sm text-gray-400">Total Earnings</div>
          <div className="text-2xl font-semibold">₹{totalEarnings}</div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-4 shadow">
          <div className="text-sm text-gray-400">Menu Items</div>
          <div className="text-2xl font-semibold">{menu.length}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-gray-900/60 rounded-lg p-4 shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Recent Orders</h3>
            <button
              onClick={() => setActiveTab("Orders")}
              className="text-sm bg-orange-600 px-3 py-1 rounded text-black"
            >
              View all
            </button>
          </div>

          <div className="space-y-3">
            {orders.slice(0, 4).map((o) => (
              <div
                key={o.id}
                className="flex items-center justify-between bg-gray-800/30 px-3 py-2 rounded"
              >
                <div>
                  <div className="text-sm font-medium">{o.item}</div>
                  <div className="text-xs text-gray-400">
                    {o.user} • {o.date}
                  </div>
                </div>
                <div className="text-sm text-gray-300">₹{o.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Earnings preview */}
        <div className="bg-gray-900/60 rounded-lg p-4 shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Quick Actions</h3>
            <div className="text-sm text-gray-400">Last 7 days</div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm">Today's Earnings</div>
                <div className="text-xl font-semibold">
                  ₹{Math.round(totalEarnings / 3)}
                </div>
              </div>
              <div>
                <button className="px-3 py-1 rounded bg-orange-600 text-black">
                  Payout
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-800 text-sm text-gray-400">
              Tip: Keep your menu updated for better reach.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefOverview;
