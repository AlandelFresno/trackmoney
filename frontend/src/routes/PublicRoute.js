import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import WelcomePage from '../pages/WelcomePage';

const PublicRoute = () => {
  return (
    <Routes>
      <Route excat path='/' element={<WelcomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default PublicRoute;