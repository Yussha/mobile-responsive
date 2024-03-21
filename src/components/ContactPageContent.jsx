import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./contactpagecontent.css";
export default function ContactPageContent() {
  return (
    <section className="contactPageContent">
      <div className="contactInfo">
        <h1>Get in touch</h1>
        <p>
          If you’ve got great products your making or looking to work with us
          then drop us a line
        </p>
      </div>

      <div className="contactInfoGrid">
        <div className="contactInfoCard">
          <FontAwesomeIcon className="contactIcon" icon={faLocationDot} />
          <span>7882, Reliance GIDC</span>
          <span>Chowk bazzar, New York</span>
        </div>

        <div className="contactInfoCard">
          <FontAwesomeIcon className="contactIcon" icon={faPhone} />
          <span>(+33) 1 23 45 67 89</span>
        </div>

        <div className="contactInfoCard">
          <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />
          <span>spacing@tech.com</span>
        </div>
      </div>

      <div className="contactMapContainer">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123489.27842951081!2d120.94733069957408!3d14.710332841652441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1b519841b5f%3A0x5e770e225042d1a!2sCaloocan%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1710485040494!5m2!1sen!2sph"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <hr className="contactPageLine" />

      <div className="contacInputs">
        <div className="contactInputsTitle">
          <h1>Drop us message</h1>
          <p>
            If you’ve got great products your making or looking to work with us
            then drop us a line
          </p>
        </div>

        <form className="fomrInputs">
          <div className="inputNameAndEmail">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Email" />
            </div>
          </div>

          <div className="phoneNumber">
            <label htmlFor="">Phone number</label>
            <input type="email" placeholder="Phone number" />
          </div>

          <div className="textArea">
            <label htmlFor="">Message</label>
            <textarea placeholder="Message"></textarea>
          </div>

          <div className="formButton">
            <button>SEND</button>
          </div>
        </form>
      </div>
    </section>
  );
}
