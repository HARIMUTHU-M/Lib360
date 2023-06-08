import React from "react"
//import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Books from './pages/books';
import Authors from './pages/authors';
import About from './pages/about';
import Login from './pages/Login';
//import { Component } from 'react';
function App() {
  return (
    
  
      <Router>
       
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/authors" element ={<Authors/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path ="/login" element={<Login/>}/>
      </Routes>
     
      </Router>
     
    
     
   
  );
}

export default App;
