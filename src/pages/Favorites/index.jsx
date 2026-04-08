import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import MealCard from "../../components/MealCard"; // path-i yoxla
import "./index.scss";

const Favorites = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <section className="favorites">
      <h1>My Favorite Meals ❤️</h1>

      <div className="favorites-grid">
        {favorites.map((item) => (
          <MealCard
            key={item.idMeal || item.id}
            meal={item}
            showButton={true}
            showFavorite={true}
            showCategory={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Favorites;