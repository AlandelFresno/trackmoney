import React from 'react';
import { Link } from 'react-router-dom';

import './pages.css';

import Operations from '../components/Operations';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { NameLogIn } from '../redux/actions/name';




const HomePage = () => {

  const dispatch = useDispatch();
  const total = 1234321;
  const amount = 1000;
  const title = 'title';
  // const operationType = 'Expense';
  const operationType = 'Income';
  const resutl = useSelector(state => state.name);
  const handleClick = async() => {
    // const operations = await axios.get('http://localhost:3001/api/operation', {
      //   params: {
        //     name: 'front'
        //   }
        // });
        // const operations = await axios.post('http://localhost:3001/api/operation', {
          //   title: 'Salary',
          
    //   operationType: 'Income',
    //   amount: 2000,
    // });

    dispatch(NameLogIn('dek'));
    console.log(resutl);
    // const operations = await axios.get('http://localhost:3001/api/users', {
    //   params: {
    //     name: ''
    //   }
    // })

    // console.log(operations);
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