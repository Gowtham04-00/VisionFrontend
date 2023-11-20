import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const EditTable4 = () => {

    const { id } = useParams();
  const nav = useNavigate();
  const [batch, setBatch] = useState({
    id: "",
    bname: "",
    btime: "",
    btype: "",
    bavailable: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:8888/batch/${id}`)
      .then((res) => {
        console.log(res.data);
        setBatch(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const inputHandler = (event) => {
    setBatch({ ...batch, [event.target.name]: event.target.value });
  };

  const updateProduct = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:8888/batch/${id}`, batch)
      .then(() => {
        window.alert("Batch Updated successfully");
        nav("/Table4");
      })
      .catch((err) => {
        console.error(err);
      });
  };
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Batch Details</h1>
      <form style={{ textAlign: 'center', alignItems: 'center' }} onSubmit={updateProduct}>
        <div className='form-group'>
          <label className='form-label'>Enter Batch Name</label>
          <input type='text' name='bname' className='form-control' onChange={inputHandler} value={batch.bname}></input>
        </div>
        <div className='form-group'>
          <label className='form-label'>Enter  Batch Time</label>
          <input type='text' name='btime' className='form-control' onChange={inputHandler} value={batch.btime}></input>
        </div>
        <div className='form-group'>
          <label className='form-label'>Enter Batch Type</label>
          <input type='text' name='btype' className='form-control' onChange={inputHandler} value={batch.btype}></input>
        </div>
        <div className='form-group'>
          <label className='form-label'>Enter Batch Availability</label>
          <input type='text' name='bavailable' className='form-control' onChange={inputHandler} value={batch.bavailable}></input>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
        </div>
    )
}

export default EditTable4