import CategoryFilter from "../../components/CategoryFilter";
import { useState, useEffect } from "react";
import MealCard from "../../components/MealCard";
import "./index.scss";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // if (!recipes.length) return;

    // const needsDetails = !recipes[0].strInstructions;
    // if (!needsDetails) return;

    const fetchFullRecipes = async () => {
      const fullData = await Promise.all(
        recipes.map(async (item) => {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`,
          );
          const data = await res.json();
          return data.meals[0];
        }),
      );

      setRecipes(fullData);
    };

    fetchFullRecipes();
  }, [recipes]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const toggleFavorite = (item) => {
    let updatedFavorites = [...favorites];

    const exists = updatedFavorites.find((fav) => fav.id === item.idMeal);

    if (exists) {
      updatedFavorites = updatedFavorites.filter(
        (fav) => fav.id !== item.idMeal,
      );
    } else {
      updatedFavorites.push({
        id: item.idMeal,
        name: item.strMeal,
        image: item.strMealThumb,
      });
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isFavorited = (id) => {
    return favorites.some((fav) => fav.id === id);
  }; 

  return (
    <>
      <CategoryFilter setRecipes={setRecipes} />

      <section className="recipes">
        <div className="recipes__list">
          {recipes.map((item) => (
            <MealCard
              key={item.idMeal}
              meal={item}
              showButton={true}
              showFavorite={true}
              toggleFavorite={toggleFavorite}
              isFavorited={isFavorited(item.idMeal)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Recipes;
