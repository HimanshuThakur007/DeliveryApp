
//------------------v6--------------------
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EmployeeProfile from './EmployeeProfile';

const ProfileIndex = () => (
  <Routes>
    <Route
      path="user-profile"
      element={<EmployeeProfile />}
    />
    <Route
      path="/"
      element={<Navigate to="user-profile" />}
    />
  </Routes>
);

export default ProfileIndex;
