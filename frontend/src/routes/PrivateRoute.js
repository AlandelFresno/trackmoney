import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import BurgerMenu from '../components/BurgerMenu';
import OperationsPage from '../pages/OperationsPage';

const PrivateRoute = () => {
  
  return (
    <div>
      <BurgerMenu />    
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/operations' element={<OperationsPage/>}/>
        <Route path='/operations/!#' element={<OperationsPage/>}/>
        <Route exact path='*' element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
};

export default PrivateRoute;