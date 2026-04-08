import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./index.scss";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const IngredientDetail = () => {
  const { ingredientName } = useParams();
  const navigate = useNavigate();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        `${BASE_URL}/filter.php?i=${ingredientName}`
      );
      const data = await res.json();
      setMeals(data.meals || []);
    };

    if (ingredientName) {
      fetchMeals();
    }
  }, [ingredientName]);

  return (
    <section className="ingredient-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

     
      <div className="ingredient-hero">
        <img
          src={`https://www.themealdb.com/images/ingredients/${ingredientName}.png`}
          alt={ingredientName}
        />

        <div className="ingredient-info">
          <h1>{ingredientName}</h1>
          <p>
            Explore delicious meals made with{" "}
            <strong>{ingredientName}</strong>.
          </p>
        </div>
      </div>

      <h2 className="meals-title">Meals with {ingredientName}</h2>

      <div className="meals-grid">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h4>{meal.strMeal}</h4>
            <button
              className="view-btn"
              onClick={() => navigate(`/recipes/${meal.idMeal}`)}
            >
              View Recipe → 
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IngredientDetail;