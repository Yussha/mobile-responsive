import "./footer.css";

import logoImg from "./image/logo.webp";

import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";
export default function FooterArea() {
  return (
    <section className="footerArea">
      <div className="footerAreaContent">
        <div className="ftLink-logo">
          <div className="footerLogo">
            <img src={logoImg} alt="" />
          </div>
          <div className="ftLink">
            <div className="footerftLinkImg">
              <img
                src="https://electrolyte9-store.myshopify.com/cdn/shop/files/insta-8_512x512_crop_center.jpg?v=1674044073"
                alt=""
              />
              <div className="ftImgHover">
                {" "}
                <FaInstagram />{" "}
              </div>
            </div>

            <div className="footerftLinkImg">
              <img
                src="https://electrolyte9-store.myshopify.com/cdn/shop/files/insta-6_512x512_crop_center.jpg?v=1674044073"
                alt=""
              />

              <div className="ftImgHover">
                {" "}
                <FaInstagram />{" "}
              </div>
            </div>

            <div className="footerftLinkImg">
              <img
                src="https://electrolyte9-store.myshopify.com/cdn/shop/files/insta-1_512x512_crop_center.jpg?v=1674044073"
                alt=""
              />
              <div className="ftImgHover">
                {" "}
                <FaInstagram />{" "}
              </div>
            </div>

            <div className="footerftLinkImg">
              <img
                src="https://electrolyte9-store.myshopify.com/cdn/shop/files/insta-5_512x512_crop_center.jpg?v=1674044073"
                alt=""
              />
              <div className="ftImgHover">
                {" "}
                <FaInstagram />{" "}
              </div>
            </div>

            <div className="footerftLinkImg">
              <img
                src="https://electrolyte9-store.myshopify.com/cdn/shop/files/insta-4_512x512_crop_center.jpg?v=1674044073"
                alt=""
              />
              <div className="ftImgHover">
                {" "}
                <FaInstagram />{" "}
              </div>
            </div>

            <div className="footerftLinkImg">
              <img
                src="https://electrolyte9-store.myshopify.com/cdn/shop/files/insta-3_512x512_crop_center.jpg?v=1674044073"
                alt=""
              />
              <div className="ftImgHover">
                {" "}
                <FaInstagram />{" "}
              </div>
            </div>

            <div className="footerftLinkImg">
              <img
                src="https://electrolyte9-store.myshopify.com/cdn/shop/files/insta-7_512x512_crop_center.jpg?v=1674044073"
                alt=""
              />
              <div className="ftImgHover">
                {" "}
                <FaInstagram />{" "}
              </div>
            </div>

            <div className="footerftLinkImg">
              <img
                src="https://electrolyte9-store.myshopify.com/cdn/shop/files/insta-2_512x512_crop_center.jpg?v=1674044073"
                alt=""
              />
              <div className="ftImgHover">
                {" "}
                <FaInstagram />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="ftLinksContainer">
          <div>
            <div className="contact">
              <h1 className="ftLinks-title">Contact us</h1>
              <a href="#">(+33) 1 23 45 67 89</a>
              <a href="#">spacing@tech.com</a>
            </div>

            <div className="address">
              <h1 className="ftLinks-title">Address</h1>
              <a href="#">7882, Reliance GIDC</a>
              <a href="#">Chowk bazzar, New York</a>
            </div>
          </div>

          <div>
            <h1 className="ftLinks-title">My account</h1>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">News</a>
            <a href="#">Faq's</a>
            <a href="#">My cart</a>
            <Link to="wishlistpage">My wishlist</Link>
          </div>

          <div>
            <h1 className="ftLinks-title">Latest shop</h1>
            <a href="#">Mobile</a>
            <a href="#">Smart TV</a>
            <a href="#">Laptop</a>
            <a href="#">Radio</a>
            <a href="#">Computer</a>
            <a href="#">USB drives</a>
          </div>
        </div>
      </div>
    </section>
  );
}
