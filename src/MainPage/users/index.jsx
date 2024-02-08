
import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import Newuser from './newuser';
import Userlists from './userlists';
import Newuseredit from './newuseredit';


const UserIndex = () => {


  return (
    <Routes>
      <Route
        path=""
        element={<Navigate to="newuser" replace />}
      />
      <Route path="newuser" element={<Newuser />} />
      <Route path="userlists" element={<Userlists />} />   
      <Route path="newuseredit" element={<Newuseredit />} />
    </Routes>
  );
};

export default UserIndex;
