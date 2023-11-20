import React from 'react'
import './External.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const HomePage = () => {
    return (
       
            <div id="main">
        <div id="box1">

        </div>

        <div id="box2">
            <div id="text">
                Best Training and Placement Institute to achieve your Dream
            </div>
        </div>

        <div id="box3">
            <div id="container">
                <div id="logo">
                    <h1 style={{color:'black'}}>VISION</h1>
                </div>
                <div id="menu">
                    <ul>
                        <li><Link to={`/login`} style={{color:'#1e242a'}}>LOGIN</Link></li>
                        <li><Link to={`/register`} style={{color:'#1e242a'}}>REGISTER</Link></li>
                        <li><Link to={`/about`} style={{color:'#1e242a'}}>ABOUT</Link></li>
                        
                    </ul>
                </div>
            </div>
        </div>

        
        
    </div>
    
    )
}

export default HomePage