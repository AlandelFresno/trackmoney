import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './pages.css';
import { LogIn } from '../redux/actions/auth';

const LoginPage = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LogIn());
  };

  return (
    <div className='w-screen'>
      <div className='flex h-screen justify-center items-center bg_loginpage'>
        <form 
          className=' flex flex-col items-center p-32  rounded-xl form_loginpage'
          onSubmit={handleSubmit}
        >
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Username </label>
          <input className='rounded-lg pr-2 text-base pl-1 input_publicpage'/>
        </div>
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Password </label>
          <input className='rounded-lg pr-2 text-base pl-1 input_publicpage'/>
        </div>
        <button
          className='page_button w-32 h-8 border-2 border-white rounded-lg mt-6 form_button'
          
        > Log In </button>
        <Link to='/register' className='pt-8 link_publicpage'> Create Account </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;