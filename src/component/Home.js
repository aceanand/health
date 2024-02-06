import React from "react";
import img from "../Plastic.png";
function Home() {
  return (
    <div className="home-container">
      <div className="left">
        <h1>Personalized</h1>
        <h2>Proteins & Gummies</h2>
      </div>
      <button className="cta-button">Explore →</button>
      <div className="right">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
export default Home;
