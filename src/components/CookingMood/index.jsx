import "./index.scss";

const CookingMood = () => {
  return (
    <section className="cooking-mood">
      <div className="cooking-mood__container">
        <h2>What are you cooking today?</h2>

        <div className="cooking-mood__options">
          <div className="mood-item">
            <span className="emoji"><i className="fa-solid fa-clock"></i></span>
            <span>Quick dinner</span>
          </div>

          <div className="mood-item">
            <span className="emoji"><i className="fa-solid fa-leaf"></i></span>
            <span>Healthy meal</span>
          </div>

          <div className="mood-item">
            <span className="emoji"><i className="fa-solid fa-seedling"></i></span>
            <span>Vegan option</span>
          </div>

          <div className="mood-item">
            <span className="emoji"><i className="fa-solid fa-bowl-food"></i></span>
            <span>Comfort food</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookingMood;
