import React from "react";
import "./Cart.css"

const Cart = ({cart}) => {
  // console.log(cart);
  const {strMeal} = cart;
  return (
    <div className="cart-section">
      <h2 className="title">Data Details</h2>
      <div className="info">
        <h4>Food Name: {strMeal}</h4>
      </div>
    </div>
  );
};

export default Cart;
