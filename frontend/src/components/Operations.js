import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import './components.css';
import axios from 'axios';

const Operations = (params) => {

    const {amount, title, operationType, id} = params;
    
    
    // console.log(amount, title, operationType);
    
    const handleClickEdit = () => {
        Swal.fire();
    };
    
    const handleClickDelete = () => {
        
        // console.log(id)

        axios.delete('http://localhost:3001/api/operation', {
            params: {
                id
            }
        });

    };

  return (
    <div className='flex justify-between operation_width items-center border boder-solid rounded-md border-white'>
        <h5 className='title_width'>{title}</h5>
        {
            operationType === 'Income' ? 
                <p className='text-green-700'> {amount} </p>  
            :
                <p className='text-red-600'> {amount} </p>
        }
        <div className='title_width flex justify-end'>
            <EditIcon onClick={handleClickEdit} className='cursor-pointer' fontSize='small'/>
            <DeleteIcon onClick={handleClickDelete} className='cursor-pointer' fontSize='small'/>
        </div>
    </div>
  );
};

export default Operations;