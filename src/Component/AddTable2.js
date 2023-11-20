import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTable2 = () => {
    const nav = useNavigate();
    const [branch,setBranch] =useState({
        bname:"",
        baddress:"",
        bcontact:""
         
    })
    const inputHandler = (event)=>{
    //  console.log(event.target.type)
    //  console.log(event.target.name)
    //  console.log(event.target.value)
    setBranch({...branch,[event.target.name]:event.target.value})
    }
    const addData = (event)=>{
        event.preventDefault();
        // console.log(product)
        axios.post("http://localhost:8888/branch",branch).then(()=>{
            window.alert("Course added Successfully");
            nav("/table2");
        }).catch((err)=>{})
    }

    return (
        <div>
            <form onSubmit={addData}>
              <div className='form-group'>
              <h1 style={{textAlign:'center'}}>Add Branch</h1>
                   <label className='form-label'>Enter Branch Name</label>
                   <input type='text' name='bname' className='form-control' onChange={inputHandler} value={branch.bname}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Branch Address</label>
                   <input type='text' name='baddress' className='form-control' onChange={inputHandler} value={branch.baddress}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Branch Contact</label>
                   <input type='number' name='bcontact' className='form-control' onChange={inputHandler} value={branch.bcontact}/>
              </div>
              
              <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form> 
        </div>
    )
}

export default AddTable2