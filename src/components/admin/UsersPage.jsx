import React from "react";

export default function UsersPage({
  activeUserId,
  toggleDetails,
  toggleUserStatus
}) {
  const users = [
    { id: 1, name: "Amit Sharma", email: "amit@gmail.com", role: "Chef", status: "Active", enrollmentDate: "2023-05-15", frequentOrder: "lunch", orderFrequency: "Weekly", specialization: "Indian Cuisine", rating: "4.8" },
    { id: 2, name: "Neha Singh", email: "neha@gmail.com", role: "User", status: "Inactive", enrollmentDate: "2024-01-20", frequentOrder: "Aalu Parantha", orderFrequency: "Monthly", ordersDone: 15 },
    { id: 3, name: "Ravi Verma", email: "ravi@gmail.com", role: "User", status: "Active", enrollmentDate: "2023-09-10", frequentOrder: "Ghobhi Aalu", orderFrequency: "Bi-Weekly", ordersDone: 27 },
    { id: 4, name: "Surbhi Sharma", email: "surbhi@gmail.com", role: "Chef", status: "Active", enrollmentDate: "2023-05-15", frequentOrder: "lunch", orderFrequency: "Weekly", specialization: "Indian Cuisine", rating: "4.8" },
    { id: 5, name: "Nitin Singh", email: "nitin@gmail.com", role: "User", status: "Inactive", enrollmentDate: "2024-01-20", frequentOrder: "Aalu Parantha", orderFrequency: "Monthly", ordersDone: 5 },
    { id: 6, name: "Ravikant Verma", email: "ravik@gmail.com", role: "User", status: "Active", enrollmentDate: "2023-09-10", frequentOrder: "Ghobhi Aalu", orderFrequency: "Bi-Weekly", ordersDone: 32 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Users</h2>

      {/* Users Table */}
      <div className="bg-black bg-opacity-20 backdrop-blur-md shadow-lg rounded-xl p-5 text-white">
        <table className="min-w-full bg-black bg-opacity-10 rounded-md text-white shadow-md">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-left">User ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => user.role === "User")
              .map((user) => (
                <React.Fragment key={user.id}>
                  <tr className="hover:bg-red-900 hover:bg-opacity-30 transition duration-200 ease-in-out">
                    <td className="py-2 px-4 border-t border-gray-700 text-left">{user.id}</td>
                    <td className="py-2 px-4 border-t border-gray-700 text-left">{user.name}</td>
                    <td className="py-2 px-4 border-t border-gray-700 text-left">{user.email}</td>
                    <td className="py-2 px-4 border-t border-gray-700 text-left">{user.role}</td>
                    <td
                      className={`py-2 px-4 border-t border-gray-700 text-left ${
                        user.status === "Active" ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {user.status}
                    </td>
                    <td className="py-2 px-4 border-t border-gray-700 text-center space-x-2">
                      <button
                        className="text-blue-400 hover:text-blue-600"
                        onClick={() => toggleDetails(user.id)}
                      >
                        {activeUserId === user.id ? "Hide" : "View"}
                      </button>
                      <button
                        className={`${
                          user.status === "Active"
                            ? "text-yellow-400 hover:text-yellow-600"
                            : "text-green-400 hover:text-green-600"
                        }`}
                        onClick={() => toggleUserStatus(user.id)}
                      >
                        {user.status === "Active" ? "Block" : "Activate"}
                      </button>
                      <button
                        className="text-red-400 hover:text-red-600"
                        onClick={() => alert(`Deleting user ${user.name}`)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  {activeUserId === user.id && (
                    <tr className="bg-gray-800 bg-opacity-50">
                      <td colSpan="6" className="py-4 px-6 border-t border-gray-700 text-left">
                        <div className="text-gray-300">
                          <p><strong>Enrollment Date:</strong> {user.enrollmentDate}</p>
                          <p><strong>Most Frequent Order:</strong> {user.frequentOrder}</p>
                          <p><strong>Order Frequency:</strong> {user.orderFrequency}</p>
                          <p><strong>Number of Orders Done:</strong> {user.ordersDone}</p>
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
}
