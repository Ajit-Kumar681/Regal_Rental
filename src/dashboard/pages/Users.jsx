import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Ajit Kumar", email: "ajit@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "Rahul Sharma", email: "rahul@gmail.com", role: "Manager", status: "Active" },
    { id: 3, name: "Neha Singh", email: "neha@gmail.com", role: "User", status: "Inactive" },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  // DELETE
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // EDIT SAVE
  const handleSave = () => {
    setUsers(
      users.map((user) =>
        user.id === editingUser.id ? editingUser : user
      )
    );
    setEditingUser(null);
  };

  return (
    <div className="users-page">
      <div className="users-header">
        <h1>Users</h1>
        <button className="btn-primary">Add User</button>
      </div>

      <div className="users-card">
        <table className="users-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-link"
                    onClick={() => setEditingUser({ ...user })}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-link danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {editingUser && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit User</h3>

            <input
              type="text"
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
              placeholder="Name"
            />

            <input
              type="email"
              value={editingUser.email}
              onChange={(e) =>
                setEditingUser({ ...editingUser, email: e.target.value })
              }
              placeholder="Email"
            />

            <select
              value={editingUser.role}
              onChange={(e) =>
                setEditingUser({ ...editingUser, role: e.target.value })
              }
            >
              <option>Admin</option>
              <option>Manager</option>
              <option>User</option>
            </select>

            <select
              value={editingUser.status}
              onChange={(e) =>
                setEditingUser({ ...editingUser, status: e.target.value })
              }
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <div className="modal-actions">
              <button
                className="btn-secondary"
                onClick={() => setEditingUser(null)}
              >
                Cancel
              </button>
              <button className="btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
