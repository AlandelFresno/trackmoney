import React from 'react';
import { Link } from 'react-router-dom';

import './pages.css';

import Operations from '../components/Operations';
import axios from 'axios';
import { useSelector } from 'react-redux';





const HomePage = () => {

  
  const total = 1234321;
  const amount = 1000;
  const title = 'title';
  // const operationType = 'Expense';
  const operationType = 'Income';
  const reduxName = useSelector(state => state.name);

  const handleClick = async() => {

    const operations = await axios.get('http://localhost:3001/api/users', {
      params: {
        name: reduxName.name
      }
    });

    console.log(operations.data);
    console.log(operations.data[0]);
  };


  return (
    <div className=' w-screen h-screen text-white'>
      <div className='flex flex-col items-center'>
        <div className=''>
          <h4 className=' text-5xl w-96 h-16 flex 
                          justify-center items-center 
                          border border-white border-solid rounded-xl'
          > $ {total} </h4>
        </div>
          <div className='border border-white border-solid rounded-lg p-2'>
            <Operations amount={amount} title={title} operationType={operationType} />
            <Operations amount={amount} title={title} operationType={operationType} />
            <Operations amount={amount} title={title} operationType={operationType} />
            <Operations amount={amount} title={title} operationType={operationType} />
            <Operations amount={amount} title={title} operationType={operationType} />
            <Operations amount={amount} title={title} operationType={operationType} />
            <Operations amount={amount} title={title} operationType={operationType} />
            <Operations amount={amount} title={title} operationType={operationType} />
            <Operations amount={amount} title={title} operationType={operationType} />
            <Operations amount={amount} title={title} operationType={operationType} />
          </div>
          <button 
            className='page_button w-32 h-8 border-2 border-white rounded-lg mt-4'
          > 
            <Link to='/newoperation' className='no-underline text-black'> New operation </Link>
          </button>
          <button onClick={handleClick}> Hello world </button>
      </div>
    </div>
  );
};

export default HomePage;