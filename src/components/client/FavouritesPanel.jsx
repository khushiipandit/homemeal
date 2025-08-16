// src/components/client/FavouritesPanel.jsx
import React from "react";

export default function FavouritesPanel({ CARD_BG, CARD_GLASS, chefs = [], setActiveTab }) {
  const favs = chefs.filter((c) => c.favourite);
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold">Favourites</h3>
        <p className="text-sm text-gray-400">Your saved chefs & dishes</p>
      </div>

      <div className={`${CARD_BG} ${CARD_GLASS} rounded-3xl p-4 shadow-2xl ring-1 ring-gray-800`}>
        {favs.length === 0 ? (
          <div className="text-gray-400 p-4">No favourites yet. Add chefs to favourites to find them quickly.</div>
        ) : (
          favs.map((c) => (
            <div key={c.id} className="flex items-center justify-between p-3 rounded hover:bg-gray-800/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-gray-700 flex items-center justify-center text-white">{c.name.split(" ").map(n => n[0]).join("").slice(0,2)}</div>
                <div>
                  <div className="font-medium">{c.name}</div>
                  <div className="text-xs text-gray-400">{c.cuisine} • Avg ₹{c.priceAvg}</div>
                </div>
              </div>
              <div>
                <button onClick={() => setActiveTab("Browse")} className="px-3 py-1 rounded bg-gray-800">Browse</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
