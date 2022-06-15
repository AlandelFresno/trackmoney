import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { LogIn } from '../redux/actions/auth';
import { NameLogIn } from '../redux/actions/name';

const AppRouter = () => {

  const dispatch = useDispatch();
  let token = false;
  const tokenRedux = useSelector(state => state.auth.login);
  const tokenStore = (localStorage.getItem('auth') === 'true');
  const nameStore = localStorage.getItem('name');

  // Handle local storage auth and username
  if (tokenStore) { 
    dispatch(LogIn());
  };
  if( nameStore !== '') {
    dispatch(NameLogIn(nameStore));
  };
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