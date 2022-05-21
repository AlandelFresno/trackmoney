import React from 'react';
import { Link } from 'react-router-dom';


import './pages.css';

const WelcomePage = () => {

  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <div className='pt-16'>
        <h2 className=''>Welcome to Trackmoney</h2>
      </div>
      <button className='mt-8 w-20 border-2 rounded-lg mt-6 form_button '>
        <Link className='no-underline text-lg' to='/login'>Login</Link>
      </button>
    </div>
  );
};

export default WelcomePage;