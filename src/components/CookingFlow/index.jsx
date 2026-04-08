import "./index.scss";

const CookingFlow = () => {
  return (
    <section className="cooking-flow">
      <div className="cooking-flow__container">
        <h2>Cook smarter, not harder</h2>
        
        <div className="cooking-flow__steps">
          <div className="step">
            <span className="step-number">01</span>
            <p>Find a recipe that fits your mood</p>
          </div>

          <div className="step">
            <span className="step-number">02</span>
            <p>Check ingredients before you start</p>
          </div>

          <div className="step">
            <span className="step-number">03</span>
            <p>Follow clear, step-by-step instructions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookingFlow;
