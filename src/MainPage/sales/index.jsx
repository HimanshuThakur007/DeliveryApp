
//------------------v6------------------------
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Saleslist from './saleslist';
import Addsales from './addsales';
import Editsales from './editsales';
import Saledetails from './saledetails';
import Sales from './invoices';
const SalesIndex = () => (
  <Routes>
    <Route
      path="saleslist"
      element={<Saleslist />}
    />
    <Route
      path="add-sales"
      element={<Addsales />}
    />
    <Route
      path="edit-sales"
      element={<Editsales />}
    />
    <Route
      path="sales-details"
      element={<Saledetails />}
    />
    <Route
      path="sales-invioce"
      element={<Sales />}
    />
   
    <Route
      path="/"
      element={<Navigate to="saleslist" />}
    />
  </Routes>
);

export default SalesIndex;
