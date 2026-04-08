import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import CategoryFilter from "../../components/CategoryFilter";
import MealCard from "../../components/MealCard";
import searchAnimation from "../../assets/animations/Search (1).json";
import "./index.scss";

const Search = () => {
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    if (!recipes.length) return;

    const needsDetails = !recipes[0].strInstructions;
    if (!needsDetails) return;

    const fetchFullRecipes = async () => {
      const fullData = await Promise.all(
        recipes.map(async (item) => {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`
          );
          const data = await res.json();
          return data.meals[0];
        })
      );

      setRecipes(fullData);
    };

    fetchFullRecipes();
  }, [recipes]);

  return (
    <>
      <CategoryFilter setRecipes={setRecipes} />

      {recipes.length === 0 ? (
        <div className="search-empty">
          <h2 className="empty-title">
            Let's choose a country and start cooking!
          </h2>

          <Lottie
            animationData={searchAnimation}
            className="search-animation"
          />
        </div>
      ) : (
        <section className="recipes">
          <div className="recipes__list">
            {recipes.map((item) => (
              <MealCard key={item.idMeal} meal={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Search;