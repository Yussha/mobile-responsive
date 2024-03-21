import "./shoppage.css";

import ShopPageNav from "./ShopPageNav";
import ShopPageFilter from "./ShopPageFilter";
import ShopPageContent from "./ShopPageContent";

import { useState, useEffect } from "react";

export default function ShopPage({
  updatedData,
  setCartItems,
  cartItems,
  setModal,
  setShowModal,
  setWishlistItem,
  wishlistItem,
}) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({
    isNew: false,
    isBest: false,
    selectedCategories: [],
  });

  useEffect(() => {
    handleCheckIfFiltered();

    const filteredData = updatedData.filter((product) => {
      if (filterCriteria.isNew && filterCriteria.isBest) {
        return product.newProduct || product.bestProduct;
      } else {
        const isNew = !filterCriteria.isNew || product.newProduct;
        const isBest = !filterCriteria.isBest || product.bestProduct;
        const isInSelectedCategories =
          filterCriteria.selectedCategories.length === 0 ||
          filterCriteria.selectedCategories.includes(product.category);
        return isNew && isBest && isInSelectedCategories;
      }
    });
    setFilteredProducts(filteredData);
  }, [filterCriteria]);

  function handleCheckIfFiltered() {
    if (
      filterCriteria.isNew === false &&
      filterCriteria.isBest === false &&
      filterCriteria.selectedCategories.length === 0
    ) {
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }
  }

  function handleNewProduct(event) {
    setFilterCriteria({ ...filterCriteria, isNew: event.target.checked });
  }

  function handleBestProduct(event) {
    setFilterCriteria({ ...filterCriteria, isBest: event.target.checked });
  }

  function handleSelectCategory(category) {
    const updatedCategories = filterCriteria.selectedCategories.includes(
      category
    )
      ? filterCriteria.selectedCategories.filter((categ) => categ !== category)
      : [...filterCriteria.selectedCategories, category];
    setFilterCriteria({
      ...filterCriteria,
      selectedCategories: updatedCategories,
    });
  }

  function handleResetAll() {
    const checkboxes = document.querySelectorAll("#myCheckbox");
    console.log(checkboxes);

    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    setFilterCriteria({
      isNew: false,
      isBest: false,
      selectedCategories: [],
    });
  }

  function handleResetCategory() {
    const checkboxCateg = document.querySelectorAll(".checkboxCateg");

    checkboxCateg.forEach((checkbox) => {
      checkbox.checked = false;
    });

    setFilterCriteria({
      ...filterCriteria,
      selectedCategories: [],
    });
  }

  function handleResetNewAndBest() {
    const newAndBestCheckBox = document.querySelectorAll(".newAndBestCheckBox");

    newAndBestCheckBox.forEach((checkbox) => {
      checkbox.checked = false;
    });

    setFilterCriteria({
      ...filterCriteria,
      isNew: false,
      isBest: false,
    });
  }

  return (
    <section className="shopPage">
      <ShopPageNav />
      <div className="shopPageItem">
        <ShopPageFilter
          updatedData={updatedData}
          handleNewProduct={handleNewProduct}
          handleBestProduct={handleBestProduct}
          handleSelectCategory={handleSelectCategory}
          filteredProducts={filteredProducts}
          isFiltered={isFiltered}
          handleResetAll={handleResetAll}
          filterCriteria={filterCriteria}
          handleResetCategory={handleResetCategory}
          handleResetNewAndBest={handleResetNewAndBest}
        />
        <ShopPageContent
          updatedData={updatedData}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
          setCartItems={setCartItems}
          cartItems={cartItems}
          setModal={setModal}
          setShowModal={setShowModal}
          setWishlistItem={setWishlistItem}
          wishlistItem={wishlistItem}
        />
      </div>
    </section>
  );
}
