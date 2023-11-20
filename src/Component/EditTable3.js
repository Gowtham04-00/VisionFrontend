import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const EditTable3 = () => {
    const { id } = useParams();
  const nav = useNavigate();
  const [trainer, setTrainer] = useState({
    id: "",
    tname: "",
    tsubject: "",
    texperience: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:8888/trainer/${id}`)
      .then((res) => {
        console.log(res.data);
        setTrainer(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const inputHandler = (event) => {
    setTrainer({ ...trainer, [event.target.name]: event.target.value });
  };

  const updateProduct = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:8888/trainer/${id}`, trainer)
      .then(() => {
        window.alert("Course Updated successfully");
        nav("/Table3");
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
          <input type='text' name='tname' className='form-control' onChange={inputHandler} value={trainer.tname}></input>
        </div>
        <div className='form-group'>
          <label className='form-label'>Enter Course Price</label>
          <input type='text' name='tsubject' className='form-control' onChange={inputHandler} value={trainer.tsubject}></input>
        </div>
        <div className='form-group'>
          <label className='form-label'>Enter Course Duration</label>
          <input type='text' name='texperience' className='form-control' onChange={inputHandler} value={trainer.texperience}></input>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>


        </div>
    )
}

export default EditTable3