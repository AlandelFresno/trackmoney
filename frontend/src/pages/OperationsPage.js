import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import Operations from '../components/Operations';

const OperationsPage = () => {

  const reduxName = useSelector(state => state.name);

  const handleClick = () => {

    console.log(reduxName.name);
    axios.post('http://localhost:3001/api/operation', {
      params: {
        name: reduxName.name,
        title: 'Salary',
        amount: 1000,
        operationType: 'Income'
      }
    });

  };

  return (
    <div className='w-screen  text-white'>
        <button onClick={handleClick}> new operation</button>
        <div className='flex  flex-col items-center'>
            <h4 className='mt-8'>OPERATIONS</h4>
            <div className='flex  h-screen justify-center content-center items-center flex-col'>
              <div className='border border-solid rounded-xl operation_width  flex flex-col items-center'>
                <Operations amount='1' title='operation' operationType='Income'/>
                <Operations amount='1' title='operation' operationType='Income'/>
                <Operations amount='1' title='operation' operationType='Income'/>
                <Operations amount='1' title='operation' operationType='Income'/>
                <Operations amount='1' title='operation' operationType='Income'/>
                <Operations amount='1' title='operation' operationType='Income'/>
              </div>
            </div>
        </div>
    </div>
  );
};

export default OperationsPage;