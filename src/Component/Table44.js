import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteRoundedIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const Table44 = () => {
    const[batch,setBatch]=useState([])
    
    useEffect(()=>{
        fetchData()

    },[])

    const fetchData =()=>{
        axios.get("http://localhost:8888/batch").then((res)=>{
            setBatch(res.data);
        }).catch((err)=>{})
        
    }

    const deleteProduct=(id)=>{
        if(window.confirm(`Do you want to DELETE Batch with id : ${id}`)){
        axios.delete(`http://localhost:8888/batch/${id}`).then(()=>{
            window.alert("Batch Deleted Successfully");
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
                        <th>Batch Name</th>
                        <th>Batch Time</th>
                        <th>Batch Type</th>
                        <th>Available</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                       batch.map((val,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.bname}</td>
                            <td>{val.btime}</td>
                            <td>{val.btype}</td>
                            <td>{val.bavailable}</td>
                            
                        </tr>
                       })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table44