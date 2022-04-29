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
                        rounded-xl form_registerpage'
            onSubmit={handleSubmit}
        >
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Username</label>
          <input className='rounded-lg pr-2 text-base pl-1 input_publicpage'/>
        </div>
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Email </label>
          <input className='rounded-lg pr-2 text-base pl-1 input_publicpage'/>
        </div>
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Password </label>
          <input className='rounded-lg pr-2 text-base pl-1 input_publicpage'/>
        </div>
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Confirm Password </label>
          <input className='rounded-lg pr-2 text-base pl-1 input_publicpage'/>
        </div>
        <button
          className='page_button w-32 h-8 border-2 border-white rounded-lg mt-6 form_button'
          
        > Register </button>
        <Link to='/login' className='pt-8 link_publicpage'> Log in </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;