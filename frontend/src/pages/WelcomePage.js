import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {


  return (
    <div className='h-screen w-screen'>
        <h2>Hello world</h2>
        <Link to='/login'>Login</Link>
    </div>
  );
};

export default WelcomePage;