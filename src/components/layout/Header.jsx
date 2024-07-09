import React from "react";
import Nav from "./Nav";
import Hero from "../subcomponents/Hero";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <Nav />
      
      {location.pathname === "/" ? (
       <Hero />
      ) : (
        <h1 className="headPathName">
          {location.pathname.replace(/\//g, " ")}
        </h1>
      )}
    </header>
  );
};

export default Header;
