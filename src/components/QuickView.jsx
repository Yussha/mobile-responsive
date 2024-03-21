import "./quickview.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Wishlistbtn from "./Wishlistbtn";

import { useState } from "react";
export default function QuickView({
  modal,
  cartItems,
  setCartItems,
  setModal,
  updatedData,
  setWishlistItem,
  wishlistItem,
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

  function addToCart(modalItem) {
    const isItemInCart = cartItems.some((item) => item.id === modalItem.id);

    if (isItemInCart) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === modalItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updatedCartItems);
    } else {
      for (let i = 0; i < updatedData.length; i++) {
        if (updatedData[i].id === modalItem.id) {
          if (modalItem.quantity === 0) {
            alert("Please enter a quantity");
          } else {
            setCartItems((prevCartItems) => [
              { ...updatedData[i], quantity: modal.quantity },
              ...prevCartItems,
            ]);
          }
        }
      }
    }
  }

  function incrementItem(item) {
    const updatedItem = {
      ...item,
      quantity: Number(item.quantity + 1),
    };

    handleUpdateItems(updatedItem);
  }

  function decrementItem(item) {
    const updatedItem = {
      ...item,
      quantity: Number(item.quantity - 1),
    };

    handleUpdateItems(updatedItem);
  }

  function handleOnChange(event, item) {
    const updatedItem = {
      ...item,
      quantity: event.target.value,
    };

    handleUpdateItems(updatedItem);
  }

  function handleUpdateItems(updatedItem) {
    setModal(updatedItem);
  }
  return (
    <section className="quickView">
      <h1>Quickview</h1>

      <div className="quickView-content">
        <div className="imgContainer-quickView">
          <img src={modal.image} alt="" />
        </div>

        <div className="quickView-details">
          <div className="quickView-ratings">
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

          <div className="quickView-info">
            <h2>{modal.name}</h2>
            <span>$ {modal.price}</span>
            <p>{modal.description}</p>
          </div>

          <div className="quickViewBtn">
            <div className="quickView-inputBtn">
              <span>Quantity:</span>
              <input
                type="text"
                value={modal.quantity}
                onChange={(e) => handleOnChange(e, modal)}
              />
              <div className="quickViewBtn-btnContainer">
                <button onClick={() => incrementItem(modal)}>+</button>
                <button onClick={() => decrementItem(modal)}>-</button>
              </div>
            </div>
          </div>

          <button
            className="quickView-addToCart"
            onClick={() => addToCart(modal)}
          >
            ADD TO CART
          </button>
          <div className="quickViewWishlistBtn">
            <Wishlistbtn
              showSpan={showSpan}
              iconBtnStyle={iconBtnStyle}
              setIsHovered={setIsHovered}
              id={modal.id}
              setWishlistItem={setWishlistItem}
              wishlistItem={wishlistItem}
              updatedData={updatedData}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
