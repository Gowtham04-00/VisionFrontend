import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTable3 = () => {
    const nav = useNavigate();
    const [trainer,setTrainer] =useState({
        tname:"",
        tsubject:"",
        texperience:""
         
    })
    const inputHandler = (event)=>{
    //  console.log(event.target.type)
    //  console.log(event.target.name)
    //  console.log(event.target.value)
    setTrainer({...trainer,[event.target.name]:event.target.value})
    }
    const addData = (event)=>{
        event.preventDefault();
        // console.log(product)
        axios.post("http://localhost:8888/trainer",trainer).then(()=>{
            window.alert("Course added Successfully");
            nav("/table3");
        }).catch((err)=>{})
    }


    return (
        <div>
            <form onSubmit={addData}>
              <div className='form-group'>
              <h1 style={{textAlign:'center'}}>Add Trainer</h1>
                   <label className='form-label'>Enter Trainer Name</label>
                   <input type='text' name='tname' className='form-control' onChange={inputHandler} value={trainer.tname}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Subject</label>
                   <input type='text' name='tsubject' className='form-control' onChange={inputHandler} value={trainer.tsubject}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Experience</label>
                   <input type='text' name='texperience' className='form-control' onChange={inputHandler} value={trainer.texperience}/>
              </div>
              
              <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form> 
        </div>
    )
}

export default AddTable3