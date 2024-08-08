//---------------------------v6------------------
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AssignTo from './AssignTo';
import AssignTable from './AssignTable';
import DropList from './DropList';



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
      path="drop_List"
      element={<DropList />}
    />
   
    

   
    <Route
      path="/"
      element={<Navigate to="assign_to" />}
    />
  </Routes>
);

export default TransactionIndex;
