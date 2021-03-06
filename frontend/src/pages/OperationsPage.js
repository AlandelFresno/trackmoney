// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Operations from '../components/Operations';
import obtainName from '../helpers/obtainName';
import OpObtain from '../helpers/OpObtain';
import './pages.css';

const OperationsPage = () => {

  const reduxName = useSelector(state => state.name);
  const [records, setRecords] = useState([{id:''}]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const userName = obtainName(reduxName);

  useEffect(() => {
    // Gets operations
    const fetchData = async() => {
      setLoading(true);
      const resultOpOb = await OpObtain(userName);
      const {record} = resultOpOb; 
      setRecords(record);
      setLoading(false);
    };
    fetchData();
  }, [userName]);
  
  //pagination
  const postPerPage = 15;
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = records.slice(indexOfFirstPost, indexOfLastPost);
  //Get quantity of pages 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(records.length / postPerPage); i++) {
    pageNumbers.push(i)
  };
  
  // HandleClick pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    return <Navigate to={pageNumber}/>
  };

  if(loading) {
    return <h2> Loading... </h2>;
  };
  
  // Operation create
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
          input: 'input_swal'
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
        <div className={`flex flex-col  items-center bg_operationPage ${currentPost.length < 8 ? 'height_operationL' : 'height_operationH'}`}>
            <h4 className='mt-16 operation_h4'>OPERATIONS</h4>
            <button 
              className='border-none rounded-lg mb-16 cursor-pointer button_operationPage'
              onClick={handleClick}
            > 
              New record
            </button>
            <div className='flex flex-col bg_operationList rounded-xl border-solid border p-2 mb-8'>
              <div className='pl-2 pr-2 flex flex-col items-center'>
               {    //render operations depends of postPerPage
                 currentPost.length > 0 ? 
                  currentPost.map((prop) => {
                    return <Operations key={prop.id} id={prop.id} amount={prop.amount} title={prop.title} operationType={prop.operationType}/>
                  })
                  :
                  <p> You don't have any records </p>
               }
                <nav className='flex justify-center items-center'>
                {    //moves you to the first page of pagination
                    currentPost >= 1 ? 
                    <a className='no-underline text-white pl-2 m-0 p-0' onClick={(e) => {e.preventDefault(); paginate(1)}} href='/operations/!#'> First page</a>
                    :
                    <p></p>
                  }
                  <ul className='flex no-underline list-none p-0'>
                    {       //  handle pagination numbers ( they desapear if not handle)
                      currentPage < 2 ? 
                      pageNumbers.slice(currentPage-1, currentPage+5).map(number => (
                        <li key={number} className=''>
                          <a className='no-underline text-white pl-2' onClick={(e) => {e.preventDefault(); paginate(number)}} href='/operations/!#'>
                            {number}
                          </a>
                        </li>
                      ))
                      : currentPage < 3 ?

                      pageNumbers.slice(currentPage-2, currentPage+5).map(number => (
                        <li key={number} className=''>
                          <a className='no-underline text-white pl-2' onClick={(e) => {e.preventDefault(); paginate(number)}} href='/operations/!#'>
                            {number}
                          </a>
                        </li>
                      )) 
                      : currentPage < 4 ? 
                      pageNumbers.slice(currentPage-3, currentPage+5).map(number => (
                        <li key={number} className=''>
                          <a className='no-underline text-white pl-2' onClick={(e) => {e.preventDefault(); paginate(number)}} href='/operations/!#'>
                            {number}
                          </a>
                        </li>
                      )) 
                      : currentPage < 5 ?
                      pageNumbers.slice(currentPage-4, currentPage+5).map(number => (
                        <li key={number} className=''>
                          <a className='no-underline text-white pl-2' onClick={(e) => {e.preventDefault(); paginate(number)}} href='/operations/!#'>
                            {number}
                          </a>
                        </li>
                      )) 
                      :
                      pageNumbers.slice(currentPage-5, currentPage+5).map(number => (
                        <li key={number} className=''>
                          <a className='no-underline text-white pl-2' onClick={(e) => {e.preventDefault(); paginate(number)}} href='/operations/!#'>
                            {number}
                          </a>
                        </li>
                      )) 
                    }
                  </ul>
                  {       // moves you to the last page of pagination
                    currentPost >= 1 ? 
                    <a clssName='no-underline text-white pl-2 m-0 p-0' onClick={(e) => {e.preventDefault(); paginate(pageNumbers.length )}} href='/operations/!#'> Last Page</a>
                    :
                    <p></p>
                  }
                </nav>
              </div>
            </div>
        </div>
      </div>
  );
};

export default OperationsPage;