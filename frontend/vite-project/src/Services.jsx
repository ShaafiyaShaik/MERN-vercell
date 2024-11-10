// Services.js
import React from 'react';

function Services() {
  return (
    <section className="serv" id="page2">
      <div className="container">
        <a href="/assets/grooming.html" className="box grooming">
          <h2>Pet Grooming</h2>
        </a>
        <a href="/assets/sitting.html" className="box sitting">
          <h2>Pet Sitting</h2>
        </a>
        <a href="/assets/walking.html" className="box walking">
          <h2>Dog Walking</h2>
        </a>
        <a href="/assets/boarding.html" className="box boarding">
          <h2>Pet Boarding</h2>
        </a>
        <a href="/assets/vet.html" className="box vet">
          <h2>Veterinary Care</h2>
        </a>
        <a href="/assets/train.html" className="box pet">
          <h2>Pet Training</h2>
        </a>
      </div>
    </section>
  );
}

export default Services;
