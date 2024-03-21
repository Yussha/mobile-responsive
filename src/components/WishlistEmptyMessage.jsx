import { Link } from "react-router-dom";

import "./wishlistemptymessage.css";
export default function WishlistEmptyMessage() {
  return (
    <section className="emptyWishlist">
      <span className="emptyWishlistTitle">Wishlist</span>
      <span className="emptyWishlistTitle">empty</span>
      <p className="emptyWishlistPara">
        Sorry your wishlist has currently no more products, click on 'here'
        given below for continue browsing.
      </p>
      <div className="emptyWishlistLink">
        Continue browsing <Link className="emptyWishlistBtn">here</Link>
      </div>
    </section>
  );
}
