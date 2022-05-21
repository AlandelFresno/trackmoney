import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import BurgerMenu from '../components/BurgerMenu';

const PrivateRoute = () => {
  
  return (
    <div>
      <BurgerMenu />    
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route exact path='*' element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
};

export default PrivateRoute;