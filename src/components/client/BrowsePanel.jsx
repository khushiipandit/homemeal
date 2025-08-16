import React from "react";

export default function BrowsePanel({ CARD_BG, CARD_GLASS, browseResults, ACCENT, ACCENT_HOVER, toggleFavouriteChef }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {browseResults.map((chef) => (
        <div key={chef.id} className={`${CARD_BG} ${CARD_GLASS} p-4 rounded-lg`}>
          <h3 className="text-lg font-semibold">{chef.name}</h3>
          <p>{chef.cuisine}</p>
          <p>{chef.location}</p>
          <button
            onClick={() => toggleFavouriteChef(chef.id)}
            className={`${ACCENT} ${ACCENT_HOVER} px-3 py-1 rounded mt-2`}
          >
            {chef.favourite ? "Unfavourite" : "Favourite"}
          </button>
        </div>
      ))}
    </div>
  );
}
