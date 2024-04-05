import "./cart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBagShopping } from "@fortawesome/free-solid-svg-icons";

import CartItemList from "./CartItemList";
import CartBottom from "./CartBottom";

export default function Cart({
  showSideCart,
  setShowSideCart,
  cartItems,
  countItemCart,
  setCartItems,
  total,
}) {
  const isShowSideCart = showSideCart ? { right: "0px" } : { right: "-320px" };
  return (
    <section className="cart" style={isShowSideCart}>
      <div className="cart-header">
        {cartItems.length > 0 ? (
          <h5>
            There are <span className="count-item">{countItemCart}</span>{" "}
            products
          </h5>
        ) : (
          <h5>No products in the cart</h5>
        )}
        <FontAwesomeIcon
          icon={faXmark}
          className="cart-xmark"
          onClick={() => {
            setShowSideCart(!showSideCart);
          }}
        />
      </div>

      {cartItems.length > 0 ? (
        <>
          {cartItems.map((cartItem) => {
            return (
              <CartItemList
                key={cartItem.id}
                cartItem={cartItem}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            );
          })}
          <CartBottom
            cartItems={cartItems}
            setShowSideCart={setShowSideCart}
            showSideCart={showSideCart}
            total={total}
          />
        </>
      ) : (
        <div className="cart-info">
          <FontAwesomeIcon icon={faBagShopping} className="cart-bagShopping" />{" "}
          <button>CONITNUE SHOPPING</button>
        </div>
      )}
    </section>
  );
}
