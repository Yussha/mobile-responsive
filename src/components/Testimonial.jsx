import "./testimoial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Autoplay } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
export default function Testimonial() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth > 1024 ? 2 : 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="testimonial">
      <div className="tesTimonialContent">
        <div>
          <h1 className="tesTimonialTitle">Our customers lave what to do</h1>
        </div>
        <div>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={20}
            freeMode={true}
            modules={([FreeMode], [Autoplay])}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper customTestimonial-swiper grab-cursor"
          >
            <SwiperSlide className="tesTimonialSlide">
              <div>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="testimonialQuoteIcon"
                />
              </div>
              <div className="testimonialProfile">
                <p className="testimonyText">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia commodi earum voluptatem libero explicabo ipsam."
                </p>
                <div className="testimonialPicture">
                  <img
                    src="https://electrolyte9-store.myshopify.com/cdn/shop/files/testi-1_90x90_crop_center.jpg?v=1672289004"
                    alt=""
                  />
                </div>
                <span className="testimonialName">Miranda joy</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="tesTimonialSlide">
              <div>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="testimonialQuoteIcon"
                />
              </div>
              <div className="testimonialProfile">
                <p className="testimonyText">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia commodi earum voluptatem libero explicabo ipsam."
                </p>
                <div className="testimonialPicture">
                  <img
                    src="https://electrolyte9-store.myshopify.com/cdn/shop/files/testi-3_90x90_crop_center.jpg?v=1672289004"
                    alt=""
                  />
                </div>
                <span className="testimonialName">Justin allison</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="tesTimonialSlide">
              <div>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="testimonialQuoteIcon"
                />
              </div>
              <div className="testimonialProfile">
                <p className="testimonyText">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia commodi earum voluptatem libero explicabo ipsam."
                </p>
                <div className="testimonialPicture">
                  <img
                    src="https://electrolyte9-store.myshopify.com/cdn/shop/files/testi-4_90x90_crop_center.jpg?v=1672289004"
                    alt=""
                  />
                </div>
                <span className="testimonialName">Olive yew</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
