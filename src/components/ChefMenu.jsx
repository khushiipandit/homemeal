import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const ChefMenu = ({
  showAddItem,
  setShowAddItem,
  addMenuItem,
  newItem,
  setNewItem,
  menu,
  toggleMenuAvailability,
  deleteMenuItem,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Manage dishes and availability</h3>
          <p className="text-sm text-gray-400"></p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAddItem((s) => !s)}
            className="flex items-center gap-2 px-4 py-2 rounded bg-orange-600 text-black"
          >
            <FaPlus />
            <span>Add item</span>
          </button>
        </div>
      </div>

      {showAddItem && (
        <form
          onSubmit={addMenuItem}
          className="bg-gray-900/60 p-4 rounded shadow space-y-3"
        >
          <div className="grid grid-cols-3 gap-3">
            <input
              value={newItem.name}
              onChange={(e) =>
                setNewItem((p) => ({ ...p, name: e.target.value }))
              }
              placeholder="Item name"
              className="col-span-2 px-3 py-2 rounded bg-gray-800/40 focus:outline-none"
              required
            />
            <input
              value={newItem.price}
              onChange={(e) =>
                setNewItem((p) => ({ ...p, price: e.target.value }))
              }
              placeholder="Price"
              className="px-3 py-2 rounded bg-gray-800/40 focus:outline-none"
              required
              type="number"
            />
          </div>
          <textarea
            value={newItem.description}
            onChange={(e) =>
              setNewItem((p) => ({ ...p, description: e.target.value }))
            }
            placeholder="Short description (optional)"
            className="w-full px-3 py-2 rounded bg-gray-800/40 focus:outline-none"
          />
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-4 py-2 rounded bg-green-600 text-black"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setShowAddItem(false)}
              className="px-4 py-2 rounded bg-gray-800"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="bg-gray-900/60 rounded-lg p-4 shadow">
        <div className="grid gap-3">
          {menu.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-800/30"
            >
              <div>
                <div className="font-medium">{m.name}</div>
                <div className="text-xs text-gray-400">{m.description}</div>
              </div>
              <div className="inline-flex items-center gap-3">
                <div className="text-sm">₹{m.price}</div>
                <button
                  onClick={() => toggleMenuAvailability(m.id)}
                  className={`px-3 py-1 rounded text-sm ${
                    m.available
                      ? "bg-green-600 text-black"
                      : "bg-gray-700"
                  }`}
                >
                  {m.available ? "Available" : "Unavailable"}
                </button>
                <button
                  onClick={() => deleteMenuItem(m.id)}
                  className="p-2 rounded bg-red-700 text-white"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          {menu.length === 0 && (
            <div className="text-gray-400 p-4">No menu items yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefMenu;
