import "./products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductList from "./ProductList";
import { useState } from "react";

import { Link } from "react-router-dom";
export default function Products({
  updatedData,
  cartItems,
  setCartItems,
  setWishlistItem,
  wishlistItem,
  setModal,
  setShowModal,
}) {
  const [displayProduct, setDisplayProduct] = useState(
    updatedData.filter((productData) => productData.newProduct === true)
  );

  const [selectedTab, setSelectedTab] = useState("new");

  function handleDisplayNewProduct() {
    const newProduct = updatedData.filter(
      (productData) => productData.newProduct === true
    );
    setDisplayProduct(newProduct);
    setSelectedTab("new");
  }

  function handleDisplayFeatureProduct() {
    const newProduct = updatedData.filter(
      (productData) => productData.featureProduct === true
    );
    setDisplayProduct(newProduct);
    setSelectedTab("feature");
  }

  function handleDisplayBestProduct() {
    const newProduct = updatedData.filter(
      (productData) => productData.bestProduct === true
    );
    setDisplayProduct(newProduct);
    setSelectedTab("best");
  }
  return (
    <section className="products">
      <h1 className="products-title">Our products</h1>
      <div className="products-tab">
        <span
          className={selectedTab === "new" ? "activeTab" : ""}
          onClick={handleDisplayNewProduct}
        >
          New product
        </span>
        <span
          className={selectedTab === "feature" ? "activeTab" : ""}
          onClick={handleDisplayFeatureProduct}
        >
          Feature product
        </span>
        <span
          className={selectedTab === "best" ? "activeTab" : ""}
          onClick={handleDisplayBestProduct}
        >
          Best product
        </span>
      </div>
      <div className="allSwiperContainer">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[]}
          className="mySwiper products-swiper"
          wrapperTag="div"
          wrapperClass="custom-wrapper"
          allowTouchMove={false}
        >
          {displayProduct.map((product) => {
            return (
              <SwiperSlide
                className="customproduct-swiperSlide"
                key={product.id}
              >
                <ProductList
                  product={product}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                  updatedData={updatedData}
                  setWishlistItem={setWishlistItem}
                  wishlistItem={wishlistItem}
                  setModal={setModal}
                  setShowModal={setShowModal}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="seeMore-btn">
          <Link to="shopPage">
            <button>SEE MORE</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
