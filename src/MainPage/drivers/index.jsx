
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NewDriver from './newdriver';
// import DriverLists from './driverlists';
import NewDriverEdit from './newdriveredit';
import TransportComp from './TransportComp';
import VehicleComp from './VehicleComp';
import DriverManagementList from './DriverManagementList';


const DriversIndex = () => {

  return (
    <Routes>
      <Route
        path=""
        element={<Navigate to="newdriver" replace />}
      />
      <Route path="newdriver" element={<NewDriver />} />
      <Route path="newdriveredit" element={<NewDriverEdit />} />
      <Route path="transport_master" element={<TransportComp />} />
      <Route path="vehicle_master" element={<VehicleComp />} />
      <Route path="driver_management_list/:userId" element={<DriverManagementList/>}/>
    </Routes>
  );
};

export default DriversIndex;
