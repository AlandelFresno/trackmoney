import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const PrivateRoute = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default PrivateRoute;