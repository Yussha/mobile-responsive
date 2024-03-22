import "./shoppagelayoutone.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBagShopping } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Wishlistbtn from "./Wishlistbtn";
import QuickViewBtn from "./QuickViewBtn";

import { useState } from "react";
export default function ShopItemLayoutOne({
  updatedData,
  filteredProducts,
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
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[]}
        className="mySwiper shopPage-swiper"
        wrapperTag="div"
        wrapperClass="custom-wrapper"
        allowTouchMove={false}
      >
        {filteredProducts.map((product) => {
          return (
            <SwiperSlide key={product.id} className="custompShop-swiperSlide">
              <div className="shopItemImg">
                <img src={product.image} alt="" />
              </div>
              <div className="shopItem-details">
                <div className="shopItem-name">{product.name}</div>
                <div className="priceShopItem">
                  <span>$ {product.price}</span>
                </div>
                <div className="ratings">
                  <span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="shopItemStar-checked"
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="shopItemStar-checked"
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="shopItemStar-checked"
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

              <div className="shopItemIconBtn">
                <button className="ShopItemBtn-icon">
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
