import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export const EditTable2 = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const [branch, setBranch] = useState({
      id: "",
      bname: "",
      baddress: "",
      bcontact: ""
    });
  
    useEffect(() => {
      axios.get(`http://localhost:8888/branch/${id}`)
        .then((res) => {
          console.log(res.data);
          setBranch(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, [id]);
  
    const inputHandler = (event) => {
      setBranch({ ...branch, [event.target.name]: event.target.value });
    };
  
    const updateProduct = (event) => {
      event.preventDefault();
  
      axios.put(`http://localhost:8888/branch/${id}`, branch)
        .then(() => {
          window.alert("Course Updated successfully");
          nav("/table2");
        })
        .catch((err) => {
          console.error(err);
        });
    };

    return (
        <div>
            
            <h1 style={{ textAlign: 'center' }}>Course Details</h1>
      <form style={{ textAlign: 'center', alignItems: 'center' }} onSubmit={updateProduct}>
        <div className='form-group'>
          <label className='form-label'>Enter Course Name</label>
          <input type='text' name='bname' className='form-control' onChange={inputHandler} value={branch.bname}></input>
        </div>
        <div className='form-group'>
          <label className='form-label'>Enter Course Price</label>
          <input type='text' name='baddress' className='form-control' onChange={inputHandler} value={branch.baddress}></input>
        </div>
        <div className='form-group'>
          <label className='form-label'>Enter Course Duration</label>
          <input type='text' name='bcontact' className='form-control' onChange={inputHandler} value={branch.bcontact}></input>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
        </div>
    )
}

export default EditTable2