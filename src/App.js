import React from "react";
import Navbar from "./Components/Navbar";
//import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Material from './pages/books';
import Authors from './pages/authors';
import About from './pages/about';
import Login from './pages/Login';
//import Books from "./Components/Books";
//import Pagination from "./Components/Pagination";


function App () {
  /*
  const [bookData, setBooksData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const postsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "+inauthor:keyes&key=AIzaSyBRKwgGQMZtu7pV0K6YoZNwJ7HAHbEf_Lg&maxResults=40"
      );
      setBooksData(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndes = lastPostIndex - postsPerPage;
  const currentPosts = bookData.slice(firstPostIndes, lastPostIndex);

  const handleSearchSubmit = () => {
    console.log("Search submitted:", searchTerm);
    fetchData();
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };*/

  return (

    <div>
      <Router>

        <Routes>
          <Route path="/" element={ <Material /> } />
          <Route path='/books' element={ <Material /> } />

          <Route path="/login" element={ <Login /> }

          />


        </Routes>

      </Router>
      {/* <Body searchTerm={ searchTerm }
        onSearchSubmit={ handleSearchSubmit }
        onInputChange={ handleInputChange } /> 

      <Books bookData={ currentPosts } />
      <Pagination
        totalPosts={ bookData.length }
        postsPerPage={ postsPerPage }
        setCurrentPage={ setcurrentPage }
        currentPage={ currentPage }/>*/}

    </div>

  );
}

export default App;
