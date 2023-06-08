import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import axios from "axios";
import Books from "./Components/Books";
import Pagination from "./Components/Pagination";

function App() {
  const [bookData, setBooksData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const postsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=javascript+inauthor:keyes&key=AIzaSyBRKwgGQMZtu7pV0K6YoZNwJ7HAHbEf_Lg&maxResults=40"
        );
        setBooksData(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndes = lastPostIndex - postsPerPage;
  const currentPosts = bookData.slice(firstPostIndes, lastPostIndex);

  const handleSearchSubmit = () => {
    console.log("Search submitted:", searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Body
        searchTerm={searchTerm}
        onSearchSubmit={handleSearchSubmit}
        onInputChange={handleInputChange}
      />
      <Books bookData={currentPosts} />
      <Pagination
        totalPosts={bookData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setcurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
