// import React, { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logoo from "../../assets/logoo.png";

const Nav = () => {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 150) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // // const scrollTop = window.scrollY;

  // const gradientStyle = {
  //   transition: "background-color 0.3s ease",
  //   background:
  //     location.pathname === "/home" && scrolled
  //       ? "#f6f6f6" 
  //       : "linear-gradient(to right,  #fff 50%, #007 50%)",
  // };
  return (
    // <nav style={gradientStyle} $isScroll={scrolled}>
    <nav>
      <div className="genLayout innerNav">
        <Link className="logoSide" to="/">
          <img src={logoo} alt="logo" />
          <h2>Apostle Chidi Alagwu Outreach</h2>
        </Link>

        <Link to="/donate">
          <button className="heroBtn">Donate</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
