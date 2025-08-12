import React from "react";

const ChefProfile = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold">Profile</h3>
        <p className="text-sm text-gray-400">Your chef profile & preferences</p>
      </div>

      <div className="bg-gray-900/60 rounded-lg p-6 shadow grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="w-full rounded-lg bg-gray-800 p-4">
            <div className="w-28 h-28 rounded-full bg-gray-700 mb-4 flex items-center justify-center text-3xl">
              A
            </div>
            <div className="text-lg font-medium">Chef Anjali</div>
            <div className="text-xs text-gray-400 mb-4">Bengaluru • 4.8 ★</div>
            <div className="text-sm text-gray-300">
              Home kitchen • Vegetarian & North Indian
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-gray-800/40 p-4 rounded">
            <div className="mb-3 text-sm text-gray-400">Bio</div>
            <div className="text-sm text-gray-200 mb-4">
              Passionate home chef serving fresh, homemade meals with a daily
              focus on quality & hygiene.
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs text-gray-400">Phone</div>
                <div className="text-sm">+91 98765 43210</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Email</div>
                <div className="text-sm">anjali@homeme.com</div>
              </div>
            </div>

            <div className="mt-4">
              <button className="px-4 py-2 rounded bg-orange-600 text-black">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;
