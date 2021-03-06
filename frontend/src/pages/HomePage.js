import React, { useEffect, useState } from 'react';

import './pages.css';
import Operations from '../components/Operations';
import Swal from 'sweetalert2';
// import axios from 'axios';
import { useSelector } from 'react-redux';
import OpObtain from '../helpers/OpObtain';
import obtainName from '../helpers/obtainName';
import axios from 'axios';


const HomePage = () => {

  const [records, setRecords] = useState([{ id: '', amount: '', title: '', operationType: ''}]);
  const [total, setTotal] = useState(0);
  const reduxName = useSelector(state => state.name);  // gets redux username
  const userName = obtainName(reduxName);
  useEffect(() => { // gets total amount and operations
    const fetchData = async() => {
      const resultOpOb = await OpObtain(userName);
      const {record, tot} = resultOpOb; 
      setTotal(tot);
      setRecords(record);
    };
    fetchData();
  }, [userName]);

  const handleClick = () => {
    Swal.fire({
      title: 'New the operation',
      showCancelButton: true,
      color: 'white',
      background: '#0D4367',
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      html: 
          `<label> Title </label>` +
          `<input id='swal-input1' maxlength='20' placeholder='Title' class='swal2-input customSwalBtn'/>` +
          `<label> Amount </label>` +
          `<input id='swal-input2' type='number' placeholder='Amount' class='swal2-input customSwalBtn'/>`,
      input: 'select',
      inputOptions: {
          Expense: 'Expense',
          Income: 'Income'
      },
      customClass: {
          input: 'input_swal',
      }
  }).then(async(result) => {
      if(result.isConfirmed){
        const resultTitle = document.getElementById('swal-input1').value;
        const resultAmount = document.getElementById('swal-input2').value;
            const axiosResults = await axios.get('http://localhost:3001/api/users', {
              params: {
                name: userName
              }
            })
            const userData = axiosResults.data[0];
          axios.post(`http://localhost:3001/api/operation`, {
              params: {
                title: resultTitle,
                amount: resultAmount,
                operationType: result.value,
                userID: userData.id
              }
          }).then().catch(err => console.log(err));
          Swal.fire({
              title: 'Operation created',
              icon: 'success',
              color: 'white',
              confirmButtonColor: 'green',
              iconColor: 'green',
              background: '#0D4367',
              timer: 3000,
          }).then(() => {document.location.reload()});
      };
  }).catch(err => console.log(err));
  };

  return (
    <div className='text-white'>
      <div className={`flex flex-col items-center bg_homePage ${records.length < 8 ? 'height_homeL' : 'height_homeH'}`}>
        <div className=''>
          <h4 className=' total_home flex 
                          justify-center items-center 
                          border border-solid rounded-xl
                           m-0 p-0 mt-6 mb-6'
          > $ {total} </h4>
        </div>
          <button 
            className='page_button rounded-lg mb-16 button_home text-white cursor-pointer'
            onClick={handleClick}
          > 
            New record
          </button>
          <div className='border-none border-solid rounded-lg p-6 tenOperations '>
            {
              // render 10 operations or a <p></p>
              records.length > 0 ? 
                records.slice(0, 10).map((prop) => {
                  return <Operations key={prop.id} id={prop.id} amount={prop.amount} title={prop.title} operationType={prop.operationType} />
                }) 
                : 
                <p> You don't have any records </p>
            }
          </div>
      </div>
    </div>
  );
};

export default HomePage;