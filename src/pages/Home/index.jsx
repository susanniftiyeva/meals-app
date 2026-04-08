import Hero from "../../components/Hero";
import MealList from "../../components/MealList";
import Loading from "../../components/Loading";
import CookingFlow from "../../components/CookingFlow";
import CookingMood from "../../components/CookingMood";

const Home = () => {
  return (
    <main className="container">
      <Hero />
      <MealList />
      <Loading />
      <CookingFlow />
      <CookingMood />
    </main>
  );
};

export default Home;
