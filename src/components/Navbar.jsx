import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function Navbar({
  showSideCart,
  setShowSideCart,
  countItemCart,
  setShowSearchBar,
  showSearchBar,
  setShowNavLink,
  showNavLink,
}) {
  function hideResponsiveNavLink() {
    setShowNavLink(!showNavLink);
  }
  return (
    <nav className="nav">
      <div className="logo-container">
        <img
          className="logo"
          src="https://electrolyte9-store.myshopify.com/cdn/shop/files/logo-1-0.png?v=1671516144"
          alt=""
        />
      </div>
      <div className="navLink">
        <div className="navlink-container">
          <ul className={showNavLink ? "active" : ""}>
            <div className="xMarkContainerNav">
              <FontAwesomeIcon
                className="xMarkNav"
                icon={faXmark}
                onClick={() => setShowNavLink(false)}
              />
            </div>

            <li>
              <Link
                to="/"
                className="navLink-btn"
                onClick={hideResponsiveNavLink}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="shopPage"
                className="navLink-btn"
                onClick={hideResponsiveNavLink}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="contactpage"
                className="navLink-btn"
                onClick={hideResponsiveNavLink}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navIcon-container">
          <FontAwesomeIcon
            className="menuIconNav"
            icon={faBars}
            onClick={() => setShowNavLink(true)}
          />
          <FontAwesomeIcon
            className="seachIcon"
            icon={faMagnifyingGlass}
            onClick={() => setShowSearchBar(!showSearchBar)}
          />

          <div
            className="shopBag"
            onClick={() => {
              setShowSideCart(!showSideCart);
            }}
          >
            <FontAwesomeIcon className="shopIcon" icon={faBagShopping} />
            <p className="countItems">({countItemCart})</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
