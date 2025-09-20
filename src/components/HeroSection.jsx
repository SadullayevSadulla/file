import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            O'quv markazimizda
            <br />
            bolalar ingliz tilini o'yin
            <br />
            va amaliy
            <br />
            mashg'ulotlar orqali
            <br />
            o'rganadilar
            <span className="highlighted-text">ingliz tilini</span>
          </h1>
          <div className="play-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5,3 19,12 5,21 5,3"/>
            </svg>
          </div>
          <button className="cta-button">
            Biz bilan bog'lanish
            <div className="button-play-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5,3 19,12 5,21 5,3"/>
              </svg>
            </div>
          </button>
        </div>
        
        <div className="hero-images">
          <div className="child-image boy-image">
            <div className="image-placeholder">
              <div className="child-avatar">
                <div className="face">
                  <div className="eyes">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                  </div>
                  <div className="smile"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="child-image girl-image">
            <div className="image-placeholder">
              <div className="child-avatar">
                <div className="face">
                  <div className="eyes">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                  </div>
                  <div className="smile"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="decorative-elements">
        <div className="circle-element"></div>
        <div className="lines-element"></div>
        <div className="arrow-element"></div>
      </div>
    </div>
  );
};

export default HeroSection;
