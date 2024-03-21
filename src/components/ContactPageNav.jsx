import { Link } from "react-router-dom";

export default function ContactPageNav() {
  return (
    <nav className="cartPageNav">
      <Link to="/" className="cartPageNav-link">
        Home
      </Link>
      <span>/</span>
      <span>Contact us</span>
    </nav>
  );
}
