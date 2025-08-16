// src/components/client/ProfilePanel.jsx
import React from "react";

export default function ProfilePanel({ CARD_BG, CARD_GLASS, profileName }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold">Profile</h3>
        <p className="text-sm text-gray-400">Manage your account, addresses and preferences</p>
      </div>

      <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-6 shadow-2xl ring-1 ring-gray-800 grid grid-cols-3 gap-6`}>
        <div className="col-span-1">
          <div className="w-36 h-36 rounded-full bg-gray-700 flex items-center justify-center text-4xl mb-4 text-white">
            {profileName.split(" ").map(n => n[0]).slice(0,2).join("")}
          </div>
          <div className="font-medium text-lg">{profileName}</div>
          <div className="text-sm text-gray-400">Member since Apr 2024</div>
          <div className="mt-4">
            <button className="px-4 py-2 rounded bg-orange-600 text-black">Edit profile</button>
          </div>
        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-gray-400">Email</div>
              <div className="text-sm">riya@example.com</div>
            </div>
            <div>
              <div className="text-xs text-gray-400">Phone</div>
              <div className="text-sm">+91 98765 43210</div>
            </div>
            <div>
              <div className="text-xs text-gray-400">Default Address</div>
              <div className="text-sm">MG Road, Bengaluru</div>
            </div>
            <div>
              <div className="text-xs text-gray-400">Payment</div>
              <div className="text-sm">UPI • ****@bank</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
