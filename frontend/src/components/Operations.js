import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import './components.css';
import axios from 'axios';

const Operations = (params) => {

    const {amount, title, operationType, id} = params;

    const handleClickEdit = () => {     // Operation Edit
        Swal.fire({             
            title: 'Edit the operation',
            showCancelButton: true,
            color: 'white',
            background: '#0D4367',
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            html: 
                `<label> Title </label>` +
                `<input id='swal-input1' maxlength='20' placeholder=${title !== '' ? title : 'NoTitle'} class='swal2-input customSwalBtn'/>` +
                `<label> Amount </label>` +
                `<input id='swal-input2' placeholder=${amount} class='swal2-input customSwalBtn'/>`
        }).then((result) => {
            if(result.isConfirmed){
                let resultAmount;
                let resultTitle;
                
                if ( document.getElementById('swal-input1').value === ''){   // handle inputs
                    resultTitle = title;
                } else {
                    resultTitle = document.getElementById('swal-input1').value;
                };
                if ( document.getElementById('swal-input2').value === ''){
                    resultAmount = amount;
                } else {
                    resultAmount = document.getElementById('swal-input2').value;
                };
                axios.put(`http://localhost:3001/api/operation`, {   // PUT request
                    id,
                    title: resultTitle,
                    amount: resultAmount,
                }).then().catch(err => console.log(err));
                Swal.fire({   // Fire confirmation
                    title: 'Operation updated',
                    icon: 'success',
                    color: 'white',
                    confirmButtonColor: 'green',
                    iconColor: 'green',
                    background: '#0D4367',
                    timer: 3000,
                }).then(() => {document.location.reload()});  // Refresh
            };
        }).catch(err => console.log(err));
    };
    
    const handleClickDelete = () => {   // Operation Delete
        Swal.fire({         // Fire question
            title: 'Want to delete it?',
            color: 'white',
            icon: 'warning',
            iconColor: 'white',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it',
            confirmButtonColor: 'green',
            cancelButtonText: 'No, cancel',
            cancelButtonColor: 'red',
            background: '#0D4367',
        }).then ((ressult) => {
                if(ressult.isConfirmed) {
                    axios.delete('http://localhost:3001/api/operation', {  //DELETE request
                        params: {
                            id
                        }
                    });
                    Swal.fire({   // Fire confirmation
                        title: 'Operation deleted',
                        icon: 'success',
                        color: 'white',
                        confirmButtonColor: 'green',
                        iconColor: 'green',
                        background: '#0D4367',
                        timer: 2000,
                    }).then(() => {document.location.reload()});   //Refresh
                };
            })
          .catch(err => console.log(err));
    };

  return (
    <div className='flex justify-between operation_width items-center border boder-solid rounded-md border-white'>
        <h5 className='title_width text-sm'>{title}</h5>
        {
            operationType === 'Income' ?    // Change color by operation type
                <p className='text-green-700 text-base'> ${amount} </p>  
            :
                <p className='text-red-600 base'> ${amount} </p>
        }
        <div className='title_width flex justify-end'>   {/* Edit & Delete icon */}
            <EditIcon onClick={handleClickEdit} className='cursor-pointer' fontSize='small'/>
            <DeleteIcon onClick={handleClickDelete} className='cursor-pointer' fontSize='small'/>
        </div>
    </div>
  );
};

export default Operations;