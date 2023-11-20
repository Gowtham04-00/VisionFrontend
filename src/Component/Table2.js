import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteRoundedIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const Table2 = () => {

    const[branch,setBranch]=useState([])
    
    useEffect(()=>{
        fetchData()

    },[])

    const fetchData =()=>{
        axios.get("http://localhost:8888/branch").then((res)=>{
            setBranch(res.data);
        }).catch((err)=>{})
        
    }

    const deleteProduct=(id)=>{
        if(window.confirm(`Do you want to DELETE BRANCH with id : ${id}`)){
        axios.delete(`http://localhost:8888/branch/${id}`).then(()=>{
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
                        <th>Branch Name</th>
                        <th> Branch Address</th>
                        <th>Branch Contact</th>
                        <th>Action&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to={`/addtable2`} className='btn btn-success' >Add</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                       branch.map((val,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.bname}</td>
                            <td>{val.baddress}</td>
                            <td>{val.bcontact}</td>
                            <td>
                                
                               <Link to={`/edittable2/${val.id}`} className='btn btn-primary'><EditIcon></EditIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;



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

export default Table2