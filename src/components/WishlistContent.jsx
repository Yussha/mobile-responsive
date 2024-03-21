import MyWishlist from "./MyWishlist";
import WishlistEmptyMessage from "./WishlistEmptyMessage";

import { Link } from "react-router-dom";
export default function WishlistContent({
  wishlistItem,
  setWishlistItem,
  cartItems,
  updatedData,
  setCartItems,
}) {
  return (
    <section>
      {wishlistItem.length > 0 ? (
        <MyWishlist
          wishlistItem={wishlistItem}
          setWishlistItem={setWishlistItem}
          setCartItems={setCartItems}
          cartItems={cartItems}
          updatedData={updatedData}
        />
      ) : (
        <WishlistEmptyMessage />
      )}
    </section>
  );
}
