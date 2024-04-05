import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBagShopping } from "@fortawesome/free-solid-svg-icons";

import Wishlistbtn from "./Wishlistbtn";
import QuickViewBtn from "./QuickViewBtn";

import { useState } from "react";
export default function ProductList({
  product,
  cartItems,
  setCartItems,
  updatedData,
  setWishlistItem,
  wishlistItem,
  setShowModal,
  setModal,
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
      <div className="productImg">
        <img src={product.image} alt="" />
      </div>
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="priceProduct">
          <span>$ {product.price}</span>
        </div>
        <div className="ratings">
          <span>
            <FontAwesomeIcon icon={faStar} className="pStar-checked" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} className="pStar-checked" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} className="pStar-checked" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </div>

      <div className="pIconBtn">
        <button className="pBtn-icon">
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
          setIsHovered={setIsHovered}
          setWishlistItem={setWishlistItem}
          wishlistItem={wishlistItem}
          updatedData={updatedData}
          id={product.id}
        />
      </div>
    </>
  );
}
