import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTable4 = () => {

    const nav = useNavigate();
    const [batch,setBatch] =useState({
        bname:"",
        btime:"",
        btype:"",
        bavailable:""
         
    })
    const inputHandler = (event)=>{
    //  console.log(event.target.type)
    //  console.log(event.target.name)
    //  console.log(event.target.value)
    setBatch({...batch,[event.target.name]:event.target.value})
    }
    const addData = (event)=>{
        event.preventDefault();
        // console.log(product)
        axios.post("http://localhost:8888/batch",batch).then(()=>{
            window.alert("Batch added Successfully");
            nav("/Table4");
        }).catch((err)=>{})
    }
    return (
        <div>
            <form onSubmit={addData}>
              <div className='form-group'>
              <h1 style={{textAlign:'center'}}>Add Batch</h1>
                   <label className='form-label'>Enter Batch Name</label>
                   <input type='text' name='bname' className='form-control' onChange={inputHandler} value={batch.bname}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Batch Time</label>
                   <input type='text' name='btime' className='form-control' onChange={inputHandler} value={batch.btime}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Batch Type</label>
                   <input type='text' name='btype' className='form-control' onChange={inputHandler} value={batch.btype}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Availability</label>
                   <input type='text' name='bavailable' className='form-control' onChange={inputHandler} value={batch.bavailable}/>
              </div>
              
              <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form> 
        </div>
    )
}

export default AddTable4