import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoute = () => {
  return (
    <Routes>
      <Route exact path='/' element={<></>} />
      <Route exact path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default PrivateRoute;