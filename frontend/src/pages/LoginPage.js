import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './pages.css';
import { LogIn } from '../redux/actions/auth';
import axios from 'axios';
import { NameLogIn } from '../redux/actions/name';

const LoginPage = () => {

  const dispatch = useDispatch();
  const [valid, setValid] = useState({
    userNameErr: '',
    passwordErr: '',
    validationErr: '',
  });

  const isValidate = async(userInput, passwordInput) => {
    const {data} = await axios.get('http://localhost:3001/api/users', {params: {name: userInput}});
    let userNameErr = '';
    let passwordErr = '';
    let validationErr = '';
    
    if( userInput === ''){
      userNameErr = 'Username cannot be blank';
    };

    if( passwordInput === '') {
      passwordErr = 'Password cannot be blank';
    };

    if ( userNameErr === '' && passwordErr === '') {
      if( data.length === 0 ){
        validationErr= 'Incorrect username or password';
      } else {
        const userName = data[0].name.toLowerCase();
        const userPassword = data[0].password;
        if( userName !== userInput.toLowerCase() || userPassword !== passwordInput) {
          validationErr= 'Incorrect username or password';
        };
      };
    };

    if ( userNameErr || passwordErr || validationErr) {
      setValid({userNameErr, passwordErr, validationErr});
      console.log('errors');
      return false;
    };
    console.log('No errors');
    return true;
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const userNameInput = e.target[0].value;
    const passwordInput = e.target[1].value;
    const validation = await isValidate(userNameInput, passwordInput);
    if (validation) {
      setValid({...valid, userNameErr: '', passwordErr: '', validationErr: ''});
      console.log('login', userNameInput);
      dispatch(NameLogIn(userNameInput));
      dispatch(LogIn());
    };
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
        <span className='text-red-600 text-xs pb-2'>  {valid.userNameErr} </span>
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Password </label>
          <input type='password' className='rounded-lg pr-2 text-base pl-1 input_publicpage'/>
        </div>
        <span className='text-red-600 text-xs pb-2'>  {valid.passwordErr} </span>
        <span className='text-red-600 text-xs pb-2'>  {valid.validationErr} </span>
        <button
          className='w-32 h-8 border-2 rounded-lg mt-6 form_button'
          
        > Log In </button>
        <Link to='/register' className='pt-8 link_publicpage'> Create Account </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;