import { useNavigate } from "react-router-dom";
import "./index.scss";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Good Food, Good Mood</h1>
        <p>Discover recipes that make you feel better every day.</p>
        <button onClick={() => navigate("/recipes")}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
