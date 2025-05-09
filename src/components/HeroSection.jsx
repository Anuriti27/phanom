import React from 'react';
import '../styles/HeroSection.css'; 

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-heading">
        Let’s <span className="highlight">innovation</span> meets your <span className="highlight">excellence</span>
      </h1>
      <p className="hero-subtext">
        Excellence Refined, Innovation Ignited, The Future Starts Here
      </p>
      <button className="cta-button">Book an Appointment</button>

      
      <div className="phantom-text">Phanom</div>

   
      <div className="stats">
        <div>
          <h2>24/7</h2>
          <p>Online Support</p>
        </div>
        <div>
          <h2>100+</h2>
          <p>Web Developed & Application</p>
        </div>
        <div>
          <h2>5+</h2>
          <p>Year Experience</p>
        </div>
      </div>

      
      <div className="logo-row">
        <img src="/logos/award.png" alt="award" />
        <img src="/logos/qc.png" alt="qc" />
        <img src="/logos/power.png" alt="power" />
        <img src="/logos/media.png" alt="media" />
        <img src="/logos/logoipsum.png" alt="logoipsum" />
      </div>
    </div>
  );
};

export default Hero;