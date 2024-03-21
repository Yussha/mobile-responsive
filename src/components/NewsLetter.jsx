import "./newsletter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function NewsLetter() {
  return (
    <section className="newsLetter">
      <div className="newsLetterContent">
        <div className="newsLetterText">
          <h2>Subscribe newsletter</h2>
          <p>
            Sign up here to get 20% off on your next purchase, special offers
            and other discount information
          </p>
        </div>

        <div className="inputEmailNewsLetter">
          <input type="text" placeholder="Enter your email" />
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
      </div>
    </section>
  );
}
