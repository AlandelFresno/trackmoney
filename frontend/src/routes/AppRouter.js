import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { useSelector } from "react-redux";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

  let token = false;
  const tokenRedux = useSelector(state => state.auth.login);
  const tokenStore = (localStorage.getItem('auth') === 'true');

  if (tokenRedux || tokenStore) {
    token = true;
  };

  return (
    <Router>
        {
          token ? (
            <PrivateRoute />
          ) : (
            <PublicRoute />
          )
        }
        
    </Router>
  );
};

export default AppRouter;