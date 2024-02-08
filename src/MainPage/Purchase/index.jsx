
//-----------------------------v6-------------------
/* eslint-disable react/prop-types */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddPurchase from './AddPurchase';
import PurchaseList from './PurchaseList';
import ImportPurchase from './ImportPurchase';
import EditPurchase from './EditPurchase';

const PurchaseRoute = () => (
  <Routes>
    <Route
      path="pruchaselist-purchase"
      element={<PurchaseList />}
    />
    <Route
      path="addpurchase-purchase"
      element={<AddPurchase />}
    />
    <Route
      path="importpurchase-purchase"
      element={<ImportPurchase />}
    />
    <Route
      path="editpurchase-purchase"
      element={<EditPurchase />}
    />
    <Route
      path="/"
      element={<Navigate to="pruchaselist-purchase" />}
    />
  </Routes>
);

export default PurchaseRoute;
