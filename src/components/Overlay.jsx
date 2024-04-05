import "./overlay.css";
export default function Overlay({
  showSideCart,
  showSearchBar,
  showModal,
  setShowModal,
  showFilter,
}) {
  return (
    <div
      onClick={() => setShowModal(false)}
      className={
        showSideCart || showSearchBar || showModal || showFilter
          ? "overlay active"
          : "overlay"
      }
    ></div>
  );
}
