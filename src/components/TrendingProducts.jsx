import "./trendingproducts.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import TrendingProductsList from "./TrendingProductsList";
export default function TrendingProducts({
  cartItems,
  setCartItems,
  setCountItem,
  updatedData,
  setWishlistItem,
  wishlistItem,
  setModal,
  setShowModal,
}) {
  const trendingProducts = updatedData.slice(0, 5);

  return (
    <section className="trendProduct">
      <h1 className="trendProducts-title">Trending Products</h1>
      <div>
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
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper trendProducts-swiper"
        >
          {trendingProducts.map((product) => {
            return (
              <SwiperSlide
                className="customTrendProduct-swiperSlide"
                key={product.id}
              >
                <TrendingProductsList
                  product={product}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  updatedData={updatedData}
                  setCountItem={setCountItem}
                  setWishlistItem={setWishlistItem}
                  wishlistItem={wishlistItem}
                  setModal={setModal}
                  setShowModal={setShowModal}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
