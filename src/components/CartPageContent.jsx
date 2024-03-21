import MyCart from "./MyCart";
import CartTotal from "./CartTotal";

import { Link } from "react-router-dom";

import "./cartpagecontent.css";
export default function CartPageContent({
  cartItems,
  countItemCart,
  total,
  setCartItems,
}) {
  return cartItems.length > 0 ? (
    <section className="cartPageContent">
      <MyCart
        cartItems={cartItems}
        countItemCart={countItemCart}
        setCartItems={setCartItems}
      />
      <CartTotal total={total} />
    </section>
  ) : (
    <section className="emptyCart">
      <span className="emptyCartTitle">Cart</span>
      <span className="emptyCartTitle">empty</span>
      <p className="emptyCartPara">
        Sorry your cart has currently no more products, click on 'here' given
        below for continue browsing.
      </p>
      <div className="emptyCartLink">
        Continue browsing <Link className="emptyCartBtn">here</Link>
      </div>
    </section>
  );
}
