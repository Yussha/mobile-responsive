import { Link } from "react-router-dom";

import "./wishlistpagenav.css";

export default function WishlistPageNav() {
  return (
    <nav className="wishlistPageNav">
      <Link to="/" className="wishlistPageNav-link">
        Home
      </Link>
      <span>/</span>
      <span>Wishlist</span>
    </nav>
  );
}
