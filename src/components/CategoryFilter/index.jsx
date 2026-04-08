import { useEffect, useState } from "react";
import "./index.scss";

const CategoryFilter = ({ setRecipes }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategories(data.meals || []));

    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setAreas(data.meals || []));
  }, []);

  // Filter logic
  useEffect(() => {
    if (!search && !category && !area) {
      setRecipes([]);
      return;
    }

    setLoading(true);

    let url = "";

    if (search) {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
        search,
      )}`;
    } else if (category) {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
        category,
      )}`;
    } else if (area) {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(
        area,
      )}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [search, category, area, setRecipes]);

  return (
    <section className="recipes-top">
      <div className="recipes-hero">
        <h2>Filter by meal type or world cuisines</h2>

        <div className="filters">
          <div className="select-wrapper">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Meal Type</option>
              {categories.map((item) => (
                <option key={item.strCategory} value={item.strCategory}>
                  {item.strCategory}
                </option>
              ))}
            </select>
            <svg viewBox="0 0 640 640">
              <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
            </svg>
          </div>

          <div className="select-wrapper">
            <select value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">World Cuisines</option>
              {areas.map((item) => (
                <option key={item.strArea} value={item.strArea}>
                  {item.strArea}
                </option>
              ))}
            </select>
            <svg viewBox="0 0 640 640">
              <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
            </svg>
          </div>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loading && <p className="loading">Loading...</p>}
      </div>
    </section>
  );
};

export default CategoryFilter;
