import React, { useEffect, useState } from 'react';

import './pages.css';
import Operations from '../components/Operations';
import Swal from 'sweetalert2';
// import axios from 'axios';
import { useSelector } from 'react-redux';
import OpObtain from '../helpers/OpObtain';





const HomePage = () => {

  const [records, setRecords] = useState([{ id: '', amount: '', title: '', operationType: ''}]);
  const [total, setTotal] = useState(0);
  const reduxName = useSelector(state => state.name);  // gets redux username
  useEffect(() => { // gets total amount and operations
    const fetchData = async() => {
      const resultOpOb = await OpObtain(reduxName.name);
      const {record, tot} = resultOpOb; 
      setTotal(tot);
      setRecords(record);
    };
    fetchData();
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
              // render 10 operations or a <p></p>
              records.length > 0 ? 
                records.slice(0, 9).map((prop) => {
                  return <Operations key={prop.id} amount={prop.amount} title={prop.title} operationType={prop.operationType} />
                }) 
                : 
                <p> You don't have any records </p>
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