import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Overlay from "./components/Overlay";
import CartPage from "./components/CartPage";
import NewsLetter from "./components/NewsLetter";
import FooterArea from "./components/FooterArea";
import SearchBar from "./components/SearchBar";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
import SearchPage from "./components/SearchPage";
import WishlistPage from "./components/WishlistPage";
import QuickView from "./components/QuickView";
import ShopPage from "./components/ShopPage";
import ContactPage from "./components/ContactPage";

import { Route, Routes } from "react-router-dom";

import { data } from "./components/data";

import "./App.css";
function App() {
  const updatedData = data.slice().map((data) => ({
    ...data,
    quantity: 0,
  }));
  // for responsive navbar
  const [showNavLink, setShowNavLink] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const [showSideCart, setShowSideCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItem, setWishlistItem] = useState([]);
  const [searchOutput, setSearchOutput] = useState([]);
  const [searchDisplayItem, setSearchDisplayItem] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSpecificProduct, setShowSpecificProduct] = useState([]);
  const [modal, setModal] = useState();

  const [isClickedIndiItem, setIsClickedIndiItem] = useState(false);

  const [countItemCart, setCountItem] = useState(0);

  const total = cartItems.reduce((accumulator, item) => {
    const subTotal = item.quantity * item.price;
    return accumulator + subTotal;
  }, 0);

  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCountItem(parseInt(totalQuantity, 10));
  }, [cartItems]);

  useEffect(() => {
    const body = document.body;
    showSideCart || showSearchBar || showModal
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "visible");
  }, [showSideCart, showSearchBar, showModal]);

  return (
    <>
      <main className="app">
        <SearchBar
          setShowSearchBar={setShowSearchBar}
          showSearchBar={showSearchBar}
          setSearchOutput={setSearchOutput}
          searchOutput={searchOutput}
          updatedData={updatedData}
          setSearchDisplayItem={setSearchDisplayItem}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setShowSpecificProduct={setShowSpecificProduct}
          showSpecificProduct={showSpecificProduct}
          setIsClickedIndiItem={setIsClickedIndiItem}
        />
        <Navbar
          setShowNavLink={setShowNavLink}
          showNavLink={showNavLink}
          showSideCart={showSideCart}
          setShowSideCart={setShowSideCart}
          cartItems={cartItems}
          countItemCart={countItemCart}
          setShowSearchBar={setShowSearchBar}
          showSearchBar={showSearchBar}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ScrollToTopOnNavigate>
                <Home
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  setCountItem={setCountItem}
                  updatedData={updatedData}
                  setWishlistItem={setWishlistItem}
                  wishlistItem={wishlistItem}
                  setModal={setModal}
                  setShowModal={setShowModal}
                />
              </ScrollToTopOnNavigate>
            }
          />
          <Route
            path="cart"
            element={
              <ScrollToTopOnNavigate>
                <CartPage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  updatedData={updatedData}
                  countItemCart={countItemCart}
                  total={total}
                />
              </ScrollToTopOnNavigate>
            }
          />

          <Route
            path="searchPage"
            element={
              <ScrollToTopOnNavigate>
                <SearchPage
                  searchDisplayItem={searchDisplayItem}
                  searchQuery={searchQuery}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                  updatedData={updatedData}
                  setSearchDisplayItem={setSearchDisplayItem}
                  setWishlistItem={setWishlistItem}
                  wishlistItem={wishlistItem}
                  setShowSpecificProduct={setShowSpecificProduct}
                  showSpecificProduct={showSpecificProduct}
                  isClickedIndiItem={isClickedIndiItem}
                />
              </ScrollToTopOnNavigate>
            }
          />
          <Route
            path="contactpage"
            element={
              <ScrollToTopOnNavigate>
                <ContactPage />
              </ScrollToTopOnNavigate>
            }
          />
          <Route
            path="wishlistpage"
            element={
              <ScrollToTopOnNavigate>
                <WishlistPage
                  wishlistItem={wishlistItem}
                  setWishlistItem={setWishlistItem}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                  updatedData={updatedData}
                />
              </ScrollToTopOnNavigate>
            }
          />

          <Route
            path="shopPage"
            element={
              <ScrollToTopOnNavigate>
                <ShopPage
                  showFilter={showFilter}
                  setShowFilter={setShowFilter}
                  updatedData={updatedData}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                  setModal={setModal}
                  setShowModal={setShowModal}
                  setWishlistItem={setWishlistItem}
                  wishlistItem={wishlistItem}
                />
              </ScrollToTopOnNavigate>
            }
          />
        </Routes>
        <Cart
          showSideCart={showSideCart}
          cartItems={cartItems}
          setShowSideCart={setShowSideCart}
          countItemCart={countItemCart}
          setCountItem={setCountItem}
          setCartItems={setCartItems}
          total={total}
        />
        {showModal && (
          <QuickView
            modal={modal}
            setCartItems={setCartItems}
            cartItems={cartItems}
            setModal={setModal}
            updatedData={updatedData}
            setWishlistItem={setWishlistItem}
            wishlistItem={wishlistItem}
          />
        )}
        <NewsLetter />
        <FooterArea />
        <Overlay
          showSideCart={showSideCart}
          showSearchBar={showSearchBar}
          showModal={showModal}
          setShowModal={setShowModal}
          showFilter={showFilter}
        />
      </main>
    </>
  );
}

export default App;
