import WishlistPageNav from "./WishlistPageNav";
import WishlistContent from "./WishlistContent";

import "./wishlistpage.css";

export default function WishlistPage({
  wishlistItem,
  setWishlistItem,
  cartItems,
  updatedData,
  setCartItems,
}) {
  return (
    <section className="wishlistpage">
      <WishlistPageNav />
      <WishlistContent
        wishlistItem={wishlistItem}
        setWishlistItem={setWishlistItem}
        setCartItems={setCartItems}
        cartItems={cartItems}
        updatedData={updatedData}
      />
    </section>
  );
}
