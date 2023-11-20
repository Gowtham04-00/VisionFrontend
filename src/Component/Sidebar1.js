import React from 'react'

import { Link } from 'react-router-dom'

const Sidebar1 = () => {
  return (
    <aside id="sidebar"  >
      <div>
      
      <ul  className='sidebar-list'>
        
      <li className='sidebar-list-item'>
                  <Link to={`/table11`} className='btn w-100 m-0'>Course</Link>
        </li>
        <li className='sidebar-list-item'>
                  
                  <Link to={`/table22`}  className='btn w-100 m-0'>Branch</Link>
        </li>
        <li className='sidebar-list-item'>
                  
                  <Link to={`/table33`}  className='btn w-100 m-0'>Trainer</Link>
        </li>
        <li className='sidebar-list-item'>
                  
                  <Link to={`/table44`}  className='btn w-100 m-0'>Batch</Link>
        </li>



      </ul>
      </div>
    </aside>
    
   
  )
}

export default Sidebar1