import "./searchpageoneproduct.css";

import SearchOPcontent from "./SearchOPcontent";
import SearchPageNav from "./SearchPageNav";

export default function SearchPageOneProduct({
  setCartItems,
  cartItems,
  updatedData,
  setWishlistItem,
  wishlistItem,
  setShowSpecificProduct,
  showSpecificProduct,
}) {
  return (
    <section className="pOneProduct">
      {showSpecificProduct.map((displayItem) => {
        return (
          <div key={displayItem.id}>
            <SearchPageNav displayItem={displayItem} />
            <SearchOPcontent
              displayItem={displayItem}
              key={displayItem.id}
              setCartItems={setCartItems}
              cartItems={cartItems}
              updatedData={updatedData}
              setWishlistItem={setWishlistItem}
              wishlistItem={wishlistItem}
              setShowSpecificProduct={setShowSpecificProduct}
              showSpecificProduct={showSpecificProduct}
            />
          </div>
        );
      })}
    </section>
  );
}
