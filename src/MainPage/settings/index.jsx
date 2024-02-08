//---------------------------v6------------------
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Genaral from './genaral';
import Grouppermission from './grouppermission';


const UserIndex = () => (
  <Routes>
    <Route
      path="generalsettings"
      element={<Genaral />}
    />
   
    
    <Route
      path="grouppermissions"
      element={<Grouppermission />}
    />

   
    <Route
      path="/"
      element={<Navigate to="generalsettings" />}
    />
  </Routes>
);

export default UserIndex;
