import React from 'react';
import { Outlet } from 'react-router-dom';

const EditProfile = () => {
  return (
    <div>
      <h2>Edit Profile Page</h2>
      <Outlet />
    </div>
  );
};

export default EditProfile;
