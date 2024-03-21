import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBagShopping } from "@fortawesome/free-solid-svg-icons";

import Wishlistbtn from "./Wishlistbtn";
import QuickViewBtn from "./QuickViewBtn";

import { useState } from "react";

export default function TrendingProductsList({
  product,
  cartItems,
  setCartItems,
  updatedData,
  wishlistItem,
  setWishlistItem,
  setModal,
  setShowModal,
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
      <div className="trendProductImg">
        <img src={product.image} alt="" />
      </div>
      <div className="Tproduct-details">
        <div className="trendProduct-name">{product.name}</div>
        <div className="priceTrendProduct">
          <span>$ {product.price}</span>
        </div>
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
      </div>

      <div className="iconBtn">
        <button className="tBtn-icon">
          <FontAwesomeIcon
            icon={faBagShopping}
            onClick={() => addToCart(product.id)}
          />
        </button>

        <QuickViewBtn
          product={product}
          setModal={setModal}
          setShowModal={setShowModal}
        />
        <Wishlistbtn
          iconBtnStyle={iconBtnStyle}
          id={product.id}
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
