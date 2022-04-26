import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

  let token = false;

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