import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.scss";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <section className="recipe-detail">
      <div className="container">
        <div className="recipe-detail__header">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <div className="info">
            <h1>{recipe.strMeal}</h1>
            <p>
              <strong>Category:</strong> {recipe.strCategory}
            </p>
            <p>
              <strong>Area:</strong> {recipe.strArea}
            </p>
          </div>
        </div>

        <div className="recipe-detail__content">
          <h2>Instructions</h2>
          <p>{recipe.strInstructions}</p>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetail;
  