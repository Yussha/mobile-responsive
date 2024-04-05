import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBagShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
export default function FeaturedCollectionList({ featuredcollection }) {
  return (
    <>
      <div className="fCollectiontImg">
        <img src={featuredcollection.image} alt="" />
      </div>
      <div className="fCollection-details">
        <div className="fCollection-name">{featuredcollection.name}</div>
        <div className="pricefCollection">
          <span>$ {featuredcollection.price}</span>
        </div>
        <div className="ratings">
          <span>
            <FontAwesomeIcon
              icon={faStar}
              className="fCollectionstar-checked"
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faStar}
              className="fCollectionstar-checked"
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faStar}
              className="fCollectionstar-checked"
            />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </div>

      <div className="fCollectionIconBtn">
        <FontAwesomeIcon
          icon={faBagShopping}
          className="fCollectionBtn-icon"
          onClick={() => addToCart(featuredcollection.id)}
        />
        <FontAwesomeIcon icon={faEye} className="fCollectionBtn-icon" />
        <FontAwesomeIcon icon={faHeart} className="fCollectionBtn-icon" />
      </div>
    </>
  );
}
