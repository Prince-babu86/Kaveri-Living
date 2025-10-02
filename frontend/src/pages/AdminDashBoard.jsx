import { useEffect, useState } from "react";
import { Trash2, ShieldCheck } from "lucide-react";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fake Users
  const fakeUsers = [
    {
      _id: "1",
      name: "Aarav Sharma",
      email: "aarav@example.com",
      phone: "9876543210",
      role: "user",
    },
    {
      _id: "2",
      name: "Priya Patel",
      email: "priya@example.com",
      phone: "9988776655",
      role: "user",
    },
    {
      _id: "3",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      phone: "9123456789",
      role: "admin",
    },
  ];

  // Simulate fetching users
  useEffect(() => {
    setTimeout(() => {
      setUsers(fakeUsers);
      setLoading(false);
    }, 1000); // fake loading for 1s
  }, []);

  // Delete user (frontend only)
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u._id !== id));
  };

  // Make user admin (frontend only)
  const makeAdmin = (id) => {
    setUsers(
      users.map((u) =>
        u._id === id ? { ...u, role: "admin" } : u
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {loading ? (
        <p className="text-gray-400">Loading users...</p>
      ) : (
        <div className="overflow-x-auto bg-gray-900 rounded-xl shadow-lg border border-gray-800">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Role</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-gray-800 hover:bg-gray-800/40"
                  >
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.phone}</td>
                    <td className="p-3">
                      {user.role === "admin" ? (
                        <span className="text-purple-400 font-semibold">
                          Admin
                        </span>
                      ) : (
                        <span className="text-gray-300">User</span>
                      )}
                    </td>
                    <td className="p-3 flex gap-3">
                      {user.role !== "admin" && (
                        <button
                          onClick={() => makeAdmin(user._id)}
                          className="flex items-center gap-1 px-3 py-1 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm"
                        >
                          <ShieldCheck className="w-4 h-4" /> Make Admin
                        </button>
                      )}
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
                      >
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-3 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
