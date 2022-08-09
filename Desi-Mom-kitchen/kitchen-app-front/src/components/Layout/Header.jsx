import React from "react";
import "./Header.css";
import mealsImage from "../../assets/main-pic.jpeg";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Order Food</h1>
        <CartButton />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Desi Mom kitchen" />
      </div>
    </>
  );
};

export default Header;
