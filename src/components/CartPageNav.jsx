import { Link } from "react-router-dom";

import "./cartpagenav.css";
export default function CartPageNav() {
  return (
    <nav className="cartPageNav">
      <Link to="/" className="cartPageNav-link">
        Home
      </Link>
      <span>/</span>
      <span>Your Shopping Cart</span>
    </nav>
  );
}
