import React from "react";
import logoo from "../../assets/logoo.png";
import { FaPhone } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className="genLayout">
        <div className="footGrid">
          <div className="footCard">
            <div className="footerLogo">
              <img src={logoo} alt="logo" />
              <h2>Apostle Chidi Alagwu Outreach</h2>
            </div>
            <div className="phone">
              <FaPhone style={{ fontSize: "20px", color: "white" }} />
              <p>08033572529</p>
            </div>
          </div>
          {/* second card */}
          <div className="footCard">
            <ul>
              <li>donate now</li>
              <li>contact us</li>
              <li>get help</li>
              <li>careers</li>
            </ul>
          </div>
          {/* third card */}
          <div className="footCard">
            <h2>stay informed</h2>
            <p>
              join our email newsletter to lean more about how we're working to
              end youth homelessness.
            </p>
            <div className="search">
              <input type="email address" placeholder="Email Address" />
              <button>submit</button>
            </div>
          </div>
        </div>
        <div className="bottomFoot">
          <div className="buttomCont">
            <p>
              Apostle Chidi Alagwu Outreach is a nonprofit 501(c)(3)
              organization; EIN/Tax ID number: <span>13-2725416</span> | DUNS
              number: 07-520-9411 © 2024 Apostle Chidi Alagwu Outreach. All
              rights reserved. <span>Privacy Policy</span>{" "}
            </p>
          </div>

          <div className="footerIcon">
            <span>
              <TiSocialFacebook style={{ fontSize: "2rem", color: "white" }} />
            </span>
            <span>
              <FaInstagram style={{ fontSize: "1.3rem ", color: "white" }}  href="https://www.instagram.com/apostlechidialagwu?igsh=NzcwN3J1cHpweWY4&utm_source=qr"/>
            </span>
            <span>
              <FaLinkedinIn style={{ fontSize: "1.3rem", color: "white" }} />
            </span>
            <span>
              <FaXTwitter style={{ fontSize: "1.3rem", color: "white" }} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
