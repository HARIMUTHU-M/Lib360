import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Material from './pages/books';
import Login from './pages/Login'
function App () {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Material /> } />
          <Route path='/books' element={ <Material /> } />
          <Route path="/login" element={ <Login /> }/>
          <Route path="/books/login" element={ <Login /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
