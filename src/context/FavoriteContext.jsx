import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const toggleFavorite = (meal) => {
    const mealId = meal.idMeal || meal.id;
    const mealName = meal.strMeal || meal.name;
    const mealImage = meal.strMealThumb || meal.image;

    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === mealId);

      let updated;

      if (exists) {
        updated = prev.filter((item) => item.id !== mealId);
      } else {
        updated = [
          ...prev,
          {
            id: mealId,
            name: mealName,
            image: mealImage,
          },
        ];
      }

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorited = (id) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, toggleFavorite, isFavorited }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};