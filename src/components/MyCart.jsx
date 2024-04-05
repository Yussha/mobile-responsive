import CartPageItem from "./CartPageItem";
import MyCartBtn from "./MyCartBtn";
import CartSpecialNotes from "./CartSpecialNotes";

import "./mycart.css";

export default function MyCart({ cartItems, countItemCart, setCartItems }) {
  return (
    <section className="myCart">
      <CartPageItem
        cartItems={cartItems}
        countItemCart={countItemCart}
        setCartItems={setCartItems}
      />
      <MyCartBtn setCartItems={setCartItems} />
      <CartSpecialNotes />
    </section>
  );
}
