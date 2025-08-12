import React from "react";

const ChefSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold">Settings</h3>
        <p className="text-sm text-gray-400">Manage preferences & integrations</p>
      </div>

      <div className="bg-gray-900/60 rounded-lg p-6 shadow">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-400">Notification preferences</div>
            <div className="mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="text-sm">Receive order notifications</span>
              </label>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-400">Payment settings</div>
            <div className="mt-2 text-sm text-gray-300">
              Payout bank / UPI setup (placeholder)
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="px-4 py-2 rounded bg-gray-800">Save settings</button>
        </div>
      </div>
    </div>
  );
};

export default ChefSettings;
