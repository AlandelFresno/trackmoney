import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const RegisterPage = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-screen'>
      <div className='flex h-screen justify-center items-center'>
        <form 
            className=' flex flex-col items-center p-32 
                        border-2 border-white border-opacity-100 border-solid 
                        rounded-xl form_registerpage'
            onSubmit={handleSubmit}
        >
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-lg'> Username</label>
          <input className='rounded-lg pr-2 text-base pl-1'/>
        </div>
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-lg'> Email </label>
          <input className='rounded-lg pr-2 text-base pl-1'/>
        </div>
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-lg'> Password </label>
          <input className='rounded-lg pr-2 text-base pl-1'/>
        </div>
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-lg'> Confirm Password </label>
          <input className='rounded-lg pr-2 text-base pl-1'/>
        </div>
        <button
          className='page_button w-32 h-8 border-2 border-white rounded-lg mt-6 form_button'
          
        > Register </button>
        <Link to='/login' className='pt-8 text-blue-500'> Log in </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;