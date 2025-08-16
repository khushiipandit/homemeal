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
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-sm text-gray-300">Total Orders</div>
          <div className="text-3xl font-bold text-white">{totalOrders}</div>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-sm text-gray-300">Pending Orders</div>
          <div className="text-3xl font-bold text-white">{pendingOrders}</div>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-sm text-gray-300">Total Earnings</div>
          <div className="text-3xl font-bold text-green-400">₹{totalEarnings}</div>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-sm text-gray-300">Menu Items</div>
          <div className="text-3xl font-bold text-white">{menu.length}</div>
        </div>
      </div>

      {/* Recent Orders & Quick Actions */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-gray-900/70 rounded-xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
            <button
              onClick={() => setActiveTab("Orders")}
              className="text-sm bg-orange-500 px-3 py-1 rounded-lg text-black hover:bg-orange-400"
            >
              View all
            </button>
          </div>

          <div className="space-y-3">
            {orders.slice(0, 4).map((o) => (
              <div
                key={o.id}
                className="flex items-center justify-between bg-gray-800/40 px-3 py-2 rounded-lg"
              >
                <div>
                  <div className="text-sm font-medium text-white">{o.item}</div>
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
        <div className="bg-gray-900/70 rounded-xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Quick Actions</h3>
            <div className="text-sm text-gray-400">Last 7 days</div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-300">Today's Earnings</div>
                <div className="text-2xl font-bold text-green-400">
                  ₹{Math.round(totalEarnings / 3)}
                </div>
              </div>
              <div>
                <button className="px-3 py-1 rounded-lg bg-orange-500 text-black hover:bg-orange-400">
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
