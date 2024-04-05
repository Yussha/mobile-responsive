import "./searhopcontent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Wishlistbtn from "./Wishlistbtn";

import { useState } from "react";

import SearchOPInfo from "./SearchOPInfo";

export default function SearhopContent({
  displayItem,
  setCartItems,
  cartItems,
  setWishlistItem,
  wishlistItem,
  updatedData,
  setShowSpecificProduct,
  showSpecificProduct,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [showSpan, setShowSpan] = useState(true);

  const iconBtnStyle = {
    border: "none",
    fontSize: "1rem",
    backgroundColor: "transparent",
    color: "#6f6f6f",
    padding: "10px",
    borderRadius: "5px",
    transition: "0.5s",
    cursor: "pointer",
    ...(isHovered && {
      color: "#232f3e",
    }),
  };

  function handleOnChange(event, item) {
    const showItem = showSpecificProduct.slice();

    const updatedDisplayItem = showItem.map((sItem) => {
      if (sItem.id === item.id) {
        return {
          ...sItem,
          quantity: Number(event.target.value),
        };
      }
    });

    setShowSpecificProduct(updatedDisplayItem);
  }

  function incrementItem(item) {
    const showItem = showSpecificProduct.slice();

    const updatedDisplayItem = showItem.map((sItem) => {
      if (sItem.id === item.id) {
        return {
          ...sItem,
          quantity: sItem.quantity + 1,
        };
      }
    });

    setShowSpecificProduct(updatedDisplayItem);
  }

  function decrementItem(item) {
    const showItem = showSpecificProduct.slice();

    const updatedDisplayItem = showItem.map((sItem) => {
      if (sItem.id === item.id) {
        return {
          ...sItem,
          quantity: sItem.quantity - 1,
        };
      }
    });

    setShowSpecificProduct(updatedDisplayItem);
  }

  function addToCart(displayItem) {
    const isItemInCart = cartItems.some((item) => item.id === displayItem.id);

    if (isItemInCart) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === displayItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, displayItem]);
    }
  }
  return (
    <>
      <div className="oneProductContent">
        <div className="oneProductImg">
          <img src={displayItem.image} alt="" />
        </div>

        <div className="oneProductInfoCon">
          <div className="ratings">
            <span>
              <FontAwesomeIcon icon={faStar} className="star-checked" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} className="star-checked" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} className="star-checked" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>

          <div className="opNamePrice">
            <h1 className="oneProductName">{displayItem.name}</h1>
            <span className="oneProductPrice">${displayItem.price}</span>
          </div>

          <div className="opitemQty">
            <div className="OneProductQty">
              <span>Quantity:</span>
              <input
                type="text"
                value={displayItem.quantity}
                onChange={(e) => handleOnChange(e, displayItem)}
              />
              <div className="opChangeQtyBtn">
                <button onClick={() => incrementItem(displayItem)}>+</button>
                <button onClick={() => decrementItem(displayItem)}>-</button>
              </div>
            </div>
          </div>

          <div className="oneProductBtn">
            <button
              className="opAddToCart"
              onClick={() => addToCart(displayItem)}
            >
              ADD TO CART
            </button>
            <button className="opButNow">BUY NOW</button>
          </div>

          <div className="oneProductWishlistBtn">
            <Wishlistbtn
              id={displayItem.id}
              setWishlistItem={setWishlistItem}
              wishlistItem={wishlistItem}
              updatedData={updatedData}
              iconBtnStyle={iconBtnStyle}
              setIsHovered={setIsHovered}
              showSpan={showSpan}
            />
          </div>
        </div>
      </div>
      <SearchOPInfo displayItem={displayItem} />
    </>
  );
}
