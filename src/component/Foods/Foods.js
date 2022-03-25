import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import "./Foods.css";

function Foods() {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  const addToCart = (singleFood) =>{
    // here we can got full food data via object
    //   console.log(singleFood.strMeal);
    setCart(singleFood);
  }

  return (
    <div className="items-section">
      <div className="foods-items">
        {foods.map((food) => (
          <Food key={food.idMeal} food={food} addToCart={addToCart}></Food>
        ))}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default Foods;
