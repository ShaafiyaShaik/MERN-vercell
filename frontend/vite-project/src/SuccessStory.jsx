import React from 'react';

function SuccessStory() {
  return (
    <section className="success-story">
      <div className="container">
        <h2 className="section-title">Real-Life Adoption Success Story</h2>
        <div className="story">
          <div className="story-image">
            <img src="/assets/bg.jpg" alt="Adopted Pet" />
          </div>
          <div className="story-content">
            <div className="quote-container">
              <div className="quote-icon">
                <img src="/assets/quote.jpg" alt="Quote Icon" />
              </div>
              <p className="quote">"Adopting Max was one of the best decisions we ever made. He brings so much joy and love into our home every day."</p>
            </div>
            <p className="author">- Emily, Proud Pet Parent</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStory;
