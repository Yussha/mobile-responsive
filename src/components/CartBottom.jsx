import "./cartbottom.css";

import { useState } from "react";

import { Link } from "react-router-dom";
export default function CartBottom({ setShowSideCart, showSideCart, total }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckBoxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <section className="subTotal-Xbtn">
      <div className="subTotal-info">
        <span className="subTotal-name">Subtotal</span>
        <span className="subTotal">$ {total}</span>
      </div>
      <div className="cartBtn">
        <input
          type="checkbox"
          name="aggrement"
          checked={isChecked}
          onChange={handleCheckBoxChange}
        />
        <label htmlFor="aggrement">
          I have read and agree with the <a href="">terms & conditions.</a>{" "}
        </label>
        <div className="cartBtn-container">
          <Link to="cart" onClick={() => setShowSideCart(!showSideCart)}>
            <button className="viewCart-btn">VIEW CART</button>
          </Link>
          <button className={isChecked ? "checkOutBtn active" : "checkOutBtn"}>
            CHECK OUT
          </button>
        </div>
      </div>
    </section>
  );
}
