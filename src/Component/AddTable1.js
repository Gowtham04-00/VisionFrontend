import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTable1 = () => {
    const nav = useNavigate();
    const [product,setProduct] =useState({
        cname:"",
        cprice:"",
        cduration:""
         
    })
    const inputHandler = (event)=>{
    //  console.log(event.target.type)
    //  console.log(event.target.name)
    //  console.log(event.target.value)
    setProduct({...product,[event.target.name]:event.target.value})
    }
    const addData = (event)=>{
        event.preventDefault();
        // console.log(product)
        axios.post("http://localhost:8888/product",product).then(()=>{
            window.alert("Course added Successfully");
            nav("/Table1");
        }).catch((err)=>{})
    }
    return (
        <div>
            <form onSubmit={addData}>
              <div className='form-group'>
                <h1 style={{textAlign:'center'}}>Add Course</h1>
                   <label className='form-label'>Enter Course Name</label>
                   <input type='text' name='cname' className='form-control' onChange={inputHandler} value={product.cname}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Course Price</label>
                   <input type='text' name='cprice' className='form-control' onChange={inputHandler} value={product.cprice}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Course Duration</label>
                   <input type='text' name='cduration' className='form-control' onChange={inputHandler} value={product.cduration}/>
              </div>
              
              <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form> 
        </div>
    )
}

export default AddTable1