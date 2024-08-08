//---------------------------v6------------------
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Genaral from './genaral';
import Grouppermission from './grouppermission';
import WhatsappConfig from './WhatsappConfig';
import OTPConfig from './OTPConfig';


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
      path="whatsapp_config"
      element={<WhatsappConfig />}
    />
    <Route
      path="otp_config"
      element={<OTPConfig />}
    />

   
    <Route
      path="/"
      element={<Navigate to="generalsettings" />}
    />
  </Routes>
);

export default UserIndex;
