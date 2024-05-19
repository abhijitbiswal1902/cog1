import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="landingpagebg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <Link to='/sign-in'>
        <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
