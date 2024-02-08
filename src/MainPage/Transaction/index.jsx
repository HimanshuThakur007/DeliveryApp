//---------------------------v6------------------
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AssignTo from './AssignTo';
import AssignTable from './AssignTable';



const TransactionIndex = () => (
  <Routes>
    <Route
      path="assign_to"
      element={<AssignTo />}
    />
    <Route
      path="assign_List"
      element={<AssignTable />}
    />
   
    

   
    <Route
      path="/"
      element={<Navigate to="assign_to" />}
    />
  </Routes>
);

export default TransactionIndex;
