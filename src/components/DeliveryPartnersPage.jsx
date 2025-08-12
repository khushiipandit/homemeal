import React from "react";

const DeliveryPartnersPage = ({ activeDetails, setActiveDetails }) => {
  const partners = [
    { id: 101, name: "Rakesh Kumar", contact: "9876543210", area: "Paramount", pickup: "Ajnara", hours: "9 AM - 6 PM", deliveries: 120, status: "Active" },
    { id: 102, name: "Neha Gupta", contact: "9876543220", area: "Supertech", pickup: "Supertech", hours: "10 AM - 8 PM", deliveries: 80, status: "Inactive" },
    { id: 103, name: "Vikram Singh", contact: "9876543230", area: "Ajnara", pickup: "Paramount", hours: "8 AM - 5 PM", deliveries: 150, status: "Active" },
    { id: 104, name: "Amit Rana", contact: "9876543240", area: "Crossing Republic", pickup: "Supertech", hours: "11 AM - 7 PM", deliveries: 95, status: "Active" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Delivery Partners</h2>

      {/* Delivery Partners Table */}
      <div className="bg-black bg-opacity-20 backdrop-blur-md shadow-lg rounded-xl p-5 text-white">
        <table className="min-w-full bg-black bg-opacity-10 rounded-md text-white shadow-md">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-left">Partner ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Contact</th>
              <th className="py-3 px-4 text-left">Delivery Area</th>
              <th className="py-3 px-4 text-left">Pickup Point</th>
              <th className="py-3 px-4 text-left">Working Hours</th>
              <th className="py-3 px-4 text-left">Deliveries Made</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => (
              <React.Fragment key={partner.id}>
                <tr className="hover:bg-red-900 hover:bg-opacity-30 transition duration-200 ease-in-out">
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{partner.id}</td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{partner.name}</td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{partner.contact}</td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{partner.area}</td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{partner.pickup}</td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{partner.hours}</td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">{partner.deliveries}</td>
                  <td
                    className={`py-2 px-4 border-t border-gray-700 text-left ${
                      partner.status === "Active" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {partner.status}
                  </td>
                  <td className="py-2 px-4 border-t border-gray-700 text-center space-x-2">
                    <button
                      className="text-blue-400 hover:text-blue-600"
                      onClick={() => setActiveDetails(partner)}
                    >
                      View
                    </button>
                    <button
                      className="text-red-400 hover:text-red-600"
                      onClick={() => alert(`Deleting partner ${partner.name}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pop-up for Delivery Partner Details */}
      {activeDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">Details of {activeDetails.name}</h3>
            <p><strong>Partner ID:</strong> {activeDetails.id}</p>
            <p><strong>Contact:</strong> {activeDetails.contact}</p>
            <p><strong>Delivery Area:</strong> {activeDetails.area}</p>
            <p><strong>Pickup Point:</strong> {activeDetails.pickup}</p>
            <p><strong>Working Hours:</strong> {activeDetails.hours}</p>
            <p><strong>Deliveries Made:</strong> {activeDetails.deliveries}</p>
            <p><strong>Status:</strong> {activeDetails.status}</p>
            <p><strong>Efficiency:</strong> {Math.floor((activeDetails.deliveries / 150) * 100)}%</p>
            <p><strong>Pending Deliveries:</strong> {Math.floor(Math.random() * 5)}</p>
            <p><strong>Rating:</strong> {Math.floor(Math.random() * 5) + 1} / 5</p>
            <button
              className="mt-4 text-red-400 hover:text-red-600"
              onClick={() => setActiveDetails(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryPartnersPage;
