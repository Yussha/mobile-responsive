import "./mycartbtn.css";
export default function MyCartBtn({ setCartItems }) {
  return (
    <div className="myCartBtn">
      <button className="myCartConShop">CONTINUE SHOPPING</button>
      <button className="myCartClearBtn" onClick={() => setCartItems([])}>
        CLEAR CART
      </button>
    </div>
  );
}
