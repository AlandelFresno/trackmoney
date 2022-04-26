import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PublicRoute = () => {
  return (
    <Routes>
      <Route path='/login' element={<></>} />
      <Route path='/register' element={<></>} />
      <Route path='/*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default PublicRoute;