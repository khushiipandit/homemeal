import React from "react";

const ChefEarnings = ({ totalEarnings }) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold">Earnings</h3>
        <p className="text-sm text-gray-400">
          Payouts, balance and recent transactions
        </p>
      </div>

      <div className="bg-gray-900/60 rounded-lg p-4 shadow">
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 rounded bg-gray-800/40">
            <div className="text-sm text-gray-400">Balance</div>
            <div className="text-2xl font-semibold">₹{totalEarnings}</div>
          </div>

          <div className="p-4 rounded bg-gray-800/40">
            <div className="text-sm text-gray-400">Pending Payouts</div>
            <div className="text-2xl font-semibold">
              ₹{Math.round(totalEarnings / 4)}
            </div>
          </div>

          <div className="p-4 rounded bg-gray-800/40">
            <div className="text-sm text-gray-400">Last Payout</div>
            <div className="text-2xl font-semibold">
              ₹{Math.round(totalEarnings / 2)}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-medium mb-2">Recent Transactions</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between px-3 py-2 rounded bg-gray-800/30">
              <div className="text-sm">Payout • April 10, 2025</div>
              <div className="text-sm text-gray-300">
                ₹{Math.round(totalEarnings / 2)}
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 rounded bg-gray-800/30">
              <div className="text-sm">Order payout • April 9, 2025</div>
              <div className="text-sm text-gray-300">₹120</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefEarnings;
