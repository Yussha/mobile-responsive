import "./cartfeatured.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import FeaturedCollectionList from "./FeaturedCollectionList";

export default function CartFeatured({
  updatedData,
  wishlistItem,
  setWishlistItem,
  setModal,
  setShowModal,
  cartItems,
  setCartItems,
}) {
  const featuredProduct = updatedData.filter(
    (data) => data.featureProduct === true
  );

  return (
    <section className="cartFeatured">
      <h1 className="trendProducts-title">Featured collection</h1>
      <div>
        <Swiper
          slidesPerView={1}
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
              slidesPerView: 2,
              spaceBetween: 40,
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
          className="mySwiper customfeaturedCollection-swiper"
        >
          {featuredProduct.map((featuredcollection) => {
            return (
              <SwiperSlide
                className="customfeaturedCollection-swiperSlide"
                key={featuredcollection.id}
              >
                <FeaturedCollectionList
                  featuredcollection={featuredcollection}
                  wishlistItem={wishlistItem}
                  setWishlistItem={setWishlistItem}
                  setModal={setModal}
                  setShowModal={setShowModal}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  updatedData={updatedData}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
