import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from '../redux/actions/auth';
import { NameLogOut } from '../redux/actions/name';




const BurgerMenu = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        dispatch(NameLogOut());
        dispatch(LogOut());
        navigate('./login');
      };

  return (
    <div>
        {
          !isOpen ? 
            (
              <button 
                className='fixed z-30 flex items-center cursor-pointer right-8 top-6 bg-transparent border-0 '
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className=''
                  viewBox="0 0 100 60"
                  width="40"
                  height="35"
                >
                  <rect y="0" width="70" height="5" fill='white'></rect>
                  <rect y="20" width="70" height="5" fill='white'></rect>
                  <rect y="40" width="70" height="5" fill='white'></rect>
                </svg>
              </button>
            ) 
          : 
            (
              <button 
                className='text-xl z-30 fixed top-6 right-14 cursor-pointer bg-transparent border-0 text-white'
                onClick={() => setIsOpen(!isOpen)}
              > X </button>
            )
        }
        <div className={`top-0 right-0 fixed ${isOpen ? 'translate-x-0 bg_burgerMenu h-screen pl-4' : 'translate-x-full h-screen'} ease-in-out duration-300`}>    
          <div className='mt-20 mr-8 flex flex-col'>
            <Link to='/home' className='no-underline text-white pb-2 link_burger '> Home </Link>
            <Link to='/operations' className='no-underline text-white pb-2 link_burger'> Records </Link>
            <Link to='/about' className='no-underline text-white pb-2 link_burger'> About </Link>
          </div>
            <button className='mt-4 w-24 logoutbutton' onClick={handleClick}> Logout </button>
        </div>
      </div>
  )
}

export default BurgerMenu