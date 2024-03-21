import "./cartpageitem.css";
export default function CartPageItem({
  cartItems,
  countItemCart,
  setCartItems,
}) {
  function incrementItem(item) {
    const updatedItem = {
      ...item,
      quantity: item.quantity + 1,
    };

    handleUpdateItems(updatedItem);
  }

  function decrementItem(item) {
    let updatedItem;
    if (item.quantity - 1 === 0) {
      updatedItem = cartItems.filter(
        (prevCarItem) => prevCarItem.id !== item.id
      );
      setCartItems(updatedItem);
    } else {
      updatedItem = {
        ...item,
        quantity: item.quantity - 1,
      };

      handleUpdateItems(updatedItem);
    }
  }

  function handleOnChange(event, item) {
    const updatedItem = {
      ...item,
      quantity: event.target.value,
    };

    handleUpdateItems(updatedItem);
  }

  function handleDeleteItem(item) {
    const newCartItems = cartItems.filter((carItem) => carItem.id !== item.id);
    setCartItems(newCartItems);
  }

  function handleUpdateItems(updatedItem) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  }

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  return (
    <section className="cartPageItem">
      <div className="myCart">
        <div className="myCartHeader">
          <h1>My cart:</h1>
          <span>{countItemCart} Items</span>
        </div>
        {cartItems.map((cartItem) => {
          const totalPrice = calculateTotalPrice(cartItem);
          return (
            <div className="cartInfos" key={cartItem.id}>
              <div className="itemInfo">
                <img src={cartItem.image} alt="" />
                <div className="itemTitle">
                  <span className="cpItemName">{cartItem.name}</span>
                  <span className="cpItemColor">
                    <span>Color: </span> Salmon
                  </span>
                  <span className="cpPrice">${cartItem.price}</span>
                </div>
              </div>

              <div className="itemQty">
                <div className="productQty">
                  <input
                    type="text"
                    value={cartItem.quantity}
                    onChange={(e) => handleOnChange(e, cartItem)}
                  />
                  <div className="changeQtyBtn">
                    <button onClick={() => incrementItem(cartItem)}>+</button>
                    <button onClick={() => decrementItem(cartItem)}>-</button>
                  </div>
                </div>
                <div className="itemRemoveBtn">
                  <button onClick={() => handleDeleteItem(cartItem)}>
                    Remove
                  </button>
                </div>
              </div>

              <div className="itemPrice">${totalPrice}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
