import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './pages.css';

const RegisterPage = () => {

  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    nameErr: '',
    emailErr: '',
    passwordErr: '',
    confirmpasswordErr: ''
  };

  const [value, setValue] = useState(initialState);

  const isValidated = async(name) => {

    let nameErr = '';
    let emailErr = '';
    let passwordErr = '';
    let confirmpasswordErr = '';
    const specialChars = "!`@#$ %^&*()+=[];,./{}|:<>? ~";
    const usarnametaken = await isTaken(name);

    if ( !value.email.includes('.com')) {
      emailErr ='Write a valid email';
    };
    
    if (  !value.name  || value.name.length < 3  || value.name.match(specialChars)) {
      nameErr = 'Name should be at least 3 characters and not contain special characters';
    };

    if (!value.password) {
      passwordErr = 'Password cannot be blank';
    };

    if (value.password.length < 6) {
      passwordErr = 'Password should be at least 6 characters';
    };

    if (value.password !== value.confirmpassword) {
      confirmpasswordErr = 'Passwords do not match';
    };
    if (usarnametaken) {
      nameErr = 'Username already exists'
    };
    // console.log( nameErr || emailErr || passwordErr || confirmpasswordErr )

    if ( nameErr || emailErr || passwordErr || confirmpasswordErr) {
      setValue ({...value, nameErr, emailErr, passwordErr, confirmpasswordErr});
      console.log('There is an error')
      return false;
    };
    console.log('No errors')
    return true;
  };


  const handleChange = (e) => {
      setValue({...value, [e.target.name]: e.target.value});
  };

  const isTaken = async(name) => {
    const users = await axios.get('http://localhost:3001/api/users', {params: {name: name}}); 
    if ( users.data.length !== 0 ) {
      // console.log('is taken');
      return true;
    } else {
      // console.log('is free');
      return false;
    };
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validforpost = await isValidated(value.name);
    if (validforpost) {
      console.log(value);
      setValue({...value, emailErr: '', nameErr: '', passwordErr: '', confirmpasswordErr: ''})
      axios.post('http://localhost:3001/api/users', {
        name: value.name,
        email: value.email,
        password: value.password
      });
    };
  };


  return (
    <div className='w-screen'>
      <div className='flex h-screen justify-center items-center'>
        <form 
            className=' flex flex-col items-center p-32 w-96  
                        rounded-xl form_registerpage'
            onSubmit={handleSubmit}
        >
        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Username</label>
          <input 
            className='rounded-lg pr-2 text-base pl-1 input_publicpage'
            name='name'
            onChange={handleChange}
          />
        </div>

        <span className='text-red-600 text-xs pb-2'> { value.nameErr }</span>

        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Email </label>
          <input 
            className='rounded-lg pr-2 text-base pl-1 input_publicpage'
            type='email'
            name='email'
            onChange={handleChange}
          />
        </div>

        <span className='text-red-600 text-xs pb-2'> { value.emailErr } </span>

        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Password </label>
          <input 
            className='rounded-lg pr-2 text-base pl-1 input_publicpage'
            type='password'
            name='password'
            onChange={handleChange}
          />
        </div>

        <span className='text-red-600 text-xs pb-2'> { value.passwordErr } </span>

        <div className='flex flex-col pb-4'>
          <label className='pb-2 text-xl'> Confirm Password </label>
          <input 
            className='rounded-lg pr-2 text-base pl-1 input_publicpage'
            type='password'
            name='confirmpassword'
            onChange={handleChange}  
          />
        </div>

        <span className='text-red-600 text-xs'> { value.confirmpasswordErr } </span>

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