import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBagShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import "./searchpagelist.css";

export default function SearchPageList({ displayProduct }) {
  return (
    <>
      <div className="sDispalyProductImg">
        <img src={displayProduct.image} alt="" />
      </div>
      <div className="sDispalyProduct-details">
        <div className="sDispalyProduct-name">{displayProduct.name}</div>
        <div className="sDispalyProductProduct">
          <span>$ {displayProduct.price}</span>
        </div>
        <div className="ratings">
          <span>
            <FontAwesomeIcon icon={faStar} className="sDisplaystar-checked" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} className="sDisplaystar-checked" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} className="sDisplaystar-checked" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </div>

      <div className="sDisplayiconBtn">
        <FontAwesomeIcon
          icon={faBagShopping}
          className="sDisplayBtn-icon"
          onClick={() => addToCart(product.id)}
        />
        <FontAwesomeIcon icon={faEye} className="tBtn-icon" />
        <FontAwesomeIcon icon={faHeart} className="tBtn-icon" />
      </div>
    </>
  );
}
