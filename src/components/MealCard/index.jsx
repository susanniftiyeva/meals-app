import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import "./index.scss";

const MealCard = ({ meal, showButton = true, showFavorite = true,  showCategory = false }) => {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorited } = useContext(FavoriteContext);

  const title = meal.strMeal || meal.title || meal.name;
  const image = meal.strMealThumb || meal.image;
  const category = meal.strCategory || meal.category;
  const id = meal.idMeal || meal.id;

  return (
    <div className="meal-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />

        {showFavorite && (
          <button
            className="favorite-btn"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(meal);
            }}
          >
            <i
              className={
                isFavorited(id) ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }
              style={{
                color: isFavorited(id) ? "#ff4d4f" : "#444343",
                fontSize: "20px",
              }}
            ></i>
          </button>
        )}
      </div>

      <div className="meal-card__content">
        <h3>{title}</h3>

       {showCategory && category && <span>{category}</span>}

        {showButton && (
          <button
            className="view-btn"
            onClick={() => navigate(`/recipes/${id}`)}
          >
            View Recipe →
          </button>
        )}
      </div>
    </div>
  );
};

export default MealCard;
