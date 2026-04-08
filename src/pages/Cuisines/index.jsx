import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoryFilter from "../../components/CategoryFilter";
import MealCard from "../../components/MealCard";
import "./index.scss";

const Cuisines = () => {
const [recipes, setRecipes] = useState([]);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(false);
  const { areaName } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setAreas(data.meals || []));
  }, []);

  useEffect(() => {
    if (!areaName) return;

    setLoading(true);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals || []);
        setLoading(false);
      });
  }, [areaName]);

  return (
    <>
      <CategoryFilter setRecipes={setRecipes} />

      <div className="cuisines-page">
        <h2>World Cuisines</h2>

       
        {!areaName && (
          <ul className="areas-list">
            {areas.map((item) => (
              <li key={item.strArea}>
             
                <Link to={`/cuisines/${item.strArea}`}>{item.strArea}</Link>
              </li>
            ))}
          </ul>
        )}
       
        {areaName && (
          <div className="meals-list">
            {loading && <p>Loading...</p>}

            <div className="meals-grid">
              {recipes.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cuisines;
