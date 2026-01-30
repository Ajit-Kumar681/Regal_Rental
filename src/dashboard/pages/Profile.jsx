import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Ajit Kumar",
    email: "ajit@gmail.com",
    phone: "9876543210",
    role: "Admin",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account details</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar"></div>

        <div className="profile-form">
          <div className="profile-row">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="profile-row">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="profile-row">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="profile-row">
            <label>Role</label>
            <input type="text" value={user.role} disabled />
          </div>

          <div className="profile-actions">
            {!editing ? (
              <button className="btn-primary" onClick={() => setEditing(true)}>
                Edit Profile
              </button>
            ) : (
              <>
                <button className="btn-outline" onClick={() => setEditing(false)}>
                  Cancel
                </button>
                <button className="btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
