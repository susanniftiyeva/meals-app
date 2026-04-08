import { useEffect, useState } from "react";
import MealCard from "../../components/MealCard";
import "./index.scss";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [meals, setMeals] = useState([]);

  const getIngredients = async () => {
    const res = await fetch(`${BASE_URL}/list.php?i=list`);
    return res.json();
  };

  const getMealsByIngredient = async (ingredient) => {
    const res = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`);
    return res.json();
  };

  useEffect(() => {
    getIngredients().then((data) => setIngredients(data.meals || []));
  }, []);

  const handleClick = (name) => {
    getMealsByIngredient(name).then((data) =>
      setMeals(data.meals || [])
    );
  };

  return (
    <section className="ingredients">
      <h1>Ingredients</h1>

      <div className="ingredients__grid">
        {ingredients.slice(0, 30).map((item) => (
          <button
            key={item.idIngredient}
            className="ingredient-btn"
            onClick={() => handleClick(item.strIngredient)}
          >
            {item.strIngredient}
          </button>
        ))}
      </div>

      <div className="meals-grid">
        {meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            meal={meal}
            showCategory={false}
          />
        ))}
      </div>
    </section>
  );
};

export default Ingredients;