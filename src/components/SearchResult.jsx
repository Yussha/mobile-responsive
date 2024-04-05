import "./searchresult.css";

import { useState } from "react";

import { Link } from "react-router-dom";
export default function SearchResult({ output, handleClickSpecificProduct }) {
  return (
    <Link to="searchPage">
      <div
        className="searchResult"
        onClick={() => handleClickSpecificProduct(output)}
      >
        <div className="searchResultImage">
          <img src={output.image} alt="" />
        </div>
        <span className="searchResultName">{output.name}</span>
      </div>
    </Link>
  );
}
