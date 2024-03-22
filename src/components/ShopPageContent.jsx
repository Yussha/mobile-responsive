import "./shoppagecontent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCells,
  faList,
  faChevronDown,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

import shopPageBanner from "./image/big-image-5.jpg";

import ShopPageItems from "./ShopPageItems";

import { useState } from "react";
export default function ShopPageContent({
  updatedData,
  filteredProducts,
  setFilteredProducts,
  setCartItems,
  cartItems,
  setModal,
  setShowModal,
  setWishlistItem,
  wishlistItem,
  setShowFilter,
  showFilter,
}) {
  const [layout, setLayout] = useState("defaultLayout");
  const sortContent = [
    {
      id: 1,
      sort: "Alphabetically, A-Z",
    },

    {
      id: 2,
      sort: "Alphabetically, Z-A",
    },

    {
      id: 3,
      sort: "Price, low to high",
    },

    {
      id: 4,
      sort: "Price, high to low",
    },
  ];

  function handleSorting(sortingAlgo) {
    let sortedProducts = [...filteredProducts];

    if (sortingAlgo === "Alphabetically, A-Z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortingAlgo === "Alphabetically, Z-A") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortingAlgo === "Price, low to high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortingAlgo === "Price, high to low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts;
    }
    setFilteredProducts(sortedProducts);
  }

  return (
    <section className="shopPageContent">
      <div className="shopContentHeader">
        <h2>Products</h2>
        <span>({updatedData.length})</span>
      </div>
      <img className="shopPageBanner" src={shopPageBanner} alt="" />

      <div className="sortingContiner">
        <div className="sortingLayout">
          <div className="filterIconContainer">
            <div onClick={() => setShowFilter(true)}>
              <FontAwesomeIcon icon={faFilter} />
              <span>Filter</span>
            </div>
          </div>
          <FontAwesomeIcon
            className="sortingIcon"
            style={
              layout === "defaultLayout"
                ? { color: "#333333" }
                : { color: "#6f6f6f" }
            }
            icon={faTableCells}
            onClick={() => setLayout("defaultLayout")}
          />
          <FontAwesomeIcon
            className="sortingIcon"
            style={
              layout === "customLayout"
                ? { color: "#333333" }
                : { color: "#6f6f6f" }
            }
            icon={faList}
            onClick={() => setLayout("customLayout")}
          />
        </div>

        <div className="dropdownSort">
          <div className="dropDownSortShow">
            <label>Sort by:</label>
            <div className="dropSortbtn">
              <div className="displaySortType">Alphabetically, A-Z</div>
              <FontAwesomeIcon
                className="dropdownSortIcon"
                icon={faChevronDown}
              />
            </div>
          </div>

          <div id="myDropdown" className="dropdownSort-content">
            {sortContent.map((sortContent) => {
              return (
                <span
                  key={sortContent.id}
                  onClick={() => handleSorting(sortContent.sort)}
                >
                  {sortContent.sort}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <ShopPageItems
        updatedData={updatedData}
        filteredProducts={filteredProducts}
        layout={layout}
        setCartItems={setCartItems}
        cartItems={cartItems}
        setModal={setModal}
        setShowModal={setShowModal}
        setWishlistItem={setWishlistItem}
        wishlistItem={wishlistItem}
      />
    </section>
  );
}
