import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route exact path='*' element={<Navigate to='/home' />} />
    </Routes>
  );
};

export default PrivateRoute;