import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import logo from '../shared/Images/logo.jpg'


const Header = () => {




  return (
    <header className='header'>
      <div className='menu-icon '>
          <img src={logo} style={{width:'50px', height:'50px', borderRadius:'50%'}}></img></div>
          <div className='menu-left' style={{ marginLeft:'-870px'}}>
          <h5 style={{color:'white'}}>Vision Institute</h5></div>
      
      <div className='header-left'>
       
        <Link className='but btn' style={{color:"white"}}>Home</Link>{" "}
        <Link to={`/about`}  className='but btn' style={{color:"white"}}>About</Link>{" "}
        <Link to={`/contact`}  className='but btn' style={{color:"white"}}>Contact</Link>{" "}
        
        <Link to={`/`}  className='but btn' style={{color:"white"}}>Logout</Link>
      </div>
      
    </header>
  );
};

export default Header;