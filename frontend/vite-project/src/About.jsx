// About.js
import React from 'react';

function About() {
  return (
    <section id="about2">
      <div className="container2">
        <h1>About Us</h1>
        <section id="company-story">
          <div className="text-and-image">
            <div className="text2">
              <h2>Our Story</h2>
              <p>
                Our journey began with a love for animals and a passion for providing top-quality pet care. We started as a small team of pet lovers, determined to change the way pet care is approached. Over the years, we’ve grown into a trusted name in pet services, offering a wide range of care options tailored to the unique needs of every pet.
              </p>
            </div>
            <div className="image2">
              <img src="/assets/pets.jpg" alt="Dog Image 1" />
            </div>
          </div>
        </section>

        <section id="mission2">
          <div className="text-and-image">
            <div className="text2">
              <h2>Our Mission</h2>
              <p>
                Our mission is simple: to provide the highest quality of care and companionship for your beloved pets. We are committed to ensuring their safety, well-being, and happiness, treating every pet as if they were our own.
              </p>
            </div>
            <div className="image2">
              <img src="/assets/miss.webp" alt="Dog Image 2" />
            </div>
          </div>
        </section>

        <section id="team2">
          <h3>Meet Our Team</h3>
          <div className="team-member">
            <img src="https://www.plenodelafemp.es/wp-content/uploads/2014/10/speaker-3-600x670.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://tse1.mm.bing.net/th?id=OIP.qsuUPPkTxRUoS4SpNGZtkwHaHa&pid=Api&P=0&h=180" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Lead Pet Trainer</p>
          </div>
          <div className="team-member">
            <img src="https://e0.365dm.com/19/01/1600x900/skysports-sam-johnson-scotland_4563381.jpg" alt="Team Member 3" />
            <h3>Sam Johnson</h3>
            <p>Veterinary Expert</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
