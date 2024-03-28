import { Link } from "react-router-dom";

import "./contactpagenav.css";

export default function ContactPageNav() {
  return (
    <nav className="contactPageNav">
      <Link to="/" className="contactPageNav-link">
        Home
      </Link>
      <span>/</span>
      <span>Contact us</span>
    </nav>
  );
}
