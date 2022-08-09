import React from "react";
import "./CartButton.css";
import CartIcon from "../Cart/CartIcon";

const CartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};

export default CartButton;
