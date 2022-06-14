import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import './components.css';
import axios from 'axios';

const Operations = (params) => {

    const {amount, title, operationType, id} = params;

    const handleClickEdit = () => {
        Swal.fire({
            title: 'Edit the operation',
            showCancelButton: true,
            color: 'white',
            background: '#1f1f1f',
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            html: 
                `<label> Title </label>` +
                `<input id='swal-input1' placeholder=${title} class='swal2-input customSwalBtn'/>` +
                `<label> Amount </label>` +
                `<input id='swal-input2' placeholder=${amount} class='swal2-input customSwalBtn'/>`
        }).then((result) => {
            if(result.isConfirmed){
                let resultAmount;
                let resultTitle;
                
                if ( document.getElementById('swal-input1').value === ''){
                    resultTitle = title;
                } else {
                    resultTitle = document.getElementById('swal-input1').value;
                };
                if ( document.getElementById('swal-input2').value === ''){
                    resultAmount = amount;
                } else {
                    resultAmount = document.getElementById('swal-input2').value;
                };
                axios.put(`http://localhost:3001/api/operation`, {
                    id,
                    title: resultTitle,
                    amount: resultAmount,
                }).then().catch(err => console.log(err));
                Swal.fire({
                    title: 'Operation updated',
                    icon: 'success',
                    color: 'white',
                    confirmButtonColor: 'green',
                    iconColor: 'green',
                    background: '#1f1f1f',
                    timer: 3000,
                }).then(() => {document.location.reload()});
            };
        }).catch(err => console.log(err));
    };
    
    const handleClickDelete = () => {
        Swal.fire({
            title: 'Want to delete it?',
            color: 'white',
            icon: 'warning',
            iconColor: 'white',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it',
            confirmButtonColor: 'green',
            cancelButtonText: 'No, cancel',
            cancelButtonColor: 'red',
            background: '#1f1f1f'
        }).then ((ressult) => {
                if(ressult.isConfirmed) {
                    axios.delete('http://localhost:3001/api/operation', {
                        params: {
                            id
                        }
                    });
                    Swal.fire({
                        title: 'Operation deleted',
                        icon: 'success',
                        color: 'white',
                        confirmButtonColor: 'green',
                        iconColor: 'green',
                        background: '#1f1f1f',
                        timer: 2000,
                    }).then(() => {document.location.reload()});
                };
            })
          .catch(err => console.log(err));
    };

  return (
    <div className='flex justify-between operation_width items-center border boder-solid rounded-md border-white'>
        <h5 className='title_width text-sm'>{title}</h5>
        {
            operationType === 'Income' ? 
                <p className='text-green-700 text-base'> ${amount} </p>  
            :
                <p className='text-red-600 base'> ${amount} </p>
        }
        <div className='title_width flex justify-end'>
            <EditIcon onClick={handleClickEdit} className='cursor-pointer' fontSize='small'/>
            <DeleteIcon onClick={handleClickDelete} className='cursor-pointer' fontSize='small'/>
        </div>
    </div>
  );
};

export default Operations;