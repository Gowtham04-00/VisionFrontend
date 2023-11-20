import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditTable1 from './EditTable1'
import Table1 from './Table1'
import AddTable1 from './AddTable1'
import Table2 from './Table2'
import EditTable2 from './EditTable2'
import AddTable2 from './AddTable2'
import Table3 from './Table3'
import EditTable3 from './EditTable3'
import AddTable3 from './AddTable3'
import Table4 from './Table4'
import EditTable4 from './EditTable4'
import AddTable4 from './AddTable4'

import HomePage from './HomePage'
import LoginSignup from './LoginSignup'
import Registration from './Registration'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard'
import Table11 from './Table11'
import Table22 from './Table22'
import Table33 from './Table33'
import Table44 from './Table44'
import Dashboard1 from './Dashboard1'
import ContactUs from './ContactUs'
import About from './About'
import Footer from './Footer'

 class MyRoutingCompo extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                
                  
                <Routes>
                    <Route path='/' element={<HomePage></HomePage>} />
                    <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>
                    <Route path='/Table1' element={<Table1></Table1>}></Route>
                <Route path='/addtable1' element={<AddTable1></AddTable1>}></Route>
                <Route path="/edittable1/:id" element={<EditTable1></EditTable1>}></ Route>
                <Route path='/register' element={<Registration></Registration>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/contact' element={<ContactUs></ContactUs>}></Route>

                <Route path='/header' element={<Header></Header>}></Route> 
                <Route path='/sidebar' element={<Sidebar></Sidebar>}></Route>
                <Route path={`/table2`} element={<Table2></Table2>}></Route>

                <Route path="/edittable2/:id" element={<EditTable2></EditTable2>}></Route>
                <Route path="/addtable2" element={<AddTable2></AddTable2>}></Route> 
                <Route path="/table3" element={<Table3></Table3>}></Route>
                <Route path="/edittable3/:id" element={<EditTable3></EditTable3>}></Route>
                <Route path="/addtable3" element={<AddTable3></AddTable3>}></Route> 

                <Route path="/table4" element={<Table4></Table4>}></Route>
                <Route path="/edittable4/:id" element={<EditTable4></EditTable4>}></Route>
                <Route path="/addtable4" element={<AddTable4></AddTable4>}></Route>
                <Route path='/dashboard1' element={<Dashboard1></Dashboard1>}  ></Route>
                <Route path='/table11' element={<Table11></Table11>}></Route>
                <Route path='/table22' element={<Table22></Table22>}></Route>
                <Route path='/table33' element={<Table33></Table33>}></Route>
                <Route path='/table44' element={<Table44></Table44>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/footer' element={<Footer></Footer>}></Route>
                 </Routes>
                
               
            </div>
            
            </BrowserRouter>
        )
    }
}

export default MyRoutingCompo