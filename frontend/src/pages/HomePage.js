import React, { useEffect, useState } from 'react';

import './pages.css';
import Operations from '../components/Operations';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useSelector } from 'react-redux';





const HomePage = () => {

  
  const total = 1234321;
  const reduxName = useSelector(state => state.name);
  const [records, setRecords] = useState([]);
  
  useEffect(() => {
    const getId = async() => {
      const {data} = await axios.get('http://localhost:3001/api/users', {params: {name: reduxName.name}});
      // console.log(data[0].id);
      return data[0].id;
    };
    const getOperations = async() => {
      const userID = await getId();
      // console.log(userID);
      const record = await axios.get('http://localhost:3001/api/operation', {
        params: {
          userID: userID
        }
      });
      // console.log(record);
      setRecords(record.data);
    };
    getOperations();
  }, [reduxName]);
  


  const handleClick = () => {
    Swal.fire('Any fool can use a computer');
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
            {

              records.length > 0 ? 
                records.map((prop) => {
                  // console.log(prop)
                  return <Operations amount={prop.amount} title={prop.title} operationType={prop.operationType} />
                }) 
                : 
                <p> You don't have any record</p>
            }
          </div>
          <button 
            className='page_button w-32 h-8 border-2 border-white rounded-lg mt-4'
            onClick={handleClick}
          > 
            New record
          </button>
      </div>
    </div>
  );
};

export default HomePage;