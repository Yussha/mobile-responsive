import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBagShopping } from "@fortawesome/free-solid-svg-icons";

import "./shoppagelayouttwo.css";

import { useState } from "react";

import Wishlistbtn from "./Wishlistbtn";
import QuickViewBtn from "./QuickViewBtn";
export default function ShopPageLayoutTwo({
  filteredProducts,
  setCartItems,
  updatedData,
  cartItems,
  setShowModal,
  setModal,
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
    <section className="customLayout">
      {filteredProducts.map((product) => {
        return (
          <div className="customLayoutContent" key={product.id}>
            <div className="customLayoutImg">
              <img src={product.image} alt="" />
            </div>
            <div className="customLayoutInfo">
              <h3>{product.name}</h3>
              <span className="customLayoutPrice">{product.price}</span>
              <div className="customLayoutRatings">
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="customLayoutStar-checked"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="customLayoutStar-checked"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="customLayoutStar-checked"
                  />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
              <p>{product.description}</p>

              <div className="customLayoutIcons">
                <button
                  className="customLayoutIcon"
                  onClick={() => addToCart(product.id)}
                >
                  <FontAwesomeIcon icon={faBagShopping} />
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
            </div>
          </div>
        );
      })}
    </section>
  );
}
