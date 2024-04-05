import "./carttotal.css";

export default function CartTotal({ total }) {
  return (
    <div className="cartTotal">
      <div className="viewTotal">
        <span className="cttotalName">Total</span>
        <span className="cttotalPrice">${total}</span>
      </div>
      <div className="checkOutProcess">
        <input type="text" placeholder="Discount code" />
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}
