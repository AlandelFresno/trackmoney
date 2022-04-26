import React from 'react';
import { useDispatch } from 'react-redux';
import { LogOut } from '../redux/actions/auth';

const HomePage = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(LogOut());
  };
  
  return (
    <div>
      <div>HomePage</div>
      <button onClick={handleClick}> logout </button>
    </div>
  );
};

export default HomePage;