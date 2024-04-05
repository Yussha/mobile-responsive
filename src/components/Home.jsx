import HeroSection from "./HeroSection";
import Services from "./Services";
import TrendingProducts from "./TrendingProducts";
import Banner from "./Banner";
import Products from "./Products";
import Deal from "./Deal";
import Testimonial from "./Testimonial";

export default function Home({
  cartItems,
  setCartItems,
  setCountItem,
  updatedData,
  setWishlistItem,
  wishlistItem,
  setModal,
  setShowModal,
}) {
  return (
    <>
      <HeroSection />
      <Services />
      <TrendingProducts
        cartItems={cartItems}
        setCartItems={setCartItems}
        setCountItem={setCountItem}
        updatedData={updatedData}
        setWishlistItem={setWishlistItem}
        wishlistItem={wishlistItem}
        setModal={setModal}
        setShowModal={setShowModal}
      />
      <Banner />
      <Products
        updatedData={updatedData}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setWishlistItem={setWishlistItem}
        wishlistItem={wishlistItem}
        setModal={setModal}
        setShowModal={setShowModal}
      />
      <Deal />
      <Testimonial />
    </>
  );
}
