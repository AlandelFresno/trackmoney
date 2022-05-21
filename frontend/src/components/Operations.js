import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Operations = (params) => {

    const {amount, title, operationType} = params;
    
    // console.log(amount, title, operationType);



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
            <EditIcon className='cursor-pointer' fontSize='small'/>
            <DeleteIcon className='cursor-pointer' fontSize='small'/>
        </div>
    </div>
  );
};

export default Operations;