import React from "react";

const AdminsPage = ({ activeUserId, toggleDetails, toggleUserStatus }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Admin Panel</h2>
      <div className="bg-black bg-opacity-20 backdrop-blur-md shadow-lg rounded-xl p-5 text-white">
        <table className="min-w-full bg-black bg-opacity-10 rounded-md text-white shadow-md">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-left">Admin ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Authority</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 101,
                name: "Rahul Mehra",
                phone: "9876543210",
                authority: "Chef Community Lead",
                status: "Active",
                region: "North Zone",
                responsibility: "Managing chef onboarding and welfare",
                appointedDate: "2023-07-01",
              },
              {
                id: 102,
                name: "Simran Kaur",
                phone: "9912345678",
                authority: "Delivery Coordinator",
                status: "Active",
                region: "West Zone",
                responsibility: "Tracking and monitoring delivery operations",
                appointedDate: "2023-08-12",
              },
              {
                id: 103,
                name: "Arjun Patel",
                phone: "9988776655",
                authority: "Menu Strategist",
                status: "Inactive",
                region: "Central",
                responsibility: "Curating weekly menu with local touch",
                appointedDate: "2023-06-21",
              },
              {
                id: 104,
                name: "Priya Nair",
                phone: "9966001122",
                authority: "Operations Head",
                status: "Active",
                region: "Pan India",
                responsibility: "Oversees all admin operations and analytics",
                appointedDate: "2023-05-10",
              },
            ].map((admin) => (
              <React.Fragment key={admin.id}>
                <tr className="hover:bg-blue-900 hover:bg-opacity-30 transition duration-200 ease-in-out">
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{admin.id}</td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{admin.name}</td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{admin.phone}</td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{admin.authority}</td>
                  <td
                    className={`py-2 px-4 border-t border-gray-700 text-left ${
                      admin.status === "Active" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {admin.status}
                  </td>
                  <td className="py-2 px-4 border-t border-gray-700 text-center space-x-2">
                    <button
                      className="text-blue-400 hover:text-blue-600"
                      onClick={() => toggleDetails(admin.id)}
                    >
                      {activeUserId === admin.id ? "Hide" : "View"}
                    </button>
                    <button
                      className={`${
                        admin.status === "Active"
                          ? "text-yellow-400 hover:text-yellow-600"
                          : "text-green-400 hover:text-green-600"
                      }`}
                      onClick={() => toggleUserStatus(admin.id)}
                    >
                      {admin.status === "Active" ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      className="text-red-400 hover:text-red-600"
                      onClick={() => alert(`Removing admin ${admin.name}`)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
                {activeUserId === admin.id && (
                  <tr className="bg-gray-800 bg-opacity-50">
                    <td colSpan="6" className="py-4 px-6 border-t border-gray-700 text-left">
                      <div className="text-gray-300">
                        <p><strong>Assigned Region:</strong> {admin.region}</p>
                        <p><strong>Responsibility Scope:</strong> {admin.responsibility}</p>
                        <p><strong>Date Appointed:</strong> {admin.appointedDate}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminsPage;
