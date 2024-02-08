
import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import TrackingComp from './TrackingComp';



const TrackingIndex = () => {


  return (
    <Routes>
      <Route
        path=""
        element={<Navigate to="tracking" replace />}
      />
        
      <Route path="tracking" element={<TrackingComp />} />
    </Routes>
  );
};

export default TrackingIndex;
