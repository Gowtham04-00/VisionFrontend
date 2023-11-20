import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const EditTable1 = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    cname: "",
    cprice: "",
    cduration: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:8888/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const inputHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const updateProduct = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:8888/product/${id}`, product)
      .then(() => {
        window.alert("Course Updated successfully");
        nav("/Table1");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div style={{ alignContent: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Course Details</h1>
      <form style={{ textAlign: 'center', alignItems: 'center' }} onSubmit={updateProduct}>
        <div className='form-group'>
          <label className='form-label'>Enter Course Name</label>
          <input type='text' name='cname' className='form-control' onChange={inputHandler} value={product.cname}></input>
        </div>
        <div className='form-group'>
          <label className='form-label'>Enter Course Price</label>
          <input type='text' name='cprice' className='form-control' onChange={inputHandler} value={product.cprice}></input>
        </div>
        <div className='form-group'>
          <label className='form-label'>Enter Course Duration</label>
          <input type='text' name='cduration' className='form-control' onChange={inputHandler} value={product.cduration}></input>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default EditTable1;