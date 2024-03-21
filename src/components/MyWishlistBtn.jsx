import "./mywishlistbtn.css";
export default function MyWishlistBtn({ handleClearWishlist }) {
  return (
    <div className="mywishListBtn">
      <button className="mywishListConShop">CONTINUE SHOPPING</button>
      <button className="mywishListClearBtn" onClick={handleClearWishlist}>
        CLEAR WISHLIST
      </button>
    </div>
  );
}
