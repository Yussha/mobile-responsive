import "./mywishlist.css";

import MyWishlistBtn from "./MyWishlistBtn";

export default function MyWishlist({
  wishlistItem,
  setWishlistItem,
  cartItems,
  updatedData,
  setCartItems,
}) {
  function handleDeleteItem(id) {
    const updateWishlist = wishlistItem.filter((item) => item.id !== id);
    setWishlistItem(updateWishlist);
  }

  function handleClearWishlist() {
    setWishlistItem([]);
  }

  function addToCart(id) {
    const isItemInCart = cartItems.some((item) => item.id === id);

    if (isItemInCart) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartItems(updatedCartItems);
    } else {
      for (let i = 0; i < updatedData.length; i++) {
        if (updatedData[i].id === id) {
          setCartItems((prevCartItems) => [
            { ...updatedData[i], quantity: 1 },
            ...prevCartItems,
          ]);
        }
      }
    }
  }

  return (
    <div className="myWishlist">
      <div className="myWishlist-header">
        <h1>My wishlist:</h1>
        <span>{wishlistItem.length} item</span>
      </div>
      {wishlistItem.map((item) => {
        return (
          <div className="allWishlistContainer" key={item.id}>
            <div className="wishlist-infoContainer">
              <div className="wishlist-info">
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
              </div>
              <div className="wishlist-btn">
                <button onClick={() => addToCart(item.id)}>Add to cart</button>
                <button>Buy now</button>
              </div>
              <div className="wishlist-price">
                <span className="wishlistPrice">${item.price}</span>
                <span
                  className="wishlist-xIcon"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  X
                </span>
              </div>
            </div>
            <hr />
          </div>
        );
      })}

      <MyWishlistBtn handleClearWishlist={handleClearWishlist} />
    </div>
  );
}
