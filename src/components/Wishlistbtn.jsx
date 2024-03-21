import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function Wishlistbtn({
  setWishlistItem,
  wishlistItem,
  id,
  updatedData,
  iconBtnStyle,
  setIsHovered,
  showSpan,
}) {
  function handleAddToWishlist() {
    const isItemInList = wishlistItem.some((item) => item.id === id);
    if (isItemInList) {
      alert("Product is already in the Wishlist");
    } else {
      const newItem = updatedData.find((item) => item.id === id);
      if (newItem) {
        setWishlistItem((prevWishlistItems) => [newItem, ...prevWishlistItems]);
        alert("Product successfully added to Wishlist");
      }
    }
  }

  return (
    <button
      className="Btn-icon wishListBtn"
      style={iconBtnStyle}
      onClick={handleAddToWishlist}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FontAwesomeIcon icon={faHeart} />
      {showSpan ? (
        <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>WISHLIST</span>
      ) : (
        ""
      )}
    </button>
  );
}
