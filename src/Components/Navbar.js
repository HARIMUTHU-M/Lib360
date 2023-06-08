import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar(){
  return(
    <nav>
      <img src= {require('./logo.png')} alt='KYS' className = "Nav-logo"></img>
    </nav>
  )
}