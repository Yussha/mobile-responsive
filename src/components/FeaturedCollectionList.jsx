import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBagShopping } from "@fortawesome/free-solid-svg-icons";

import Wishlistbtn from "./Wishlistbtn";
import QuickViewBtn from "./QuickViewBtn";

import { useState } from "react";

export default function FeaturedCollectionList({
  featuredcollection,
  updatedData,
  wishlistItem,
  setWishlistItem,
  setModal,
  setShowModal,
  cartItems,
  setCartItems,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [showSpan, setShowSpan] = useState(false);

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
      <div className="fCollectiontImg">
        <img src={featuredcollection.image} alt="" />
      </div>
      <div className="fCollection-details">
        <div className="fCollection-name">{featuredcollection.name}</div>
        <div className="pricefCollection">
          <span>$ {featuredcollection.price}</span>
        </div>
        <div className="ratings">
          <span>
            <FontAwesomeIcon
              icon={faStar}
              className="fCollectionstar-checked"
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faStar}
              className="fCollectionstar-checked"
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faStar}
              className="fCollectionstar-checked"
            />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </div>

      <div className="fCollectionIconBtn">
        <button
          onClick={() => addToCart(featuredcollection.id)}
          className="fCollectionBtn-icon"
        >
          <FontAwesomeIcon icon={faBagShopping} />
        </button>

        <QuickViewBtn
          product={featuredcollection}
          setModal={setModal}
          setShowModal={setShowModal}
        />
        <Wishlistbtn
          iconBtnStyle={iconBtnStyle}
          id={featuredcollection.id}
          setWishlistItem={setWishlistItem}
          wishlistItem={wishlistItem}
          updatedData={updatedData}
          setIsHovered={setIsHovered}
          showSpan={showSpan}
        />
      </div>
    </>
  );
}
