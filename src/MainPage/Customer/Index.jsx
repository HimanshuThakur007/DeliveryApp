/* eslint-disable react/prop-types */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddCustomer from './AddCustomer';
// import { Routes, Route} from 'react-router-dom';


const CustomerRoute = () => (
  <Routes>
    <Route path="add_customer" element={<AddCustomer />} />
   
    <Route
      path="/"  element={<Navigate to="customer_import" replace />}
    />
   
  </Routes>
);

export default CustomerRoute;
