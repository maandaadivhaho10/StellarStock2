import React from 'react';
// import './ProfilePage.css';

function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'user@example.com',
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
