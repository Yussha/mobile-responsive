import { Link } from "react-router-dom";
import "./searchpagenav.css";
export default function SearchPageNav({ displayItem }) {
  return (
    <nav className="searchPageNav">
      <Link to="/" className="searchPageNav-link">
        Home
      </Link>
      <span>/</span>
      <span>
        {displayItem.name.charAt(0).toUpperCase() +
          displayItem.name.slice(1).toLowerCase()}
      </span>
    </nav>
  );
}
