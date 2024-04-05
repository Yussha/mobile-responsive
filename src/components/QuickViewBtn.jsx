import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function QuickViewBtn({ product, setModal, setShowModal }) {
  const [isHovered, setIsHovered] = useState(false);

  const iconBtnStyle = {
    border: "1px solid #6f6f6f",
    color: "#6f6f6f",
    padding: "10px",
    borderRadius: "5px",
    transition: "0.5s",
    cursor: "pointer",
    ...(isHovered && {
      backgroundColor: "#ff5049",
      color: "#ffffff",
    }),
  };
  function handleModalShow(item) {
    setModal(item);
    setShowModal(true);
  }
  return (
    <button
      className="quickViewBtn"
      style={iconBtnStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleModalShow(product)}
    >
      <FontAwesomeIcon icon={faEye} />
    </button>
  );
}
