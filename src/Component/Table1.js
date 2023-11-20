import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteRoundedIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


 const Table1 = () => {
    const[product,setProduct]=useState([])
    
    useEffect(()=>{
        fetchData()

    },[])

    const fetchData =()=>{
        axios.get("http://localhost:8888/product").then((res)=>{
            setProduct(res.data);
        }).catch((err)=>{})
        
    }

    const deleteProduct=(id)=>{
        if(window.confirm(`Do you want to DELETE COURSE with id : ${id}`)){
        axios.delete(`http://localhost:8888/product/${id}`).then(()=>{
            window.alert("Course Deleted Successfully");
            fetchData();
        }).catch((err)=>{})
        }
    }

    



    return (
        <div>
            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>Course Name</th>
                        <th>Course Price</th>
                        <th>Course Duration</th>
                        <th>Action&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to={`/addtable1`} className='btn btn-success' >Add</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                       product.map((val,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.cname}</td>
                            <td>{val.cprice}</td>
                            <td>{val.cduration}</td>
                            <td>
                                
                               <Link to={`/edittable1/${val.id}`} className='btn btn-primary'><EditIcon></EditIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;



                                <button  className='btn btn-danger ' style={{width:'60px'}} onClick={()=>deleteProduct(val.id)}><DeleteRoundedIcon></DeleteRoundedIcon></button>
                            </td>
                        </tr>
                       })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table1