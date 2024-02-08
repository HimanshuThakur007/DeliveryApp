
// import React from 'react'
// import { Redirect, Route, Switch } from 'react-router-dom';
// import Purchaseorder from './purchaseorder'
// import Inventry from './inventry'
// import Sales from './sales'
// import Invoices from './invoices'
// import Purchase from './purchase'
// import Supplier from './supplier'

//-----------------------v6--------------------
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sales from './sales';
import Purchase from './purchase';
import ReportComp from './ReportComp';


const AppIndex = () => (
  <Routes>

    <Route
      path="salesreport"
      element={<Sales />}
    />

    <Route
      path="purchasereport"
      element={<Purchase />}
    />
    <Route
      path="report/:userId"
      element={<ReportComp />}
    />

   
    <Route
      path="/"
      element={<Navigate to="purchaseorderreport" />}
    />
  </Routes>
);

export default AppIndex;
