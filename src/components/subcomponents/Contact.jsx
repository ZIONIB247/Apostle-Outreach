import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";

import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="secThree">
      <div className="genLayout contactWrapper">
        <div className="formContact">
          <h3>contact us</h3>

          <h1>Feel free to write to us a message.</h1>

          <div className="info">
            <div className="infoContent">
              <span>
                <GrLocation style={{ opacity: 0.6 }} />
              </span>
              <h4>address</h4>
            </div>
            <div className="infoContent">
              <span>
                <FiMail style={{ opacity: 0.6 }} />
              </span>
              <h4>email</h4>
            </div>
            <div className="infoContent">
              <span>
                <FaPhone style={{ opacity: 0.6 }} />
              </span>
              <h4>number</h4>
            </div>
          </div>

          <div className="social">
            <h5>stay connected</h5>
            <div className="formIcons">
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaPinterestP />
              </span>
              <span>
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>

        <form className="contactForm">
          <div className="formInputGroup">
            <div className="formInput">
              <input type="text" placeholder="Enter full name" />
            </div>
            <div className="formInput">
              <input type="text" placeholder="Enter email address" />
            </div>
          </div>

          <div className="formInputGroup">
            <div className="formInput">
              <input type="text" placeholder="phone number" />
            </div>
            <div className="formInput">
              <select>
                <option value="Nigeria">Nigeria</option>
                <option value="USA">USA</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>

          <div className="textField">
            <textarea placeholder="Enter Message"></textarea>
          </div>

          <button className="btn">submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
