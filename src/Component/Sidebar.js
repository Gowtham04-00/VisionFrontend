import React from 'react'

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside id="sidebar"  >
      <div>
      
      <ul  className='sidebar-list'>
        
      <li className='sidebar-list-item'>
                  <Link to={`/Table1`} className='btn w-100 m-0'>Course</Link>
        </li>
        <li className='sidebar-list-item'>
                  
                  <Link to={`/table2`}  className='btn w-100 m-0'>Branch</Link>
        </li>
        <li className='sidebar-list-item'>
                  
                  <Link to={`/table3`}  className='btn w-100 m-0'>Trainer</Link>
        </li>
        <li className='sidebar-list-item'>
                  
                  <Link to={`/table4`}  className='btn w-100 m-0'>Batch</Link>
        </li>



      </ul>
      </div>
    </aside>
    
   
  )
}

export default Sidebar