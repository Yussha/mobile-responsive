import { Link } from "react-router-dom";

import "./shoppagenav.css";
export default function ShopPageNav() {
  return (
    <nav className="shopPageNav">
      <Link to="/" className="shopPageNav-link">
        Home
      </Link>
      <span>/</span>
      <span>Products</span>
    </nav>
  );
}
