// Hero.js
import React from 'react';

function Hero({ handleShowRegistration }) {
  return (
    <section className="hero" id="page4">
      <div className="content">
        <h1>Pawsome Opportunities Await: Join Our Team</h1>
        <p>
          Searching for a way to de-stress while enjoying the company of adorable animals and earning at the same time? Look no further! Pawspace is in search of dependable individuals who can offer pet care services. Register with us today if this aligns with your interests. Waste no time!
        </p>
        <button className="cta-btn" onClick={handleShowRegistration}>Join PawSpace</button>
      </div>
      <div className="image-gallery">
        <div className="image-item">
          <img src="/assets/reg1.jpeg" alt="Cute Dog 1" />
          <span className="paw-icon">🐾</span>
        </div>
        <div className="image-item">
          <img src="/assets/reg2.jpg" alt="Cute Dog 2" />
          <span className="paw-icon">🐾</span>
        </div>
        <div className="image-item">
          <img src="/assets/reg3.jpg" alt="Cute Dog 3" />
          <span className="paw-icon">🐾</span>
        </div>
        <div className="image-item">
          <img src="/assets/reg4.jpg" alt="Cute Dog 4" />
          <span className="paw-icon">🐾</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
