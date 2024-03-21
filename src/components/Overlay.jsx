import "./overlay.css";
export default function Overlay({
  showSideCart,
  showSearchBar,
  showModal,
  setShowModal,
}) {
  return (
    <div
      onClick={() => setShowModal(false)}
      className={
        showSideCart || showSearchBar || showModal
          ? "overlay active"
          : "overlay"
      }
    ></div>
  );
}
