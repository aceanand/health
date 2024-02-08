import React from "react";
import img from "../Plastic.png";
import About from "./About";
import FAQ from "./Faq";
function Home() {
  return (
    <div>
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
      <div class="content">
        <h1>Protein X</h1>
        <p>This is paragraph</p>

        <svg
          class="svg1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100"
          height="100"
        >
          <circle cx="50" cy="50" r="40" fill="#63E6BE" />

          <path
            fill="none"
            stroke="#ffffff"
            stroke-width="5"
            d="M20 50 L40 70 L80 30"
          />
        </svg>
        <p class="p1">This is a paragraph after the first SVG.</p>
        <svg
          class="svg2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100"
          height="100"
        >
          <circle cx="50" cy="50" r="40" fill="#63E6BE" />

          <path
            fill="none"
            stroke="#ffffff"
            stroke-width="5"
            d="M20 50 L40 70 L80 30"
          />
        </svg>
        <p class="p2">This is a paragraph after the second SVG.</p>
        <button>Explore</button>
      </div>
      <div class="image">
        <img src={img} alt="" />
      </div>

      <div class="faqs">
        <FAQ />
      </div>
    </div>
  );
}
export default Home;
