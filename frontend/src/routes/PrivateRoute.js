import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const PrivateRoute = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        {
          !isOpen ? 
            (
              <button 
                className='fixed z-30 flex items-center cursor-pointer right-4 top-6 bg-transparent border-0 '
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className=''
                  viewBox="0 0 100 60"
                  width="40"
                  height="35"
                >
                  <rect y="0" width="60" height="4" fill='white'></rect>
                  <rect y="20" width="60" height="4" fill='white'></rect>
                  <rect y="40" width="60" height="4" fill='white'></rect>
                </svg>
              </button>
            ) 
          : 
            (
              <button 
                className='text-xl z-30 fixed top-6 right-10 cursor-pointer bg-transparent border-0 text-white'
                onClick={() => setIsOpen(!isOpen)}
              > X </button>
            )
        }
        <div className={`top-0 right-0 fixed ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>    
          <div className='mt-16 mr-8'>
            <p>hello</p>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route exact path='*' element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
};

export default PrivateRoute;