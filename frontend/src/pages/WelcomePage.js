import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import './pages.css';

const WelcomePage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    return navigate('/login');
  };

  return (
    <div className='h-screen w-screen flex flex-col items-center bg_welcome'>
      <div className='pt-16'>
        <h2 className=''>Welcome to Trackmoney</h2>
      </div>
      <h3 className='p-8'> Now, you can record your financial income and expenses</h3>
      <button className='mt-14 w-36 h-10 border-2 rounded-lg button_welcome text-lg' onClick={handleClick}> Login </button>
    </div>
  );
};

export default WelcomePage;