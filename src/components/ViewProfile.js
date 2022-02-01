import React from 'react';
import { Outlet } from 'react-router-dom';

const ViewProfile = () => {
  return (
    <div>
      <h2>View Profile Page</h2>
      <Outlet />
    </div>
  );
};

export default ViewProfile;
