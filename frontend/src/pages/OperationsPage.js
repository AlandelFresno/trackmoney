// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Operations from '../components/Operations';
import OpObtain from '../helpers/OpObtain';

const OperationsPage = () => {

  const reduxName = useSelector(state => state.name);
  const [total, setTotal] = useState(0);
  const [records, setRecords] = useState([{ id: '', amount: '', title: '', operationType: ''}]);

  useEffect(() => {
    
    const fetchData = async() => {
      const resultOpOb = await OpObtain(reduxName.name);
      const {record, tot} = resultOpOb; 
      setTotal(tot);
      setRecords(record);
    };
    fetchData();

  }, [reduxName]);


  // const handleClick = () => {

  // };

  return (
    <div className='text-white'>
        <div className='flex  flex-col items-center'>
            <h4 className='mt-8'>OPERATIONS</h4>
            <p className='text-xl flex'> Total:  <p className='text-green-700 pl-2 m-0'>{total}</p> </p>
            <div className='flex  h-screen flex-col'>
              <div className='border border-solid rounded-xl pl-2 pr-2 flex flex-col items-center'>
               {
                 records.length > 0 ? 
                  records.map((prop) => {
                    return <Operations key={prop.id} id={prop.id} amount={prop.amount} title={prop.title} operationType={prop.operationType}/>
                  })
                  :
                  <p> You don't have any records </p>
               }
               
              </div>
            </div>
        </div>
    </div>
  );
};

export default OperationsPage;