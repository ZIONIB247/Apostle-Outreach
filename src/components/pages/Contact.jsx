import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="secThree">
      <div className="genLayout contactWrapper">
        <div className="formContact">
          <h3>contact us</h3>

          <h1>Feel free to write to us a message.</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quas
            nesciunt velit repellendus soluta autem laudantium provident facere,
            itaque enim eaque adipisci esse rerum vitae?
          </p>

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
        </form>
      </div>
    </section>
  );
};

export default Contact;
