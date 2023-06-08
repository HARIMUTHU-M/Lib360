import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

import { PrimaryNav,MenuLink,Menu,Hamburger } from './NavElements';
import Body from './Body'

export default function Navbar(){
  return(
    
    <nav>
    
    <Hamburger/>
      <img src= {require('./logo-png.png')} alt='KYS' className = "Nav-logo"></img>
      <Menu>
        <MenuLink to="/books" activeStyle>Books</MenuLink>
        <MenuLink to="/authors" activeStyle>Author</MenuLink>
        <MenuLink to="/about" activeStyle>About</MenuLink>
        <MenuLink to="login" activeStyle>Login</MenuLink>
      </Menu>

     
    </nav>

  )
}