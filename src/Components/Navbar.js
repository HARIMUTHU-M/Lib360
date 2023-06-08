import React from 'react';
import { MenuLink,Menu,Hamburger } from './NavElements';
export default function Navbar(){
  return( 
    <nav>
    <Hamburger/>
      <img src= {require('./logo-png.png')} alt='KYS' className = "Nav-logo"></img>
      <Menu>
        <MenuLink to="/books" activeStyle>Books</MenuLink>
        
        <MenuLink to="login" activeStyle>Login</MenuLink>
      </Menu>
    </nav>
  )
}