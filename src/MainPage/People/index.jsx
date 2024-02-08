
//-------v6-------------------------------------
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomerList from './CustomerList';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import SupplierList from './SupplierList';
import AddSupplier from './AddSupplier';
import EditSupplier from './EditSupplier';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';
import StoreList from './StoreList';
import AddStore from './AddStore';
import EditStore from './EditStore';

const PeopleIndex = () => (
  <Routes>
    <Route
      path="customerlist-people"
      element={<CustomerList />}
    />
    <Route
      path="addcustomer-people"
      element={<AddCustomer />}
    />
    <Route
      path="editcustomer-people"
      element={<EditCustomer />}
    />
    <Route
      path="supplierlist-people"
      element={<SupplierList />}
    />
    <Route
      path="addsupplier-people"
      element={<AddSupplier />}
    />
    <Route
      path="editsupplier-people"
      element={<EditSupplier />}
    />
    <Route
      path="userlist-people"
      element={<UserList />}
    />
    <Route
      path="adduser-people"
      element={<AddUser />}
    />
    <Route
      path="edituser-people"
      element={<EditUser />}
    />
    <Route
      path="storelist-people"
      element={<StoreList />}
    />
    <Route
      path="addstore-people"
      element={<AddStore />}
    />
    <Route
      path="editstore-people"
      element={<EditStore />}
    />
    <Route
      path="/"
      element={<Navigate to="customerlist-people" />}
    />
  </Routes>
);

export default PeopleIndex;
