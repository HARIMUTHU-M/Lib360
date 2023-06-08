import React from 'react';

export default function Navbar(){
  return(
    <nav>
      <img src= {require('./logo-png.png')} alt='KYS' className = "Nav-logo"></img>
    </nav>
  )
}