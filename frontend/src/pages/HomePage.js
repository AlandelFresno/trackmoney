import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogOut } from '../redux/actions/auth';
import './pages.css';

const HomePage = () => {

  const dispatch = useDispatch();
  const total = 11111;


  
  const handleClick = () => {
    dispatch(LogOut());
  };

  return (
    <div className=' w-screen h-screen text-white'>
      
      <div className='flex flex-col items-center'>
        <div className=''>
          <h4 className=' text-5xl 
                          border-white border-solid rounded-xl'
          > $ {total} </h4>
        </div>
          <button 
            className='page_button w-32 h-8 border-2 border-white rounded-lg'
          > 
            <Link to='/newoperation' className='no-underline text-black'> New operation </Link>
          </button>
        <button onClick={handleClick}> logout </button>
      </div>
    </div>
  );
};

export default HomePage;