import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

const Operations = (params) => {

    const {amount, title, operationType} = params;
    
    // console.log(amount, title, operationType);

    const handleClickEdit = () => {

    };

    const handleClickDelete = () => {

        Swal.fire()

    };

  return (
    <div className='flex w-96 justify-between items-center border boder-solid rounded-md border-white'>
        <h5> {title}</h5>
        {
            operationType === 'Income' ? 
                <p className='pl-20 text-green-700'> {amount} </p>  
            :
                <p className='pl-20 text-red-600'> {amount} </p>
            
        }
        <div>
            <EditIcon onClick={handleClickEdit} className='cursor-pointer' fontSize='small'/>
            <DeleteIcon onClick={handleClickDelete} className='cursor-pointer' fontSize='small'/>
        </div>
    </div>
  );
};

export default Operations;