import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";

import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// Emailjs Parameters
const SERVICE_ID = "service_9lf6qxh";
const TEMPLATE_ID = "template_6p90dqw";
const PUBLIC_KEY = "oynr264ANw1VmLb6Z";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  // user template parameters
  const userTemplateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // function handle submit
  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, userTemplateParams, PUBLIC_KEY)
      .then((res) => {
        console.log("Email went through", res);
        alert("Message Sent Successfully");
        setName("");
        setEmail("");
        setMessage("");
        setNumber("");
      })
      .catch((err) => {
        console.log(err.text);
        alert("Something went wrong!");
      });
  };

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
              <Link to="">
                <FaTwitter className="fic" />
              </Link>
              <Link to="">
                <FaFacebookF className="fic" />
              </Link>
              <Link to="">
                <FaPinterestP className="fic" />
              </Link>
              <Link to="https://www.instagram.com/apostlechidialagwu?igsh=NzcwN3J1cHpweWY4&utm_source=qr">
                <FaInstagram className="fic" />
              </Link>
            </div>
          </div>
        </div>

        <form className="contactForm" onSubmit={handleOnSubmit}>
          <div className="formInputGroup">
            <div className="formInput">
              {/* <input type="text" placeholder="Enter full name" /> */}
              {/* <label for="from_name">Name</label> */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name.."
                required
              />
            </div>
            <div className="formInput">
              {/* <input type="text" placeholder="Enter email address" /> */}
              {/* <label>E-mail</label> */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                required
              />
            </div>
          </div>

          <div className="formInputGroup">
            <div className="formInput">
              <input
                type="text"
                placeholder="phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="formInput">
              <select>
                <option>Select your Country</option>
                <option value="Nigeria">Nigeria</option>
                <option value="USA">USA</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>

          <div className="textField">
            {/* <textarea placeholder="Enter Message"></textarea> */}
            <textarea
              rows="8"
              cols="30"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message.."
              required
            />
          </div>

          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
