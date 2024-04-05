import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBagShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import "./searchpagelist.css";

import Wishlistbtn from "./Wishlistbtn";
import QuickViewBtn from "./QuickViewBtn";

import { useState } from "react";

export default function SearchPageList({
  displayProduct,
  updatedData,
  cartItems,
  setCartItems,
  setModal,
  setShowModal,
  setWishlistItem,
  wishlistItem,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const iconBtnStyle = {
    border: "1px solid #6f6f6f",
    color: "#6f6f6f",
    padding: "10px",
    borderRadius: "5px",
    transition: "0.5s",
    cursor: "pointer",
    ...(isHovered && {
      backgroundColor: "#ff5049",
      color: "#ffffff",
    }),
  };

  function addToCart(id) {
    const isItemInCart = cartItems.some((item) => item.id === id);

    if (isItemInCart) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartItems(updatedCartItems);
    } else {
      for (let i = 0; i < updatedData.length; i++) {
        if (updatedData[i].id === id) {
          setCartItems((prevCartItems) => [
            { ...updatedData[i], quantity: 1 },
            ...prevCartItems,
          ]);
        }
      }
    }
  }
  return (
    <>
      <div className="sDispalyProductImg">
        <img src={displayProduct.image} alt="" />
      </div>
      <div className="sDispalyProduct-details">
        <div className="sDispalyProduct-name">{displayProduct.name}</div>
        <div className="sDispalyProductProduct">
          <span>$ {displayProduct.price}</span>
        </div>
        <div className="ratings">
          <span>
            <FontAwesomeIcon icon={faStar} className="sDisplaystar-checked" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} className="sDisplaystar-checked" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} className="sDisplaystar-checked" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </div>

      <div className="sDisplayiconBtn">
        <button className="sDisplayBtn-icon">
          <FontAwesomeIcon
            icon={faBagShopping}
            onClick={() => addToCart(displayProduct.id)}
          />
        </button>

        <QuickViewBtn
          product={displayProduct}
          setModal={setModal}
          setShowModal={setShowModal}
        />
        <Wishlistbtn
          iconBtnStyle={iconBtnStyle}
          setIsHovered={setIsHovered}
          setWishlistItem={setWishlistItem}
          wishlistItem={wishlistItem}
          updatedData={updatedData}
          id={displayProduct.id}
        />
      </div>
    </>
  );
}
