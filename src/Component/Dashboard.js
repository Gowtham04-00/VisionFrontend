import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import './Project.css'
import Table1 from './Table1'
import Main from './Main'
import Footer from './Footer'

const Dashboard = () => {
    return (
        <div className='app-container'>
            <Header></Header>
            <div className='content-container'>    
            <div className='sidebar-container'>    
    
            <Sidebar/></div>
            <div className='body-container' >
                <Main></Main>
            </div>           
            
            
            </div> 
            <Footer></Footer>  
        </div>
    )
}

export default Dashboard
