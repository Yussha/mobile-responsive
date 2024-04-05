import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./cartitemlist.css";
export default function CartItemList({ cartItems, setCartItems, cartItem }) {
  function handleOnChange(event, item) {
    const updatedItem = {
      ...item,
      quantity: event.target.value,
    };

    handleUpdateItems(updatedItem);
  }

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
  return (
    <div className="cartList">
      <div key={cartItem.id}>
        <div className="indi-cartList">
          <div className="cartlist-img">
            <img src={cartItem.image} alt="" />
          </div>
          <div className="cartList-details">
            <h4>{cartItem.name}</h4>
            <span>
              {cartItem.quantity} x ${cartItem.price}
            </span>
            <div className="cartListBtn">
              <div>
                <input
                  type="text"
                  value={cartItem.quantity}
                  onChange={(e) => handleOnChange(e, cartItem)}
                />
                <div className="cartList-btnContainer">
                  <button onClick={() => incrementItem(cartItem)}>+</button>
                  <button onClick={() => decrementItem(cartItem)}>-</button>
                </div>
              </div>
              <div className="trashIcon-container">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="trashIcon"
                  onClick={() => handleDeleteItem(cartItem)}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
