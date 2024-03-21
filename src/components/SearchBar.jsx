import "./searchbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { useState } from "react";

import SearchResult from "./SearchResult";
export default function SearchBar({
  setShowSearchBar,
  showSearchBar,
  setSearchOutput,
  searchOutput,
  updatedData,
  setSearchDisplayItem,
  searchQuery,
  setSearchQuery,
  setShowSpecificProduct,
  showSpecificProduct,
  setIsClickedIndiItem,
}) {
  // TODO: CREATE A SEARCH FUNCTIONALITY
  const [isSearchFind, setIsSearchFind] = useState(false);

  const handleSearch = (e) => {
    const searchItem = e.target.value.toLowerCase();
    setSearchQuery(searchItem);

    if (searchItem === "") {
      setIsSearchFind(false);
      setSearchOutput([]);
    } else {
      const searchOutput = updatedData.filter((product) => {
        return product.name.toLowerCase().includes(searchItem);
      });
      setIsSearchFind(true);
      setSearchOutput(searchOutput);
    }
  };

  function handleClickSpecificProduct(output) {
    setShowSpecificProduct([output]);
    setShowSearchBar(!showSearchBar);
    setIsSearchFind(false);
    setIsClickedIndiItem(true);
  }

  const handleExitSearchBar = () => {
    setShowSearchBar(!showSearchBar);
    setIsSearchFind(false);
  };

  const handleSeeResult = () => {
    setShowSearchBar(!showSearchBar);
    setSearchDisplayItem(searchOutput);
    setIsSearchFind(false);
    setIsClickedIndiItem(false);
  };

  return (
    <div className={showSearchBar ? "searchBar active" : "searchBar"}>
      <div className="searBarContent">
        <div className="xMarkContainer">
          <FontAwesomeIcon
            icon={faXmark}
            className="searchBarXicon"
            onClick={handleExitSearchBar}
          />
        </div>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search product here..."
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
          />
          <span>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="searchBarIcon"
            />
          </span>

          {isSearchFind && (
            <div
              className={
                showSearchBar ? "searchResultCard active" : "searchResultCard"
              }
            >
              <span className="searchForSpan">Search for "{searchQuery}"</span>
              {searchOutput.map((output) => {
                return (
                  <SearchResult
                    output={output}
                    key={output.id}
                    setShowSpecificProduct={setShowSpecificProduct}
                    setShowSearchBar={setShowSearchBar}
                    showSearchBar={showSearchBar}
                    setIsSearchFind={setIsSearchFind}
                    setSearchDisplayItem={setSearchDisplayItem}
                    showSpecificProduct={showSpecificProduct}
                    handleClickSpecificProduct={handleClickSpecificProduct}
                  />
                );
              })}
              <Link to="searchPage" onClick={handleSeeResult}>
                <span className="searcResultCount">
                  See all result ({searchOutput.length})
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
