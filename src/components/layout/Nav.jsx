import React from "react";
import { Link } from "react-router-dom";
import logoo from "../../assets/logoo.png";

const Nav = () => {
  return (
    <nav>
      <div className="genLayout innerNav">
        <Link className="logoSide" to="/home">
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
