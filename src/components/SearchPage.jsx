import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./searchpage.css";

import SearchPageList from "./SearchPageList";
import SearchPageOneProduct from "./SearchPageOneProduct";

export default function SearchPage({
  searchDisplayItem,
  searchQuery,
  setCartItems,
  cartItems,
  updatedData,
  setWishlistItem,
  wishlistItem,
  showSpecificProduct,
  isClickedIndiItem,
  setShowSpecificProduct,
}) {
  return (
    <section className="searchPage">
      {isClickedIndiItem ? (
        <>
          <SearchPageOneProduct
            searchDisplayItem={searchDisplayItem}
            setCartItems={setCartItems}
            cartItems={cartItems}
            updatedData={updatedData}
            setWishlistItem={setWishlistItem}
            wishlistItem={wishlistItem}
            showSpecificProduct={showSpecificProduct}
            setShowSpecificProduct={setShowSpecificProduct}
          />
        </>
      ) : (
        <div>
          <h1 className="sDisplayProducts-title">
            Your search for "{searchQuery}" revealed the following:
          </h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
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
            className="mySwiper sDisplayProducts-swiper"
            wrapperTag="div"
            wrapperClass="custom-wrapper"
            allowTouchMove={false}
          >
            {searchDisplayItem.map((displayProduct) => {
              return (
                <SwiperSlide
                  className="customSdisplayProduct-swiperSlide"
                  key={displayProduct.id}
                >
                  <SearchPageList displayProduct={displayProduct} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </section>
  );
}
