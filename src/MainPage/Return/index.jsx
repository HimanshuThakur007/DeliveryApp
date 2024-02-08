//--------------------v6-----------------------
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SalesReturnList from './SalesReturnList';
import AddSalesReturn from './AddSalesReturn';
import EditSalesReturn from './EditSalesReturn';
import PurchaseReturnList from './PurchaseReturnList';
import AddPurchaseReturn from './AddPurchaseReturn';
import EditPurchaseReturn from './EditPurchaseReturn';

const ReturnIndex = () => (
  <Routes>
    <Route
      path="salesreturnlist-return"
      element={<SalesReturnList />}
    />
    <Route
      path="addsalesreturn-return"
      element={<AddSalesReturn />}
    />
    <Route
      path="editsalesreturn-return"
      element={<EditSalesReturn />}
    />
    <Route
      path="purchasereturnlist-return"
      element={<PurchaseReturnList />}
    />
    <Route
      path="addpurchasereturn-return"
      element={<AddPurchaseReturn />}
    />
    <Route
      path="editpurchasereturn-return"
      element={<EditPurchaseReturn />}
    />
    <Route
      path="/"
      element={<Navigate to="salesreturnlist-return" />}
    />
  </Routes>
);

export default ReturnIndex;
