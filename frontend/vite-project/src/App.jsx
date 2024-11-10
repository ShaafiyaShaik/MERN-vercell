import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';import './App.css';
import './all.css';
import Header from './Header';
import SuccessStory from './SuccessStory';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import About from './About';
import Hero from './Hero';
import FormSection from './FormSection';
import Login from './Login';
import Footer from './Footer';
import videoFile from './assets/video1.mp4';

function App() {
  const [showFormSection, setShowFormSection] = useState(false);

  const handleShowRegistration = () => {
    setShowFormSection(true);
    console.log("Button clicked, showing form section:", showFormSection);
  };

  return (
    <div className="App">
      <section id="page1">
        <video className="video" autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
        </video>
        <Header />
        <div className="overlay0">
          <h1>Giving Pets the Care They Deserve.</h1>
          <p>Join us in providing the best care for your pets.</p>
        </div>
      </section>

      <SuccessStory />
      <WhyChooseUs />
      <Services />
      <About />
      <Hero handleShowRegistration={handleShowRegistration} />

      {/* Conditionally render FormSection below Hero */}
      {showFormSection && <FormSection />}

      <Login />
      <Footer />
    </div>
  );
}

export default App;
