import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import "./herosection.css";

import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section className="hero">
      <Swiper
        navigation={true}
        grabCursor={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="heroSlider-1">
          <div className="heroText-container">
            <span>Get 35% off new tablet</span>
            <h1>Best tablet smart pad</h1>
          </div>
          <div className="heroBtn-container">
            <button>SHOW NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="heroSlider-2">
          <div className="heroText-container">
            <span>Get 35% off new tablet</span>
            <h1>Best tablet smart pad</h1>
          </div>
          <div className="heroBtn-container">
            <button>SHOW NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="heroSlider-3">
          <div className="heroText-container">
            <span>Get 35% off new tablet</span>
            <h1>Best tablet smart pad</h1>
          </div>
          <div className="heroBtn-container">
            <Link to="shopPage">
              <button>SHOW NOW</button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
