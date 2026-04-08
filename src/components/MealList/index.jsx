import MealCard from "../MealCard";
import "./index.scss";
import pastaImg from "../../assets/images/pasta.jpg";
import chickenImg from "../../assets/images/chicken.jpg";
import veganImg from "../../assets/images/olena-bohovyk-Z9z7l9ByRNE-unsplash.jpg";
import seafoodImg from "../../assets/images/seafood.jpg";

const meals = [
  {
    id: 1,
    title: "Creamy Pasta",
    category: "Italian",
    image: pastaImg,
  },
  {
    id: 2,
    title: "Grilled Chicken",
    category: "Healthy",
    image: chickenImg,
  },
  {
    id: 3,
    title: "Vegan Bowl",
    category: "Vegan",
    image: veganImg,
  },
  {
    id: 4,
    title: "Seafood Soup",
    category: "Seafood",
    image: seafoodImg,
  },
];

const MealList = () => {
  return (
    <section className="meal-list">
      <div className="meal-list-title">
        <h2>Popular Meals</h2>
        <p>Most loved recipes by our users</p>
      </div>
      <div className="meal-grid">
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            showCategory={true}
            showButton={false}
            showFavorite={false}
          />
        ))}
      </div>
    </section>
  );
};

export default MealList;
