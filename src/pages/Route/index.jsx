import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Home from "../Home";
import Recipes from "../Recipes";
import RecipeDetail from "../RecipeDetail";
import Meals from "../Meals";
import CategoryFilter from "../../components/CategoryFilter";
import Search from "../Search";
import Cuisines from "../Cuisines";
import Ingredients from "../Ingredients";
import IngredientDetail from "../IngredientDetail";
import Favorites from "../Favorites";
import Login from "../Login";
import ForgotPassword from "../../components/ForgotPassword";
import Signup from "../../components/Signup";
import Footer from "../../components/Footer";

const AppRoutes = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/signup", "/forgot-password"];

  return (
    <>
  {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="/recipes/:id" element={<RecipeDetail />} />
    <Route path="/meals" element={<Meals />} />
    <Route path="/categoryfilter" element={<CategoryFilter />} />
    <Route path="/search" element={<Search />} />
    <Route path="/cuisines" element={<Cuisines />} />
    <Route path="/cuisines/:areaName" element={<Cuisines />} />
    <Route path="/ingredients" element={<Ingredients />} />
    <Route path="/ingredients/:name" element={<IngredientDetail />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>

  {!hideNavbarRoutes.includes(location.pathname) && <Footer />}
</>
  );
};

export default AppRoutes;
