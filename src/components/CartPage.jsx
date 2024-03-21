import "./cartpage.css";

import CartPageNav from "./CartPageNav";
import CartPageContent from "./CartPageContent";
import CartFeatured from "./CartFeatured";

export default function CartPage({
  setCartItems,
  cartItems,
  updatedData,
  countItemCart,
  total,
}) {
  return (
    <section className="cartPage">
      <CartPageNav />
      <CartPageContent
        cartItems={cartItems}
        countItemCart={countItemCart}
        total={total}
        setCartItems={setCartItems}
      />
      <CartFeatured cartItems={cartItems} updatedData={updatedData} />
    </section>
  );
}
