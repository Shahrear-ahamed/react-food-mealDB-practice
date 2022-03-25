import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Food.css";

const Food = ({ food, addToCart }) => {
  //   console.log(food);
  const { strMealThumb, strMeal, strInstructions } = food;
  return (
    <div className="food-cart">
      <img src={strMealThumb} alt="" />
      <div className="meal-info">
        <h3>{strMeal}</h3>
        <p>{strInstructions.slice(0, 300)} ......</p>
      </div>
      <button className="addToCart-btn" onClick={() => addToCart(food)}>
        <p className="addCart">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Food;
