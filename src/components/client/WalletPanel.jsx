// src/components/client/WalletPanel.jsx
import React from "react";

export default function WalletPanel({
  CARD_BG,
  CARD_GLASS,
  wallet = { balance: 0, transactions: [] },
  ACCENT,
  ACCENT_HOVER,
  topUpWallet,
}) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold">Wallet & Payments</h3>
        <p className="text-sm text-gray-400">Manage balance, transactions and payment methods</p>
      </div>

      <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800`}>
        <div className="grid grid-cols-3 gap-6 items-center">
          <div>
            <div className="text-sm text-gray-400">Balance</div>
            <div className="text-3xl font-semibold mt-2">₹{wallet.balance}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Quick actions</div>
            <div className="mt-2 flex items-center gap-3">
              <button onClick={() => topUpWallet(500)} className={`px-4 py-2 rounded ${ACCENT} ${ACCENT_HOVER} text-black`}>Top-up ₹500</button>
              <button className="px-4 py-2 rounded bg-gray-800">Withdraw</button>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Recent</div>
            <div className="text-sm text-gray-300 mt-2">{wallet.transactions[0]?.desc} • ₹{wallet.transactions[0]?.amount}</div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-medium mb-2">Transactions</h4>
          <div className="space-y-2 text-sm text-gray-300">
            {wallet.transactions.map((t) => (
              <div key={t.id} className="flex items-center justify-between p-2 rounded bg-gray-800/20">
                <div>{t.desc}</div>
                <div className="text-sm">{t.date} • <span className={t.amount < 0 ? "text-red-400" : "text-green-400"}>₹{t.amount}</span></div>
              </div>
            ))}
            {wallet.transactions.length === 0 && <div className="text-gray-400 p-2">No transactions yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
