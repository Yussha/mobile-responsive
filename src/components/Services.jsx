import "./services.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faGift,
  faWallet,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
export default function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="service">
          <FontAwesomeIcon className="serviceIcon" icon={faTruck} />
          <h5>Free Shipping</h5>
          <span>Delivery within 5 to 7 days</span>
        </div>
        <div className="service">
          <FontAwesomeIcon className="serviceIcon" icon={faGift} />
          <h5>Gift voucher</h5>
          <span>Surprise coupon voucher</span>
        </div>
        <div className="service">
          <FontAwesomeIcon className="serviceIcon" icon={faWallet} />
          <h5>Money back</h5>
          <span>Refund within 30 days</span>
        </div>
        <div className="service">
          <FontAwesomeIcon className="serviceIcon" icon={faShield} />
          <h5>Safe payment</h5>
          <span>100% secure with us</span>
        </div>
      </div>
    </section>
  );
}
