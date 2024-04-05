import "./shoppageitems.css";

import ShopItemLayoutOne from "./ShopItemLayoutOne";
import ShopPageLayoutTwo from "./ShopPageLayoutTwo";

export default function ShopPageItems({
  updatedData,
  filteredProducts,
  layout,
  setCartItems,
  cartItems,
  setModal,
  setShowModal,
  setWishlistItem,
  wishlistItem,
}) {
  return (
    <div>
      {layout === "defaultLayout" && (
        <ShopItemLayoutOne
          updatedData={updatedData}
          filteredProducts={filteredProducts}
          setCartItems={setCartItems}
          cartItems={cartItems}
          setModal={setModal}
          setShowModal={setShowModal}
          setWishlistItem={setWishlistItem}
          wishlistItem={wishlistItem}
        />
      )}

      {layout === "customLayout" && (
        <ShopPageLayoutTwo
          filteredProducts={filteredProducts}
          setCartItems={setCartItems}
          cartItems={cartItems}
          updatedData={updatedData}
          setModal={setModal}
          setShowModal={setShowModal}
          setWishlistItem={setWishlistItem}
          wishlistItem={wishlistItem}
        />
      )}
    </div>
  );
}
