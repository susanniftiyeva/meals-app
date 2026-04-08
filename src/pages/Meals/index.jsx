import { useEffect, useState } from "react";
import CategoryFilter from "../../components/CategoryFilter";
import MealCard from "../../components/MealCard";
import "./index.scss";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const Meals = () => {
  const [recipes, setRecipes] = useState([]);
  const [detailedMeals, setDetailedMeals] = useState([]);

 
  useEffect(() => {
    const fetchInitialMeals = async () => {
      try {
        const res = await fetch(`${BASE_URL}/search.php?s=`);
        const data = await res.json();
        setRecipes(data.meals || []);
      } catch (err) {
        console.error("Initial fetch error:", err);
      }
    };

    fetchInitialMeals();
  }, []);


  useEffect(() => {
    if (!recipes || recipes.length === 0) return;

    const fetchDetails = async () => {
      try {
        const results = await Promise.all(
          recipes.map(async (meal) => {
            if (!meal.idMeal) return null;

            const res = await fetch(
              `${BASE_URL}/lookup.php?i=${meal.idMeal}`
            );
            const data = await res.json();
            return data.meals ? data.meals[0] : null;
          })
        );

        setDetailedMeals(results.filter(Boolean));
      } catch (err) {
        console.error("Detail fetch error:", err);
      }
    };

    fetchDetails();
  }, [recipes]);

  return (
    <>
      <CategoryFilter setRecipes={setRecipes} />

      <div className="meals-page">
        <h1>All Meals</h1>

        <div className="meals-grid">
          {detailedMeals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Meals;