import React from "react";

const HomeChefs = ({ activeUserId, toggleDetails, toggleUserStatus }) => {
  const chefs = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit@gmail.com",
      role: "Chef",
      status: "Active",
      enrollmentDate: "2023-05-15",
      specialization: "Indian Cuisine",
      rating: "4.8",
      mealsCooked: 100
    },
    {
      id: 4,
      name: "Surbhi Sharma",
      email: "surbhi@gmail.com",
      role: "Chef",
      status: "Active",
      enrollmentDate: "2023-05-15",
      specialization: "Indian Cuisine",
      rating: "4.8",
      mealsCooked: 120
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Home Chefs</h2>
      <div className="bg-black bg-opacity-20 backdrop-blur-md shadow-lg rounded-xl p-5 text-white">
        <table className="min-w-full bg-black bg-opacity-10 rounded-md text-white shadow-md">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-left">Chef ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {chefs.map((chef) => (
              <React.Fragment key={chef.id}>
                <tr className="hover:bg-green-900 hover:bg-opacity-30 transition duration-200 ease-in-out">
                  <td className="py-2 px-4 border-t border-gray-700 text-left">
                    {chef.id}
                  </td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">
                    {chef.name}
                  </td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">
                    {chef.email}
                  </td>
                  <td className="py-2 px-4 border-t border-gray-700 text-left">
                    {chef.role}
                  </td>
                  <td
                    className={`py-2 px-4 border-t border-gray-700 text-left ${
                      chef.status === "Active"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {chef.status}
                  </td>
                  <td className="py-2 px-4 border-t border-gray-700 text-center space-x-2">
                    <button
                      className="text-blue-400 hover:text-blue-600"
                      onClick={() => toggleDetails(chef.id)}
                    >
                      {activeUserId === chef.id ? "Hide" : "View"}
                    </button>
                    <button
                      className={`${
                        chef.status === "Active"
                          ? "text-yellow-400 hover:text-yellow-600"
                          : "text-green-400 hover:text-green-600"
                      }`}
                      onClick={() => toggleUserStatus(chef.id)}
                    >
                      {chef.status === "Active" ? "Block" : "Activate"}
                    </button>
                    <button
                      className="text-red-400 hover:text-red-600"
                      onClick={() => alert(`Deleting chef ${chef.name}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                {activeUserId === chef.id && (
                  <tr className="bg-gray-800 bg-opacity-50">
                    <td
                      colSpan="6"
                      className="py-4 px-6 border-t border-gray-700 text-left"
                    >
                      <div className="text-gray-300">
                        <p>
                          <strong>Enrollment Date:</strong>{" "}
                          {chef.enrollmentDate}
                        </p>
                        <p>
                          <strong>Specialization:</strong>{" "}
                          {chef.specialization}
                        </p>
                        <p>
                          <strong>Rating:</strong> {chef.rating}
                        </p>
                        <p>
                          <strong>Meals Cooked:</strong> {chef.mealsCooked}
                        </p>
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

export default HomeChefs;
