import "./banner.css";

import { Link } from "react-router-dom";

import offerImg from "./image/offer.png";
import projectorImg from "./image/projector.png";
export default function Banner() {
  return (
    <section className="banner">
      <div className="banner1st">
        <div className="banner-content content1st">
          <h1 className="bannerTitle">Wireless earbuds</h1>
          <Link to="shopPage" className="bannerLink">
            SHOP NOW
          </Link>
        </div>
        <div className="banner-content content2nd">
          {" "}
          <h1 className="bannerTitle">Smart Phones</h1>
          <Link to="shopPage" className="bannerLink">
            SHOP NOW
          </Link>
        </div>
        <div className="banner-content content3rd">
          {" "}
          <h1 className="bannerTitle">DSLR camera</h1>
          <Link to="shopPage" className="bannerLink">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="banner2nd">
        <div className="offer-container">
          <img src={offerImg} alt="" />
        </div>
        <div className="projectorImg-container">
          <img src={projectorImg} alt="" />
        </div>
        <div className="banner2nd-title">
          <h1>Best video quality ever</h1>
          <div className="banner2nd-btn">
            <Link to="shopPage">
              <button>SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
