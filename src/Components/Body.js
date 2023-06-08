import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Body() {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="Search for the books"
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
