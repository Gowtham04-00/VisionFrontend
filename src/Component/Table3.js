import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteRoundedIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const Table3 = () => {

    const[trainer,setTrainer]=useState([])
    
    useEffect(()=>{
        fetchData()

    },[])

    const fetchData =()=>{
        axios.get("http://localhost:8888/trainer").then((res)=>{
            setTrainer(res.data);
        }).catch((err)=>{})
        
    }

    const deleteProduct=(id)=>{
        if(window.confirm(`Do you want to DELETE Trainer with id : ${id}`)){
        axios.delete(`http://localhost:8888/trainer/${id}`).then(()=>{
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
                        <th>Trainer Name</th>
                        <th>Subject</th>
                        <th>Experince</th>
                        <th>Action&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to={`/addtable3`} className='btn btn-success' >Add</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                       trainer.map((val,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.tname}</td>
                            <td>{val.tsubject}</td>
                            <td>{val.texperience}</td>
                            <td>
                                
                               <Link to={`/edittable3/${val.id}`} className='btn btn-primary'><EditIcon></EditIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;



                                <button className='btn btn-danger' style={{width:'60px'}} onClick={()=>deleteProduct(val.id)}><DeleteRoundedIcon></DeleteRoundedIcon></button>
                            </td>
                        </tr>
                       })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table3