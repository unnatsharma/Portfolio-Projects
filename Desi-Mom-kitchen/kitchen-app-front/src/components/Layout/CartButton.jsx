import React from "react";
import "./CartButton.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import cartContext from "../../store/cart-context";
import { useEffect } from "react";
import { useState } from "react";

const CartButton = (props) => {
  const [btnCSS, setBtnCSS] = useState(false);
  const cartCtx = useContext(cartContext);
  const { items } = cartCtx;

  const cartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClass = `button ${btnCSS ? " bump" : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnCSS(true);

    const timer = setTimeout(() => {
      setBtnCSS(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{cartItems}</span>
    </button>
  );
};

export default CartButton;
