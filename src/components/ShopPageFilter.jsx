import "./shoppagefilter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ShopPageFilter({
  updatedData,
  handleNewProduct,
  handleBestProduct,
  handleSelectCategory,
  filteredProducts,
  isFiltered,
  handleResetAll,
  handleResetCategory,
  handleResetNewAndBest,
  setShowFilter,
  showFilter,
}) {
  // Remove the duplicate category
  const uniqueCategory = updatedData.filter((value, index, array) => {
    const categoryStrings = array.map((item) => item.category);
    return categoryStrings.indexOf(value.category) === index;
  });

  // It totals the same name of category
  let categoryCount = updatedData.reduce((acc, item) => {
    if (acc[item.category]) {
      acc[item.category]++;
    } else {
      acc[item.category] = 1;
    }
    return acc;
  }, {});

  // convert the categoryCount into array of an array and map on that and asign the key value pair on the category and count
  const categoryCountsArray = Object.entries(categoryCount).map(
    ([category, count]) => ({ category, count })
  );

  const countNewProduct = updatedData.reduce((acc, item) => {
    const total = item.newProduct + acc;
    return total;
  }, 0);

  const countBestProduct = updatedData.reduce((acc, item) => {
    const total = item.bestProduct + acc;
    return total;
  }, 0);

  return (
    <section
      className="shopPageFilter"
      style={showFilter ? { left: "0px" } : { left: "-330px" }}
    >
      <div className="shopPageFilterItem">
        <div className="shopFilterHeader">
          <h2>Filter</h2>
          <button className="hideFilterReset" onClick={handleResetAll}>
            Reset
          </button>
          <FontAwesomeIcon
            icon={faXmark}
            className="filterXmark"
            onClick={() => setShowFilter(false)}
          />
        </div>

        {isFiltered ? (
          <span>
            {updatedData.length} of {filteredProducts.length} Products
          </span>
        ) : (
          <span>{updatedData.length} Products</span>
        )}

        <hr className="shopPageLine" />
      </div>

      <div className="shopPageFilterItem">
        <div className="shopFilterHeader">
          <h2>Category</h2>
          <button onClick={handleResetCategory}>Reset</button>
        </div>

        {uniqueCategory.map((product) => {
          return (
            <div key={product.id} className="shoPageFilterInputs">
              <div>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  className="checkboxCateg"
                  onChange={() => handleSelectCategory(product.category)}
                />
                <span className="pageFilterCategory">{product.category}</span>
              </div>

              {categoryCountsArray.map((categCount) => {
                if (categCount.category === product.category) {
                  return (
                    <span className="categCount" key={categCount.category}>
                      ({categCount.count})
                    </span>
                  );
                }
              })}
            </div>
          );
        })}
        <hr className="shopPageLine" />
      </div>

      <div className="shopPageFilterItem">
        <div className="shopFilterHeader">
          <h2>Product</h2>
          <button onClick={handleResetNewAndBest}>Reset</button>
        </div>

        <div className="shoPageFilterInputs">
          <div>
            <input
              type="checkbox"
              id="myCheckbox"
              className="newAndBestCheckBox"
              onChange={(e) => handleNewProduct(e)}
            />
            <span className="pageFilterCategory">New Product</span>
          </div>

          <span>({countNewProduct})</span>
        </div>

        <div className="shoPageFilterInputs">
          <div>
            <input
              type="checkbox"
              id="myCheckbox"
              className="newAndBestCheckBox"
              onChange={(e) => handleBestProduct(e)}
            />
            <span className="pageFilterCategory">Best Product</span>
          </div>

          <span>({countBestProduct})</span>
        </div>
      </div>
    </section>
  );
}
