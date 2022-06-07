// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Operations from '../components/Operations';
import obtainName from '../helpers/obtainName';
import OpObtain from '../helpers/OpObtain';

const OperationsPage = () => {

  const reduxName = useSelector(state => state.name);
  const [total, setTotal] = useState(0);
  const [records, setRecords] = useState([{id:''}]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const userName = obtainName(reduxName);

  useEffect(() => {
    // Gets operations
    const fetchData = async() => {
      setLoading(true);
      const resultOpOb = await OpObtain(userName);
      const {record, tot} = resultOpOb; 
      setTotal(tot);
      setRecords(record);
      setLoading(false);
    };
    fetchData();
  }, [userName]);
  
  //pagination
  const postPerPage = 10;
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = records.slice(indexOfFirstPost, indexOfLastPost);
  //Get quantity of pages 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(records.length / postPerPage); i++) {
    pageNumbers.push(i)
  };

  
  // HandleClick
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    return <Navigate to={pageNumber}/>
  };

  if(loading) {
    return <h2> Loading... </h2>;
  };
    
    return (
      <div className='text-white'>
        <div className='flex  flex-col items-center'>
            <h4 className='mt-8'>OPERATIONS</h4>
            <h6 className='text-xl flex'> Total:  { total < 0 ? <p className='text-red-700 pl-2 m-0'>{total}</p>  : <p className='text-green-700 pl-2 m-0'>{total}</p> } </h6>
            <div className='flex  h-screen flex-col'>
              <div className='border border-solid rounded-xl pl-2 pr-2 flex flex-col items-center'>
               {
                 currentPost.length > 0 ? 
                  currentPost.map((prop) => {
                    return <Operations key={prop.id} id={prop.id} amount={prop.amount} title={prop.title} operationType={prop.operationType}/>
                  })
                  :
                  <p> You don't have any records </p>
               }
                <nav className='flex justify-center items-center'>
                <a className='no-underline text-white pl-2 m-0 p-0' onClick={(e) => {e.preventDefault(); paginate(1)}} href='/operations/!#'> First page</a>
                  <ul className='flex no-underline list-none p-0'>
                    {
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
                  <a className='no-underline text-white pl-2 m-0 p-0' onClick={(e) => {e.preventDefault(); paginate(pageNumbers.length )}} href='/operations/!#'> Last Page</a>
                </nav>
              </div>
            </div>
        </div>
      </div>
  );
};

export default OperationsPage;