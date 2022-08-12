import React from "react";
import "./Header.css";
import mealsImage from "../../assets/main-pic.jpeg";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>Order Food</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Desi Mom kitchen" />
      </div>
    </>
  );
};

export default Header;
